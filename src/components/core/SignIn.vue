<template>
<div class="container" >
  <span class="site-logo-img">
      <div rel="home" aria-current="page">
       <h3 class="custom-logo">Ukulima Bora Online Farm</h3>
                            
       </div>
  </span> 
  <div class="row">
    <div class="col-md-6 offset-md-3">
    <div class="col-md-12">
      <div>
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <form >
          <TheLoader v-if="loading"/>
          <div class="form-group">
            <label>Email</label>
            <input
            type="text"
            class="form-control"
            v-model.trim="email"
            />
            <!-- <div class="error" v-if="errors.email">
            {{ errors.email}}
            </div> -->
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
            type="password"
            class="form-control"
            v-model.trim="password"
            />
            <!-- <div class="error" v-if="errors.password">
            {{ errors.password}}
            </div> -->
          <router-link class="forgot-password" to="/forgot-password">
            Forgot Your Password?
          </router-link>
          </div>
          <div class="alert alert-danger" v-if="error">
              {{ this.errorMsg }}
            </div>
          <div class="my-3">
            <button @click.prevent="signIn" type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div id="signup">
          <h2>Don't Have an Account Yet <span ><router-link to="/signUp">SignUp</router-link></span></h2>
        </div>
      </div>
     </div>
    </div>
  </div>
</div>
</template>

<script>
  import TheLoader from "@/components/TheLoader"
  import firebase from "firebase/app"
  import "firebase/auth"
  // import { mapActions, mapMutations } from 'vuex';
  // import SignupValidations from '@/services/SignupValidations';
  // import {
  //     LOADING_SPINNER_SHOW_MUTATION,
  //     LOGIN_ACTION,
  // } from '@/store/storeconstants';
  export default {
    name: "SignIn",
      data() {
          return {
              email: '',
              password: '',
              errorMsg: '',
              error: null,
              loading: null
          };
      },
      components: {
        TheLoader
      },
      methods: {
        signIn () {
          this.loading= true;
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=> {
            this.$router.push('/');
            this.error = false;
            this.errorMsg = "";
            this.loading = false;
            console.log(firebase.auth().currentUser.uid);
          }).catch((err) => {
            this.loading = false;
            this.error = true;
            this.errorMsg = err.message.message;
          })
        }
      },
  };
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

