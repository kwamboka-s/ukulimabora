<template>
    <div class="container">
      <span class="site-logo-img">
      <div rel="home" aria-current="page">
       <h3 class="custom-logo">Ukulima Bora Online Farm</h3>
                            
       </div>
     </span> 
        <ModalItem v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
        <TheLoader v-if="loading"/>
      <div class="row">
        <div class="col-md-6 offset-md-3">
        <div class="col-md-12">
          <div>
            <h2>Back to <span ><router-link to="/signIn">SignIn</router-link></span></h2>
            <div>
              <label>Reset Password</label>
              <h5>Forgot your password? Enter your email to reset it!</h5>
              <hr />
            </div>
            <form @submit.prevent="resetPassword">
              <div class="form-group">
                <label>Email</label>
                <input
                type="email"
                class="form-control"
                v-model="email"
                />
              </div>
              <div class="my-3">
                <button type="submit" class="btn btn-primary">
                  Reset
                </button>
              </div>
            </form>
          </div>
         </div>
        </div>
      </div>
    </div>
    </template>

    <script>
        import ModalItem from "@/components/ModalItem"
        import TheLoader from "@/components/TheLoader"
        import firebase from "firebase/app"
        import "firebase/auth"
        export default {
            name: "ForgotPassword",
            data() {
                return {
                email: "",
                modalActive: false,
                modalMessage: "",
                loading: null
                }
            },
            components: {
                ModalItem,
                TheLoader
            },
            methods: {
              resetPassword() {
                this.loading= true;
                firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                  this.modalMessage = "If your account exists, you'll recieve a email";
                  this.loading = false;
                  this.modalActive = true;
                }).catch(err => {
                  this.modalMessage = err.message;
                  this.loading = false;
                  this.modalActive = true;
                })
              },
                closeModal() {
                    this.modalActive = !this.modalActive;
                    this.email = "";
                }
            }
        }
    </script>
      <style scoped>
 @media (min-width:977px){
    .container {
      margin: 100px 100px 100px 450px;
      align-items:center;
    }

  }
  button{
    background-color: green;
    color: rgb(242, 255, 240);
  }
      </style>
