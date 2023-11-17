<template>
  <div>
    <div class="cart" v-if="cart">
            
            <div class="cart-heading">
                <h4>Your Cart</h4>
                <div class="close"  @click="toggleCart()">X</div>
                <div class="expand"  @click="toggleExpand()"><i class="fa-solid fa-expand"></i></div>
            </div>
            
            <div class="cart-directions">
                <p>Order before 10 pm and get it delivered next day before 3 pm. Order before noon and get it delivered today. Order now for delivery within 3 hours between 8 AM and 5 PM!</p>
            </div>
            <div class="incart-not-logged-in" v-if="!user">
                <span>Welcome Guest!</span>
                <p>Register with us to save your cart, save products for later, view order history, and more!</p>
                <router-link to="/signUp" class="register-button" @click="toggleCart()">Register</router-link>
                <span>Already a customer? <router-link to="/signIn" @click="toggleCart()">Sign in</router-link></span>
            </div>
            <div class="cart-items">
                <div class="with-items" >
                    <div class="item" v-for="(productItem, index) in this.$store.state.cartItems" :key="index">
                        <img :src="productItem.productCoverPhoto" alt="Mango Image">
                        <div class="item-details">
                            <h4>{{ productItem.productTitle }}</h4>
                            <span>Ksh {{ productItem.productPrice }}</span>
                            <div class="quantity">
                                <button @click="decrementQuantity(productItem)">-</button>
                                <span>
                                  <input
                                    :value="productItem.quantity"
                                    id="form1"
                                    min="1"
                                    name="quantity"
                                    type="number"
                                    class="form-control form-control-sm"
                                    style="width: 53px"
                                  />
                                </span>
                                <button @click="addToCart(productItem)">+</button>
                            </div>
                        </div>
                        <span class="total">Total: Ksh {{ productItem.productPrice * productItem.quantity}}</span>
                        <div class="edit">
                            <button class="remove-button" @click.prevent="removeFromCart(productItem)">Remove</button>
                            <button class="save-button"  @click.prevent="save(productItem)" >save</button>
                        </div>
                    </div>
                    <div
                      class="card shadow-2-strong mb-5 mb-lg-0"
                      style="border-radius: 16px"
                      v-if="user"
                    >
                      <div class="card-body p-4">
                        <div class="row">
                          <div>
                            <div
                              class="d-flex justify-content-between"
                              style="font-weight: 500"
                            >
                              <p class="mb-2">Subtotal</p>
                              <p class="mb-2">Ksh  {{totalPrice -300}}</p>
                            </div>

                            <div
                              class="d-flex justify-content-between"
                              style="font-weight: 500"
                            >
                              <p class="mb-0">Shipping</p>
                              <p class="mb-0">Ksh 300 per bag</p>
                            </div>

                            <hr class="my-4" />

                            <div
                              class="d-flex justify-content-between mb-4"
                              style="font-weight: 500"
                            >
                              <p class="mb-2">Total (Shipping included)</p>
                              <p class="mb-2">Ksh {{totalPrice}}</p>
                            </div>
                            <!--  @click="CheckOutProducts" -->
                            <!--  v-if="user" -->
                            <form action="">
                              <div class="input-group">
                                <label for="brand">Select Order Type</label>
                                <select v-model="ordertype" class="input-field">
                                  <option value="preorder">Pre Order</option>
                                  <option value="immediate">Immediate</option>
                                </select>
                            </div>
                            </form>
                            <router-link to="/checkout">
                            <button
                              type="button"
                              class="btn btn-primary btn-block btn-lg"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              @click="toggleCart()"
                            >
                              <div class="d-flex justify-content-between">
                                <span>Checkout</span>
                              </div>
                            </button>
                          </router-link>
                            <!-- v-if="user == null" -->
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="without-items">
                    <div class="cc-empty-msg">
                        <i class="fas fa-cart-arrow-down"></i>
                        <span class="cc-title">Your Cart is empty!</span>
                        <p>It looks like you haven't added any items to your cart yet.</p>
                        <router-link to="/shop1" class="cc-button">Browse Products</router-link>
                    </div>
                </div>
            </div>
            
    </div>
    <section class="h-100 h-custom" v-if="expand">
      <div class="cart-heading">
                <div class="close"  @click="toggleExpand()">X</div>
            </div>
      <div class="container h-100 py-5">
        <div
        v-if="cartItems.length"
          class="row d-flex justify-content-center align-items-center h-100"
        >
          <div class="col">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="h5">Shopping Cart</th>
                    <th scope="col">Size</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(productItem, index) in this.$store.state.cartItems" :key="index" >
                    <th scope="row" class="border-bottom-0">
                      <div class="d-flex align-items-center">
                        <img
                          :src="productItem.productCoverPhoto"
                          class="img-fluid rounded-3"
                          style="width: 150px; height: auto"
                          alt="Book"
                        />
                        <div class="flex-column ms-4">
                          <p class="mb-2">
                            {{ productItem.productTitle }}
                          </p>
                          <p class="mb-0">
                            {{ productItem.productBrand }}
                          </p>
                        </div>
                      </div>
                    </th>
                    <td class="align-middle border-bottom-0">
                      <div class="d-flex flex-row">
                        <input type="number" v-model="productItem.productSize" />
                      </div>
                    </td>
                    <td class="align-middle border-bottom-0">
                      <div class="d-flex flex-row">
                        <button
                        @click="decrementQuantity(productItem)"
                          class="btn btn-link px-2"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <input
                          :value="productItem.quantity"
                          id="form1"
                          min="1"
                          name="quantity"
                          type="number"
                          class="form-control form-control-sm"
                          style="width: 53px"
                        />

                        <button
                          class="btn btn-link px-2"
                          @click="addToCart(productItem)"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td class="align-middle border-bottom-0">
                      <p class="mb-0" style="font-weight: 500">
                        Ksh {{ productItem.productPrice }} x {{ productItem.quantity}}
                      </p>
                      <br>
                      <p class="mb-0" style="font-weight: 500">
                        Ksh {{ productItem.productPrice * productItem.quantity}}
                      </p>
                    </td>
                    <td class="align-middle border-bottom-0">
                      <div @click.prevent="removeFromCart(productItem)" class="remove">remove</div>
                      <div @click.prevent="save(productItem)" class="save">save</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="card shadow-2-strong mb-5 mb-lg-0"
            style="border-radius: 16px"
          >
            <div class="card-body p-4">
              <router-link to="/shop" style="font-weight: 900; float: right;" >
                  Continue shopping
              </router-link>
               <br>
              <div class="row">
                <div class="col-lg-4 col-xl-3">
                  <div
                    class="d-flex justify-content-between"
                    style="font-weight: 500"
                  >
                    <p class="mb-2">Subtotal</p>
                    <p class="mb-2">Ksh  {{totalPrice -300}}</p>
                  </div>

                  <div
                    class="d-flex justify-content-between"
                    style="font-weight: 500"
                  >
                    <p class="mb-0">Shipping</p>
                    <p class="mb-0">Ksh 300 per bag</p>
                  </div>

                  <hr class="my-4" />

                  <div
                    class="d-flex justify-content-between mb-4"
                    style="font-weight: 500"
                  >
                    <p class="mb-2">Total (Shipping included)</p>
                    <p class="mb-2">Ksh {{totalPrice}}</p>
                  </div>
                  <!--  @click="CheckOutProducts" -->
                  <!--  v-if="user" -->
                  <form action="">
                    <div class="input-group">
                      <label for="brand">Select Order Type</label>
                      <select v-model="ordertype" class="input-field">
                        <option value="preorder">Pre Order</option>
                        <option value="immediate">Immediate</option>
                      </select>
                   </div>
                  </form>
                  <router-link to="/checkout">
                    <button
                      @click="toggleExpand()"
                        type="button"
                        class="btn btn-primary btn-block btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                      <div class="d-flex justify-content-between">
                        <span>Checkout</span>
                      </div>
                    </button>
                  </router-link>
                  <!-- v-if="user == null" -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        v-else
        class="row d-flex justify-content-center align-items-center h-100"
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="h5">Shopping Cart</th>
              </tr>
            </thead>
          </table>
          <br />
          <div>
            <center>No Items In Cart</center>
            <br />
            <br />
            <router-link to="/shop">
              Go shopping
              <!-- <img src="../assets/icons8_back_64px.png" style="height: 37px" /> -->
            </router-link>
            <br>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CartView",
  props: ["productItem"],
  data() {
    return {
        cart: true,
        expand: false
    };
 },
  computed: {
    totalPrice() {
      let total = 0;

      for (let productItem of this.$store.state.cartItems) {
        total += productItem.totalPrice;
      }
      total = total + 300;
      return total;
    },
   ...mapGetters(["cartItems"]),
   user() {
          return this.$store.state.user;
     },
  },
  methods: {
    toggleCart(){
        this.cart = !this.cart
    },
    toggleExpand(){
        this.expand = !this.expand,
        this.cart= !this.cart
    },
    addToCart(productItem) {
      this.$store.commit("addToCart", productItem);
    },
    removeFromCart(productItem){
      this.$store.commit("removeFromCart", productItem);
    },
    decrementQuantity(productItem) {
      this.$store.commit("decrementQuantity", productItem);
    },
    save(productItem) {
      this.$store.commit("saveToWishlist", productItem);
    },
  }
}
</script>


