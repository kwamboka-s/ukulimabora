<template>
<div class="container-fluid">
    <section id="page-header">
       <h2>/Stayhome</h2>
       <p> Save more with coupons & up to 70% off!</p>
    </section>
    <div v-if="user" class="toggle-edit">
      <span>Toggle Editing Product</span>
      <input type="checkbox" v-model="editProducts" />
    </div>
    <!-- <CarouselView /> -->
     <section id="product1" class="section-p1">
        <div class="pro-container" style="display:flex">
            <ProductListItem
            v-for="(productItem, index) in categorizedProductItems.slice(0,16)"
            :key="index"
            :productItem="productItem"
            />
        </div>
    </section>
   
</div>
</template>
<script>
// import CarouselView from './CarouselView'
import Product_List_Item from './Product_List_Item'
export default {
  name: "ShopView",
  components: {
    // CarouselView,
    ProductListItem: Product_List_Item,
},
data(){
  return {
    categorizedProductItems: [],
  }
},
  computed: {
    productItems() {
       return this.$store.state.productItems;
    },
    editProducts: {
     get() {
        return this.$store.state.editProducts;
     },
     set(payload) {
       this.$store.commit("toggleEditProducts", payload);
     }
    },
    user() {
     return this.$store.state.user;
    }
  },
  beforeUnmount () {
    this.$store.commit("toggleEditProducts", false);
},
  created() {
    this.$store.dispatch('getProductItems');
  },
  async mounted() {
    // Use a computed property or method to update categorizedProductItems
    this.updateCategorizedProductItems();
  },
  watch: {
    '$route.params.productBrand': 'updateCategorizedProductItems',
  },
  methods: {
    async updateCategorizedProductItems() {
      this.categorizedProductItems = await this.$store.state.productItems.filter((productItem) => {
        return productItem.productBrand === this.$route.params.productBrand;
      });
    },
  },
};
</script>
<style scoped>
     .toggle-edit {
             display:flex;
             align-items: center;
             position: absolute;
             top: 400px;
             right:0;
     }
     span {
             margin-right: 16px;
         }
      input[type="checkbox"] {
         position: relative;
         border: none;
         /* -webkit-appearance: none; */
         outline: none;
         width: 80px;
         height: 30px;
         border-radius: 20px;
         background: #fff;
         box-shadow: 0 4px 6px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05);
     }
     input[type="checkbox"]:before {
         content: "";
         position: absolute;
         width: 30px;
         height: 30px;
         border-radius: 20px;
         top: 0;
         left: 0;
         background: #303030;
         transform: scale(1,1);
         transition: 750ms ease all;
         box-shadow: 0 4px 6px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05);
     }
     input:checked[type="checkbox"]:before {
         left: 52px;
         background: #fff;
     }
 </style>
