<template>
 <div class="main-container">
       
        <section class="section2">
            <div class="section2-part">
                <!-- <h1>About Ukulima Bora Online Farm</h1>
                <p>Welcome to Ukulima Bora Online Farm, where we are dedicated to providing you with the freshest and finest farm produce from across Kenya.</p>
                <h3>Our Mission</h3>
                <p>We strive to connect you with the hardworking farmers who cultivate the land to bring you the most delicious and nutritious foods. From dairy products to fresh fruits, vegetables, and more, our commitment to quality and sustainability sets us apart.</p> -->
            </div>
        </section>
        
        <section class="section3">
            <h2>100% ORGANIC<br>Vetted by Us!</h2>
            <div class="carousel">
                <div
                 class="card" 
                  v-for="(productItem, index) in productItems.slice(0,16)"
                    :key="index"
                    :productItem="productItem">
                    <router-link :to="{ name: 'sproduct', params: { productid: productItem.productID }}"  >
                        <div class="card-img">
                            <img :src="productItem.productCoverPhoto" alt="Product 1">
                        </div>
                        
                        <h4>{{productItem.productTitle }}</h4>
                        <!-- <div class="p">{{productItem.productBrand }} </div> -->
                        <span>Ksh {{productItem.productPrice}} per kg</span>
                        <!-- <div class="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div> -->
                    </router-link>
                    <button 
                    class="add-to-cart"
                    @click="addToCart(productItem)"
                    >Add to Cart</button>
                </div>
                
                
                <!-- Add more cards as needed -->
            </div>
        </section>
        <section class="section4">
            <div class="section4-part1">
                <h2>Our Commitment to Quality</h2>
                <p>At Ukulima Bora Online Farm, we are dedicated to delivering the highest quality organic produce to our customers. Our commitment to sustainable farming practices ensures that you receive the freshest and most nutritious products straight from the farm.</p>
            </div>
            <div class="section4-part2">
                <img src="@/assets/img/Farm-image.jpg" alt="Farm Image">
            </div>
        </section>
        <section class="section5">
            <h2>Stay Connected</h2>
            <p>Follow us on social media to get the latest updates and news:</p>
            <div class="social-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </section>
        <footer>
            <div class="footer-container">
                <div class="footer-part1">
                    <div class="footer-logo">
                        <h3 class="custom-logo">Ukulima Bora Online Farm</h3>
                        <i>Proud Farmer</i>
                    </div>
                    <p>(+254) 745041145</p>
                    <p>skwamboka00@icloud.com</p>
                    <p>Mombasa, Kenya</p>
                    <div class="whatsapp">
                        <p>Need help?</p>
                        <p><span><i class="fa-brands fa-whatsapp"></i></span> chat us on </p>
                        <p>Whatsapp</p>
                    </div>
                </div>
                <div class="footer-part2">
                    <div class="title">
                        SHOP
                    </div>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'shop', params: { productBrand: 'Milk' } }"><span class="">Dairy</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'shop', params: { productBrand: 'Chicken' } }"><span class="">   Livestock And Poultry</span></router-link>

                         </li>
                        <li>Seafood</li>
                        <li>Eggs</li>
                        <li>Fruits</li>
                        <li>Vegetables</li>
                        <li>Grains and Cerials</li>
                        <li>Legumes</li>
                        <li>Herbs and Spices</li>
                        <li>Miraa and Mogoka</li>
                    </ul>
                </div>
                <div class="footer-part3">
                    <div class="title">
                        ABOUT
                    </div>
                    <ul>
                        <li>Producers</li>
                        <li>Why Us?</li>
                        <li>The Green Life</li>
                    </ul>
                    <div class="title">
                        SUPPORT
                    </div>
                    <ul>
                        <li>Contact</li>
                        <li>FAQs</li>
                        <li>Privacy Policy Terms and Conditions</li>
                    </ul>
                </div>
                <div class="footer-part4">
                    <div class="title">
                        <span>The Green Life</span>
                        <h2>SIGN UP FOR NEWS AND DEALS!</h2>
                    </div>
                    <h4>
                        Treat yourself with weekly product releases, digital love, recipes, and exclusive deals.
                    </h4>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <button type="button">SIGN UP</button>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>

// import firebase from "firebase/app"
import "firebase/auth"

