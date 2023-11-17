<template>
<div class="pro-container">
    <AdministrationNav />
    <div class="create-post">
        <ProductPhotoPreview v-show="this.$store.state.productPhotoPreview" class="product-photo-preview" />
        
          
       
        <div class="container">
            <div :class="{ invisible: !error }" class="err-message">
                <p><span>Error:</span>{{ this.errorMsg }}</p>
            </div>
            <TheLoader   v-show="loading"/>
            <div class="blog-info">
                <div class="input-group">
                    <label for="title">Enter Product Name</label>
                    <input type="text" v-model="productTitle" class="input-field" />
                </div>
                <div class="input-group">
                  <label for="brand">Product Category</label>
                  <select v-model="productCategory" class="input-field" @change="filterProductBrands">
                    <option value="Dairy">Dairy</option>
                    <option value="LivestockAndPoultry">Livestock and Poultry</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Grains">Grains and Cereals</option>
                    <option value="Legumes">Legumes</option>
                    <option value="HerbsAndSpices">Herbs and Spices</option>
                    <option value="MiraaAndMogoka">Miraa and Mogoka</option>
                  </select>
                </div>
                <div class="input-group">
                  <label for="brand">Select Type of product</label>
                  <select v-model="productBrand" class="input-field">
                    <option value="input">Input Brand Manually</option>
                    <option v-for="(brand, index) in filteredBrands" :key="index" :value="brand">{{ brand }}</option>
                  </select>
                  <!-- Display an input field when "Input Brand Manually" is selected -->
                  <input
                    v-if="productBrand === 'input'"
                    type="text"
                    v-model="productBrand"
                    placeholder="Enter Brand Manually"
                    class="input-field"
                  />
                </div>

                <div class="input-group">
                    <label for="price">Price (Per KG)</label>
                    <input type="number" v-model="productPrice" class="input-field" />
                </div>
                <div class="input-group">
                  <div class="upload">
                      <label for="product-photo">Upload Product Photo</label>
                      <span class="file-chosen">File Chosen: {{ this.$store.state.productPhotoName }}</span>
                  </div>
                    <input type="file" ref="productPhoto" id="product-photo" @change="productFileChange" accept=".png, .jpg, .jpeg, .webp, .avif" class="file-input" />
                </div>
                <div class="input-group">
                    
                    <button @click="openProductPreview" class="preview-button" :class="{ 'button-inactive': !this.$store.state.productPhotoFileURL }">
                        Preview Photo
                    </button>
                    
                </div>
                <div class="input-group">
                    <label for="product-details">Add Product Details</label>
                    <textarea v-model="productDetails" rows="2" placeholder="Enter Product Details" class="textarea-field"></textarea>
                </div>
            </div>
            <div class="blog-actions">
                <button @click="uploadProduct" class="upload-button">Add Inventory</button>
            </div>
        </div>
    </div>
