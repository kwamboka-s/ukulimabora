<template>
  <div>
    <section class="section1">
                <header>
                <div class="header1">
                    <span class="site-logo-img">
                        <div rel="home" aria-current="page">
                            <h3 class="custom-logo">Ukulima Bora Online Farm</h3>
                            
                        </div>
                    </span> 
                    
                    <div class="header1-links">
                        <div class="link"><router-link to="/">Producers</router-link></div>
                        <div class="link"><router-link to="/about">Why Us?</router-link> </div>
                        <div class="link"><router-link to="/blog">The Green Life</router-link></div>
                        <div class="link">FAQs</div>
                        <div class="link"><router-link to="/shop1">Shop Now</router-link></div>
                    </div>
                    <div class="menu-bar" @click="toggleMobileMenu()">
                        Menu
                    </div>
                    <div class="mobile-header1-links" v-if="mobileMenu" @click="toggleMobileMenu()">
                        <div  v-if="!user" class="mobile-login">
                            <div class="hello-guest">
                                Hello Guest!
                            </div>
                            <div  class="login-or-signup">
                                <router-link to="/signIn">Login /</router-link>
                                <router-link to="/signUp">Sign Up</router-link>
                            </div>
                        </div>
                        <div  v-if="user" class="mobile-login">
                            <div class="hello-guest">
                                <router-link clas="option" to="/profile">
                                    <h3>{{ this.$store.state.profileFirstName }} {{this.$store.state.profileLastName }}</h3>
                                </router-link>
                                
                            </div>
                            <div  class="login-or-signup">
                                <div><router-link to="/administration">Post Product</router-link></div>
                                <div class='logout' @click="signOut()">Logout</div>
                            </div>
                        </div>
                        <div class="link"><router-link to="/">Producers</router-link></div>
                        <div class="link"><router-link to="/about">Why Us?</router-link> </div>
                        <div class="link"><router-link to="/blog">The Green Life</router-link></div>
                        <div class="link">FAQs</div>
                        <div class="link"><router-link to="/shop1">Shop Now</router-link></div>
                        
                    </div>
                    <div  v-if="!user" class="hello-login">
                        <div class="hello-guest">
                            Hello Guest!
                        </div>
                        <div  class="login-or-signup">
                            <router-link to="/signIn">Login /</router-link>
                            <router-link to="/signUp">Sign Up</router-link>
                        </div>
                    </div>
                    <div  v-if="user" class="hello-login">
                        <div class="hello-guest">
                            <router-link clas="option" to="/profile">
                                <h3>{{ this.$store.state.profileFirstName }} {{this.$store.state.profileLastName }}</h3>
                            </router-link>
                            
                        </div>
                        <div  class="login-or-signup">
                            <div><router-link to="/administration">Post Product</router-link></div>
                            <div class='logout' @click="signOut()">Logout</div>
                        </div>
                    </div>
                </div>
                </header>
                <!-- <div class="search-part">
                    <input
                    placeholder="Search for honestly delicious goodies..."
                    class="search-form-input"
                    v-model="searchQuery"
                    @input="performSearch"
                    />
                    <ul>
                    <li v-for="(result, index) in searchResults" :key="index">{{ result.name }}</li>
                    </ul>
                </div> -->
                <header>
                    <div class="header2">
                        <ul class="header2-list">
                            <li>
                                <div class="small-sections-header" @click="toggleDairy()">
                                    <span>Dairy</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleLivestockAndPoutry" class="small-sections-header">
                                    <span>Livestock and Poultry</span>
                                </div>
                                
                            </li>
                            <li>
                                <div @click="toggleSeafood" class="small-sections-header">
                                    <span>Seafood</span>
                                </div>
                                
                            </li>
                            <li>
                                <div @click="toggleEggs" class="small-sections-header">
                                    <span>Eggs</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleFruits" class="small-sections-header">
                                    <span>Fruits</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleVegetables" class="small-sections-header">
                                    <span>Vegetables</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleGrainsAndCereals" class="small-sections-header">
                                    <span>Grains and Cereals</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleLegumes" class="small-sections-header">
                                    <span>Legumes</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleHerbsAndSpecies" class="small-sections-header">
                                    <span>Herbs and Spices</span>
                                </div>
                                
                            </li>
                            <li>
                                <div @click="toggleMiraaAndMogoka" class="small-sections-header">
                                    <span>Miraa and mogoka</span>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                    <div class="header2-mobile">
                        <div class="open-header2-list" @click="toggleFilteredProducts()">
                           <h2>Filter products</h2> 
                        </div>
                        <ul class="header2-list" v-if="filteredProducts" @click="toggleFilteredProducts()">
                            <li>
                                <div class="small-sections-header" @click="toggleDairy()">
                                    <span>Dairy</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleLivestockAndPoutry" class="small-sections-header">
                                    <span>Livestock and Poultry</span>
                                </div>
                                
                            </li>
                            <li>
                                <div @click="toggleSeafood" class="small-sections-header">
                                    <span>Seafood</span>
                                </div>
                                
                            </li>
                            <li>
                                <div @click="toggleEggs" class="small-sections-header">
                                    <span>Eggs</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleFruits" class="small-sections-header">
                                    <span>Fruits</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleVegetables" class="small-sections-header">
                                    <span>Vegetables</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleGrainsAndCereals" class="small-sections-header">
                                    <span>Grains and Cereals</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleLegumes" class="small-sections-header">
                                    <span>Legumes</span>
                                </div>
                               
                            </li>
                            <li>
                                <div @click="toggleHerbsAndSpecies" class="small-sections-header">
                                    <span>Herbs and Spices</span>
                                </div>
                                
                            </li>
                            <li>
                                <div @click="toggleMiraaAndMogoka" class="small-sections-header">
                                    <span>Miraa and mogoka</span>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                   <div>
                    <div v-if="dairy" @click="toggleDairy()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Dairy</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Cheese' } }"><span class="">Cheese</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Milk' } }"><span class="">Milk</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Yogurt' } }"><span class="">Yogurt</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Butter' } }"><span class="">Butter</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/milk.jpg" />
                                        <h3 class="hello-guest">Fresh Milk</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/butter.png" />
                                            <h3 class="hello-guest">Packed Butter</h3>
                                        </div>
                                        
                                    </section>
                    </div>
                    <div v-if="Livestockandpoutry" @click="toggleLivestockAndPoutry()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Livestock and Poultry</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Bulls' } }"><span class="">Bulls</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Chicken' } }"><span class="">Chicken</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Pigs' } }"><span class="">Pigs</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <span class=""></span>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Goats' } }"><span class="">Goats</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/bull.jpeg" />
                                            <h3 class="hello-guest">A Bull</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/chicken.jpg" />
                                            <h3 class="hello-guest">A Chicken</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="seafood" @click="toggleSeafood()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Seafood</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Salmon' } }"><span class="">Salmon</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Shrimp' } }"><span class="">Shrimp</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Crab' } }"><span class="">Crab</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Cod' } }"><span class="">Cod</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/fish1.jpg" />
                                            <h3 class="hello-guest">Fish</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/fish2.jpeg" />
                                            <h3 class="hello-guest">Fish</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="eggs" @click="toggleEggs()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Eggs</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Chicken Eggs' } }"><span class="">Chicken Eggs</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Duck Eggs' } }"><span class="">Duck Eggs</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/eggs.jpeg" />
                                            <h3 class="hello-guest">Chicken Eggs</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="fruits" @click="toggleFruits()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Fruits</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Apples' } }"><span class="">Apples</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Bananas' } }"><span class="">Bananas</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Oranges' } }"><span class="">Oranges</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Mangoes' } }"><span class="">Mangoes</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Pineapples' } }"><span class="">Pineapples</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Strawberries' } }"><span class="">Strawberries</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Water Mellon' } }"><span class="">Water Mellon</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Grapes' } }"><span class="">Grapes</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/apples.jpeg" />
                                            <h3 class="hello-guest">Apples</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/banana.jpeg" />
                                            <h3 class="hello-guest">Bananas</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="vegetables" @click="toggleVegetables()" class="small-sections-container" :class="{ 'overflowed': isOverflowed }">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Vegetables</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Tomatoes' } }"><span class="">Tomatoes</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Carrots' } }"><span class="">Carrots</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Broccoli' } }"><span class="">Broccoli</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Spinach' } }"><span class="">Spinach</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Onions' } }"><span class="">Onions</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Cucumbers' } }"><span class="">Cucumbers</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Cabbages' } }"><span class="">Cabbages</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Sukuma Wiki' } }"><span class="">Sukuma Wiki</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Mchicha' } }"><span class="">Mchicha</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Ocra (Mabenda)' } }"><span class="">Ocra (Mabenda)</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Egg Plant (rafaya)' } }"><span class="">Egg Plant (rafaya)</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/carrots.jpeg" />
                                            <h3 class="hello-guest">Carrots</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/cabbages.jpeg" />
                                            <h3 class="hello-guest">Cabbages</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="grainsandcereals" @click="toggleGrainsAndCereals()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Grains and Cereals</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Wheat' } }"><span class="">Wheat</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Rice' } }"><span class="">Rice</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Corn' } }"><span class="">Corn</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Barley' } }"><span class="">Barley</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Maize' } }"><span class="">Maize</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Sorghum' } }"><span class="">Sorghum</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Millet' } }"><span class="">Millet</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/maize.avif" />
                                            <h3 class="hello-guest">Dry Maize</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/sorghum.webp" />
                                            <h3 class="hello-guest">Sorghum</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="legumes" @click="toggleLegumes()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Legumes</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Beans' } }"><span class="">Beans</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Peas' } }"><span class="">Peas</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Cow Peas' } }"><span class="">Cow Peas</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Green Peas' } }"><span class="">Green Peas</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Pojo' } }"><span class="">Pojo</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Pegeon Peas' } }"><span class="">Pegeon Peas</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/beans.jpg" />
                                            <h3 class="hello-guest">Beans</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/cowpeas.webp" />
                                            <h3 class="hello-guest">Cow Peas</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="herbsandspecies" @click="toggleHerbsAndSpecies()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Herbs and Spices </span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Basil' } }"><span class="">Basil</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Rosemary' } }"><span class="">Rosemary</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Thyme' } }"><span class="">Thyme</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Cilantro' } }"><span class="">Cilantro</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Mint' } }"><span class="">Mint</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Oregano' } }"><span class="">Oregano</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/basil.jpg" />
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/oregano.jpg" />
                                            <h3 class="hello-guest">Oregano</h3>
                                        </div>
                                    </section>
                    </div>
                    <div v-if="miraaandmogoka"  @click="toggleMiraaAndMogoka()" class="small-sections-container">
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Miraa and Mogoka </span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Mbeere Mogoka' } }"><span class="">Mbeere Mogoka</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Mchele Mogoka' } }"><span class="">Mchele Mogoka</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Kimeru Mogoka' } }"><span class="">Kimeru Mogoka</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Kangeta Miraa' } }"><span class="">Kangeta Miraa</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Gachoka Miraa' } }"><span class="">Gachoka Miraa</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Igembe Miraa' } }"><span class="">Igembe Miraa</span></router-link>
                                            </li>
                                            <li>
                                                <i></i>
                                                <router-link :to="{ name: 'shop', params: { productBrand: 'Mutuati Miraa' } }"><span class="">Mutuati Miraa</span></router-link>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section">
                                        <div class="small-section-heading">
                                            <span>Shop Producers</span>
                                        </div>
                                        <ul class="small-section-list">
                                            <li>
                                                <span class="">Bio Food Products</span>
                                            </li>
                                            <li>
                                                <span class="">Browns Food Co. </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section class="small-section-images">
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/miraa.jpg" />
                                            <h3 class="hello-guest">Miraa</h3>
                                        </div>
                                        <div class="small-section-image">
                                            <img class="br-loaded" src="@/assets/img/mogoka.jpg" />
                                            <h3 class="hello-guest">Mogoka</h3>
                                        </div>
                                    </section>
                    </div>
                   </div>
                </header>
    </section>
    <div class="cart-opener" @click="toggleCart()">
            <div class="cart-unopened"><i class="fas fa-shopping-cart"></i><span> {{cartQuantity}} </span></div>
            <!-- <div class="cart-opened">X</div> -->
    </div>
    <CartView v-if="cart"/>
    <router-view/>
  </div>