<style scoped>
.h-custom{
    position: relative;
    width: 100%;
    background-color: #ccc;
    z-index: 999;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 8px;
    font-family: 'Lexend Deca', Helvetica, Arial, sans-serif;
}
.container{
    position: relative;
    width: 100%;
    z-index: 999;
    overflow: scroll;
}
.remove {
  background-color: red;
  border-radius:5px;
  text-align: center;
  cursor: pointer;
}
.save {
  margin-top: 30px;
  background-color: rgb(0, 255, 21);
  border-radius:5px;
  text-align: center;
  cursor: pointer;
}

.cart {
    position: fixed;
    right: 0;
    width: 320px;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    z-index: 999;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 8px;
    font-family: 'Lexend Deca', Helvetica, Arial, sans-serif;
}

.cart-heading {
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
}
.with-items {
    overflow: auto; /* Use 'auto' for both horizontal and vertical scrollbars */
    max-height: 550px; /* Adjust the height as needed */
}

.with-items::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
}

.with-items::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Color of the thumb */
    border-radius: 5px; /* Rounded corners for the thumb */
}

.with-items::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of the track */
    border-radius: 5px; /* Rounded corners for the track */
}

.cart-heading h4 {
    font-size: 24px;
}
.cart-heading .close{
    right: 10px;
    position: fixed;
    color: green;
    font-size: 30px;
    cursor: pointer;
    margin-top: 10px;
}
.cart-heading .expand{
    right: 40px;
    position: fixed;
    color: green;
    font-size: 30px;
    cursor: pointer;
    margin-top: 0px;
}
.cart-directions p {
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 15px;
}
.edit{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
.save-button{
    background-color: aqua;
}
.incart-not-logged-in span {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

.register-button {
    background-color: green;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 5px;
}

.cart-items .item {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    border: 1px #000;

}

.cart-items .item img {
    width: 100%;
    height: auto;
    margin: 10px;
    border-radius: 4px;
}
.item-details{
    display: flex;
    flex-direction: column;
}
.item-details h4 {
    font-size: 16px;
    margin-bottom: 5px;
}

.item-details span {
    font-size: 14px;
    margin-right: 10px;
}
.quantity{
  display: flex;
  flex-direction: row;
}
.quantity button {
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 50%;
}

.total {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
}

.remove-button {
    background-color: red;
    color: white;
    border: none;
    text-align: center;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.remove-button:hover {
    background-color: darkred;
}

.save-button{
    background-color: aqua;
    color: rgb(6, 6, 6);
    border: none;
    text-align: center;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}
.save-button:hover {
    background-color: rgb(0, 123, 139);
}
.without-items {
    display: none;
}

.cc-empty-msg {
    text-align: center;
}

.cc-empty-msg i {
    font-size: 36px;
    margin-bottom: 10px;
}

.cc-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
}

.cc-button {
    background-color: green;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 10px;
}
</style>
