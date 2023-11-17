<template>
    <div class="container">
    <section  v-if="currentProduct"  id="prodetails" class="section-p1">
        <div class="single-pro-image">
            <h4>Posted on: {{ new Date(this.currentProduct[0].productDate).toLocaleString("en-us", { dateStyle: "medium"})}} </h4>
            <br>
            
            <img :src="this.currentProduct[0].productCoverPhoto" alt=""/>
            <br>
            <div>{{this.currentProduct[0].images}}</div>
        </div>
        <div class="single-pro-details">
            <h4>{{this.currentProduct[0].productTitle}}</h4>
            <h2>Ksh {{this.currentProduct[0].productPrice}}</h2>
            <label for="size">Specify Size</label>
            <input type="number" v-model="productSize" min="1"/>

            <button
            @click="addToCart(currentProduct[0])"
            class="normal"
            >
            Add To Cart
            </button>
            <h4>Product Details</h4>
            <span>{{this.currentProduct[0].productDetails}}</span>
        </div>
    </section>
    </div>
    </template>
    <script>
    export default {
      name: 'SingleProduct',
      data () {
        return {
            currentProduct: null,
            productSize: "",
        }
      },
      methods: {
        addToCart(productItem) {
          productItem.quantity = 1;
          productItem.productSize = this.productSize;
          productItem.totalPrice = productItem.productPrice;
          this.$store.commit("addToCart", productItem);
        }
      },
      async mounted() {
        this.currentProduct = await this.$store.state.productItems.filter((productItem) => {
          return productItem.productID === this.$route.params.productid;
        })
      }
    }
    </script>
    <style scoped>
    .container{
      position: relative;
      margin-top: 180px;
    }
  </style>