</div>
  </template>
  <script>
    import AdministrationNav from "@/components/core/AdministrationNav.vue";
    import ProductPhotoPreview from "@/components/ProductPhotoPreview";
    import TheLoader from "@/components/TheLoader";
    import firebase from "firebase/app";
    import "firebase/storage";
    import db from "@/firebase/firebaseInit";
    export default {
      name: "AdministrationPage",
      data() {
        return {
          file: null,
          error: null,
          errorMsg: null,
          loading: null,
          uploading: null,
          productCategory: 'Dairy', // Default value for productCategory
          // Add other categories and their brands here
          brandsByCategory : {
          Dairy: ['Cheese', 'Milk', 'Yogurt', 'Butter'],
          LivestockAndPoultry: ['Bulls', 'Chicken', 'Goats', 'Pigs'],
          Seafood: ['Salmon', 'Shrimp', 'Tuna', 'Cod'],
          Eggs: ['Chicken Eggs', 'Duck Eggs'],
          Fruits: [
            'Apples', 'Bananas', 'Oranges', 'Mangoes', 'Pineapples', 'Strawberries',
            'Water Mellon', 'Grapes'
          ],
          Vegetables: [
            'Tomatoes', 'Carrots', 'Broccoli', 'Spinach', 'Onions', 'Cucumbers', 'Cabbages',
            'Sukuma Wiki', 'Mchicha', 'Ocra (Mabenda)', 'Egg Plant (rafaya)'
          ],
          Grains: [
            'Wheat', 'Rice', 'Corn', 'Barley', 'Maize', 'Sorghum', 'Millet'
          ],
          Legumes: [
            'Beans', 'Peas', 'Cow Peas', 'Green Peas', 'Pojo', 'Pegeon Peas'
          ],
          HerbsAndSpices: [
            'Basil', 'Rosemary', 'Thyme', 'Cilantro', 'Mint', 'Oregano'
          ],
          MiraaAndMogoka: [
            'Mbeere Mogoka', 'Mchele Mogoka', 'Kimeru Mogoka', 'Kangeta Miraa', 'Gachoka miraa',
            'Igembe miraa', 'Mutuati miraa'
          ],
          Other: [
            'Chicken Eggs', 'Duck Eggs', 'Cheese', 'Milk', 'Yogurt', 'Butter'
          ],
        }

        };
      },
      components: {
        AdministrationNav,
        ProductPhotoPreview,
        TheLoader,
      },
    
      methods: {
            productFileChange() {
              this.file = this.$refs.productPhoto.files[0];
              const fileName = this.file.name;
              this.$store.commit("productFileNameChange", fileName);
              this.$store.commit("createProductFileURL", URL.createObjectURL(this.file));
            },
           
        openProductPreview() {
          this.$store.commit("openProductPhotoPreview");
        },
        
        uploadProduct() {
          if (this.productTitle.length !== 0 || this.productPrice.length !== 0) {
            if (this.file) {
              this.loading = true;
              const storageRef = firebase.storage().ref();
              const docRef = storageRef.child(`documents/ProductCoverPhotos/${this.$store.state.productPhotoName}` );
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
                  let dataBase = await db.collection("productItems").doc();
                  await dataBase.set({
                    productID: dataBase.id,
                    productCoverPhoto: downloadURL,
                    productCoverPhotoName: this.productCoverPhotoName,
                    productTitle: this.productTitle,
                    productPrice: this.productPrice,
                    productBrand: this.productBrand,
                    productDetails: this.productDetails,
                    profileId: this.profileId,
                    date: timestamp,
                  });
                  await this.$store.dispatch("getProductItems");
                  // await this.productItems.images.push(downloadURL),
                  this.loading = false;
                  this.$router.push({ name: "shop", params: { productid: dataBase.id } });
                  // this.reset();
                }
              );
              return;
            }
            this.error = true;
            this.errorMsg = "Please ensure you uploaded a product photo!";
            setTimeout(() => {
              this.error = false;
            }, 5000);
            return;
          }
          this.error = true;
          this.errorMsg = "Please ensure product name has been filled!";
          setTimeout( () => {
            this.error = false;
          }, 5000);
          return;
        },
        filterProductBrands() {
          this.productBrand = ''; // Reset the selected productBrand
        },

      },
      computed: {
        profileId() {
          return this.$store.state.profileId;
        },
        productCoverPhotoName() {
          return this.$store.state.productPhotoName;
        },
        productTitle: {
          get() {
            return this.$store.state.productTitle;
          },
          set(payload) {
            this.$store.commit("updateProductTitle", payload);
          },
        },
        productPrice: {
          get() {
            return this.$store.state.productPrice;
          },
          set(payload) {
            this.$store.commit("updateProductPrice", payload);
          },
        },
        productDetails: {
          get() {
            return this.$store.state.productDetails;
          },
          set(payload) {
            this.$store.commit("updateProductDetails", payload);
          },
        },
        productBrand: {
          get() {
            return this.$store.state.productBrand;
          },
          set(payload) {
            this.$store.commit("updateProductBrand", payload);
          },
        },
        filteredBrands() {
          return this.brandsByCategory[this.productCategory] || [];
        }
      },
    }
    </script>

  <style scoped>
  .upload{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .upload label{
    background-color: #45a049;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
  }
  .pro-container {
    display: flex;
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
    max-width: 600px;
}

.product-photo-preview {
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

.input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
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

    </style>