export default {
  name: "HomeView",
 methods: {
   
      checkScreen () {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 750) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      },
        addToCart(productItem) {
        productItem.quantity = 1;
        productItem.totalPrice = productItem.productPrice;
        this.$store.commit("addToCart", productItem);
        }
 },
 computed: {
    user() {
          return this.$store.state.user;
     },
     productItems() {
       return this.$store.state.productItems;
    },
    },
  created() {
    window.addEventListener("resize", this.checkSreen);
    this.checkScreen();
    this.$store.dispatch('getProductItems');
  }
};
</script>
<style scoped>

body, button, input, select, textarea, .ast-button, .ast-custom-button {
    font-family: 'Lexend Deca', Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.4;
    list-style: none;
    margin-top: 0;
}
li{
    list-style: none;
}

.main-container {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    font-size: 14px;
}



.section2 {
    margin-top: 155px;
    min-height: 500px;
    background-image: url("@/assets/img/Groceries-kenya.png"); /* Replace with your image URL */
    background-size: cover; /* Adjust the image size to cover the container */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Prevent repeating the background */
    /* Additional styles for the section */
    padding: 40px;
    
    text-align: center;
}
.section2-part {
    max-width: 800px;
    margin: 0 auto;
}

.section2-part h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #333;
 
}

.section2-part p {
    font-size: 18px;
    opacity: 0.8;
    margin-bottom: 30px;
    color: #000;
  
}

.section2-part h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
}
.section3 {
    background-color: #f5f5f5;
    padding: 50px 0;
    text-align: center;
}
.section3 h2{
    margin-bottom: 20px;
    color: green;
    font-size: 1rem;
    font-weight: 5rem;
}
.carousel {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    margin: 0 -15px;
    width: calc(100% + 30px); /* Set width larger than viewport to enable scrolling */
    white-space: nowrap; /* Prevent cards from wrapping to the next line */
}


.card {
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    margin: 0 15px;
    min-width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.card .card-img {
    width: auto;
    height: 300px;
}

.card .card-img img{
    width: 100%;
    max-height: 300px;
    z-index: 0;
}
.card h4 {
    font-size: 24px;
    margin: 10px 0;
}

.card .p {
    font-size: 18px;
    opacity: 0.7;
    display: flex;
    flex-wrap: wrap;
    max-width: 200px;
}

.card span {
    font-size: 20px;
    font-weight: bold;
    color: green;
}

.quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.quantity button {
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 50%;
}

.add-to-cart {
    background-color: green;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.add-to-cart:hover {
    background-color: darkgreen;
}
.section4 {
    display: flex;
    background-color: #f5f5f5;
    padding: 50px 0;
    text-align: center;
}

.section4-part1 {
    flex: 1;
    padding: 0 20px;
}

.section4-part1 h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

.section4-part1 p {
    font-size: 18px;
    opacity: 0.7;
}

.section4-part2 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section4-part2 img {
    width: 80%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.section5 {
    background-color: darkgreen;
    color: white;
    padding: 100px 0;
    text-align: center;
}

.social-icons {
    margin-top: 30px;
}

.social-icons a {
    color: white;
    font-size: 24px;
    margin: 0 15px;
    text-decoration: none;
}
footer {
    background-color: #333;
    color: white;
    padding: 40px 0;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-part1, .footer-part2, .footer-part3, .footer-part4 {
    flex: 1;
    margin: 0 10px;
}

.footer-logo h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.footer-logo i {
    font-size: 14px;
    opacity: 0.8;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.footer-part1 p {
    margin: 10px 0;
    opacity: 0.8;
}

.whatsapp p span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: green;
    margin-right: 5px;
    border-radius: 50px;
}

.footer-part2 ul, .footer-part3 ul {
    list-style: none;
    padding: 0;
    opacity: 0.8;
}

.footer-part2 ul li, .footer-part3 ul li {
    margin-bottom: 10px;
}

.footer-part4 .title span {
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}
.footer-part2 .title, 
.footer-part3 .title, 
.footer-part4 .title{
    color: green;
}
.footer-part4 h2 {
    font-size: 20px;
    margin-bottom: 20px;
}

.footer-part4 h4 {
    font-size: 16px;
    margin-bottom: 10px;
}

.footer-part4 input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.footer-part4 button {
    background-color: #ffcc00;
    color: #333;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.footer-part4 button:hover {
    background-color: #f5c200;
}

@media (max-width: 900px) {
    .section2{
        margin-top: 100px;
    }
    .section4 {
        flex-direction: column;
    }
}
</style>