</template>
<script>
import CartView from "@/components/Cart/CartView"
import firebase from "firebase/app"

import "firebase/auth"
export default {
  name: 'App',
  components: {
    CartView,
  },
  data (){
    return {
        navigation: null,
        cart: false,
        dairy: false,
        Livestockandpoutry: false,
        seafood: false,
        eggs: false,
        fruits: false,
        vegetables: false,
        grainsandcereals: false,
        legumes: false,
        herbsandspecies: false,
        miraaandmogoka: false,
        searchQuery: "",
        searchResults: [],
        filteredProducts: null,
        mobileMenu: null
    }
  },
  methods: {
    toggleCart(){
        this.cart = !this.cart
    },
    toggleDairy(){
        this.dairy = !this.dairy,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleLivestockAndPoutry(){
        this.Livestockandpoutry = !this.Livestockandpoutry,
        this.dairy = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleSeafood(){
        this.seafood = !this.seafood,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleEggs(){
        this.eggs = !this.eggs,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleFruits(){
        this.fruits = !this.fruits,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleVegetables(){
        this.vegetables = !this.vegetables,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleGrainsAndCereals(){
        this.grainsandcereals = !this.grainsandcereals,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.legumes = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleLegumes(){
        this.legumes = !this.legumes,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.herbsandspecies = false,
        this.miraaandmogoka = false
    },
    toggleHerbsAndSpecies(){
        this.herbsandspecies = !this.herbsandspecies,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.miraaandmogoka = false
    },
    toggleMiraaAndMogoka(){
        this.miraaandmogoka = !this.miraaandmogoka,
        this.dairy = false,
        this.Livestockandpoutry = false,
        this.seafood = false,
        this.eggs = false,
        this.fruits = false,
        this.vegetables = false,
        this.grainsandcereals = false,
        this.legumes = false,
        this.herbsandspecies = false
    },
    toggleFilteredProducts(){
        this.filteredProducts = !this.filteredProducts
    },
    toggleMobileMenu(){
        this.mobileMenu = !this.mobileMenu
    },
    signOut() {
            firebase.auth().signOut();
            window.location.reload();
            this.$router.replace('/signIn');
      },
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
    checkRoute() {
        if (this.$route.path ==="/signIn" || this.$route.path === "/signUp" || this.$route.path === "/forgot-password"){
            this.navigation = true;
            return;
        }
        this.navigation = false;
        return;
    },
    performSearch() {
        if (!this.searchQuery) {
        this.searchResults = []; // Clear the results if the query is empty
        return;
        }

        const lowercaseQuery = this.searchQuery.toLowerCase();

        this.searchResults = this.productItems.filter((productItem) => {
        // Check if productItem.name is defined before calling toLowerCase()
        if (productItem.name) {
            return productItem.name.toLowerCase().includes(lowercaseQuery);
        }
        return false; // Handle the case where name is undefined
        });
    },
  },
  watch: {
    $route() {
    this.checkRoute();
    }
  },
  computed: {
    productItems() {
       return this.$store.state.productItems;
    },
    user() {
          return this.$store.state.user;
    },
    cartQuantity (){
      return this.$store.getters.cartQuantity;
    }
  },
  created() {
        this.checkRoute();
        firebase.auth().onAuthStateChanged(async (user) => {
            this.$store.commit("updateUser", user);
            if(user) {
                this.$store.dispatch("getCurrentUser", user)
            }
        })
        this.checkRoute();

        window.addEventListener("resize", this.checkSreen);
        this.checkScreen();
        this.$store.dispatch('getProductItems');
  }
}
</script>
<style scoped>
.logout{
    cursor: pointer;
}
.section1 {
    display: flex;
    flex-direction: column;
   top: 0;
    position: fixed;
    z-index: 999;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.header1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #ffffff; /* Adding a background color for illustration */
    padding: 10px 20px;
    width: 100%;
}
.custom-logo
{
    color: rgb(19, 137, 4);
    font-size: 40px;
    font-weight: 800;
    text-decoration: none;
    padding: 0;
    margin: 0;
}

.header1-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 20px;
    font-size: 20px;
}

.hello-login {
    margin-right: 50px;
}
.hello-guest {
    font-size: 18px; /* Adjust the font size as needed */
    font-family: 'Lexend Deca', Helvetica, Arial, sans-serif; /* Italic font-family */
    font-style: italic;
}
.link {
    margin-right: 10px;
}

.search-part {
    display: flex;
    justify-content: center;
    margin: 20px;

}

.search-form-input {
    width: 40%;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 10px;
}
.header2 {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: rgb(19, 137, 4);
    color: #fff;
   
}

.header2 .header2-list {
    display: flex;
    list-style: none;
    padding: 0;
    overflow-x: scroll;
    /* Add scrollbar styles */
}

.header2 .header2-list::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
}

.header2 .header2-list::-webkit-scrollbar-thumb {
    background-color: rgb(19, 137, 4); /* Color of the thumb */
    border-radius: 5px; /* Rounded corners for the thumb */
}

.header2 .header2-list::-webkit-scrollbar-track {
    background-color: rgb(19, 137, 4); /* Color of the track */
    border-radius: 5px; /* Rounded corners for the track */
}


.header2 .header2-list li {
    margin: 0 20px;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    
}
.small-sections-header{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.small-sections-container {
  display: flex;
  position: relative;
  top: 30px;
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  color: black;
  border-radius: 4px;
  width: 100vw; /* Use viewport width for full screen width */
  max-height: 300px;
  flex-wrap: wrap;
  overflow: hidden; /* Hide overflow content */
}

.overflowed {
  flex-direction: column; /* Display the sections vertically */
  overflow-y: scroll; /* Enable vertical scrolling for overflowed content */
}

.small-section {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px;
}

.small-section-heading {
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: 700;
}

.small-section-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.small-section-list li {
    margin-bottom: 5px;
}
.small-section-image{
    margin: 10px;
}
.small-section-image img {
    max-width: 200px;
    height: auto;
}
.small-section-images{
    display: flex;
    flex-direction: row;
    margin-right: 10px;
}

.cart-opener {
    position: fixed;
    top: 150px; /* Adjust the top position as needed */
    right: 0; /* Display to the right */
    border-radius: 50%;
    background-color: green;
    border: 1px solid #000;
    font-size: 20px;
    width: 50px;
    height: 50px;
    z-index: 999;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-opener .fa-shopping-cart {
    color: white; /* Change the icon color as needed */
}

.cart-unopened span {
    color: #f5c200;
}
@media (max-width: 900px) {
    .custom-logo
    {
        font-size: 25px;
        font-weight: 550;
    }
    .header1-links, .hello-login, .search-part{
        display: none;
    }
    .menu-bar{
        position: fixed;
        top: 50px; /* Adjust the top position as needed */
        right: 20px; /* Display to the right */
        border-radius: 50%;
        background-color: green;
        border: 1px solid #000;
        font-size: 20px;
        width: 50px;
        height: 50px;
        z-index: 999;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .cart-opener{
        top: 110px;
        right: 20px;
    }
    .header2{
        display: none;
    }
    .header2-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: rgb(19, 137, 4);
        color: #fff;
    }
    .header2-mobile .header2-list {
        align-items: right;
    }
    .header2-mobile .header2-list li {
        margin-left: 10px;
    }
    .open-header2-list h2{
        
        margin: 20px;
    }
    .small-sections-container {
        max-height: fit-content;
        overflow-y: scroll;
    }
    .mobile-header1-links{
        position: fixed;
        top: 110px;
        left: 0;
        width: 200px;
        background-color: #ccc;
        display: flex;
        flex-direction: column;
        z-index: 999;
        box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 15px;
        border-radius: 8px;
        font-family: 'Lexend Deca', Helvetica, Arial, sans-serif;
    }
    .mobile-login{
        margin-bottom: 20px;
    }
}
@media (min-width: 900px) {
    .menu-bar{
        display: none
    }
    .header2-mobile{
        display: none;
    }
}
</style>
