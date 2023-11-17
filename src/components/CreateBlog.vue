<template>
  <div class="pro-container">
    <AdministrationNav />
    <div class="create-post">
        <BlogCoverPreview v-show="this.$store.state.blogPhotoPreview" class="blog-cover-preview" />
        <TheLoader v-show="loading" class="loader" />
        <div class="container">
            <div :class="{ invisible: !error }" class="err-message">
                <p><span>Error:</span>{{ this.errorMsg }}</p>
            </div>
            <div class="blog-info">
                <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" class="input-field" />
                <div class="upload-file">
                    <label for="blog-photo" class="upload-button">Upload Cover Photo</label>
                    <input type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, .jpeg" class="file-input" />
                    <button @click="openPreview" class="router-button" :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }">
                        Preview Photo
                    </button>
                    <span class="file-chosen">File Chosen: {{ this.$store.state.blogPhotoName }}</span>
                </div>
            </div>
            <textarea placeholder="Enter Blog Introduction" v-model="blogIntro" class="textarea-field"></textarea>
            <div class="editor">
                <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler @image-added="imageHandler" />
            </div>
            <div class="blog-actions">
                <button @click="uploadBlog" class="upload-button">Publish Blog</button>
                <router-link class="router-button" :to="{ name: 'BlogPreview' }">Post Preview</router-link>
            </div>
        </div>
    </div>
</div>

  </template>
  <script>
    import AdministrationNav from "@/components/core/AdministrationNav.vue";
    import BlogCoverPreview from "@/components/BlogCoverPreview";
    import TheLoader from "@/components/TheLoader";
    import firebase from "firebase/app";
    import "firebase/storage";
    import db from "@/firebase/firebaseInit";
    import Quill from "quill";
    window.Quill = Quill;
    const ImageResize = require("quill-image-resize-module").default;
    Quill.register("modules/imageResize", ImageResize);
    export default {
      name: "CreateBlog",
      data() {
        return {
          file: null,
          error: null,
          errorMsg: null,
          loading: null,
          editorSettings: {
            modules: {
              imageResize: {},
            },
          },
        };
      },
      components: {
        AdministrationNav,
        BlogCoverPreview,
        TheLoader,
      },
      methods: {
        fileChange() {
          this.file = this.$refs.blogPhoto.files[0];
          const fileName = this.file.name;
          this.$store.commit("fileNameChange", fileName);
          this.$store.commit("createFileURL", URL.createObjectURL(this.file));
        },
        openPreview() {
          this.$store.commit("openPhotoPreview");
        },
        imageHandler(file, Editor, cursorLocation, resetUploader) {
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}` );
          docRef.put(file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              Editor.insertEmbed(cursorLocation, "image", downloadURL);
              resetUploader();
            }
          );
        },
        uploadBlog() {
          if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
            if (this.file) {
              this.loading = true;
              const storageRef = firebase.storage().ref();
              const docRef = storageRef.child(`documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`);
              docRef.put(this.file).on(
                "state_changed",
                (snapshot) => {
                  console.log(snapshot);
                },
                (err) => {
                  console.log(err);
                  this.loading = false;
                },
                async () => {
                  const downloadURL = await docRef.getDownloadURL();
                  const timestamp = await Date.now();
                  const dataBase = await db.collection("blogPosts").doc();
                  await dataBase.set({
                    blogID: dataBase.id,
                    blogHTML: this.blogHTML,
                    blogCoverPhoto: downloadURL,
                    blogCoverPhotoName: this.blogCoverPhotoName,
                    blogTitle: this.blogTitle,
                    blogIntro: this.blogIntro,
                    profileId: this.profileId,
                    date: timestamp,
                  });
                  await this.$store.dispatch("getPost");
                  this.loading = false;
                  this.$router.push({ name: "ViewBlog", params: { blogid: dataBase.id } });
                }
              );
              return;
            }
            this.error = true;
            this.errorMsg = "Please ensure you uploaded a cover photo!";
            setTimeout(() => {
              this.error = false;
            }, 5000);
            return;
          }
          this.error = true;
          this.errorMsg = "Please ensure Blog Title & Blog Post has been filled!";
          setTimeout(() => {
            this.error = false;
          }, 5000);
          return;
        },
      },
      computed: {
        profileId() {
          return this.$store.state.profileId;
        },
        blogCoverPhotoName() {
          return this.$store.state.blogPhotoName;
        },
        blogTitle: {
          get() {
            return this.$store.state.blogTitle;
          },
          set(payload) {
            this.$store.commit("updateBlogTitle", payload);
          },
        },
        blogIntro: {
          get() {
            return this.$store.state.blogIntro;
          },
          set(payload) {
            this.$store.commit("updateBlogIntro", payload);
          },
        },
        blogHTML: {
          get() {
            return this.$store.state.blogHTML;
          },
          set(payload) {
            this.$store.commit("newBlogPost", payload);
          },
        },
      },
    };
    </script>

<style scoped>
.pro-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    padding: 20px;
}

.create-post {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 800px;
}

.blog-cover-preview {
    margin-top: 20px;
    width: 100%;
    border-radius: 8px;
}

.loader {
    margin-top: 20px;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.err-message {
    display: flex;
    align-items: center;
    background-color: #f44336;
    color: white;
    padding: 10px;
    border-radius: 8px;
}

.err-message p {
    margin: 0;
}

.input-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
.upload-file{
  margin-top: 10px;
}
.file-input {
    display: none;
}

.preview-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.preview-button.button-inactive {
    background-color: #ccc;
    cursor: not-allowed;
}

.file-chosen {
    margin-top: 10px;
}

.textarea-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: none;
}

.editor {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
}

.upload-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.upload-button:hover {
    background-color: #45a049;
}

.router-button {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.router-button:hover {
    background-color: #0056b3;
}

  </style>
