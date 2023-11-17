import { createRouter, createWebHashHistory } from 'vue-router'
import CartView from '../components/Cart/CartView.vue';
import WishList from '../components/Cart/WishList.vue';
import HomeView from '../components/product/HomeView.vue';
import ShopView from '../components/product/ShopView.vue';
import CategorizedShopView from '../components/product/CategorizedShopView.vue';
import BlogView from '../views/BlogView.vue';
import ProfileView from '../views/ProfileView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import BlogPreview from '../views/BlogPreview.vue';
import ViewBlog from '../views/ViewBlog.vue';
import EditBlog from '../views/EditBlog.vue';
import EditProduct from '../views/EditProduct.vue';
import CheckOut from '../views/CheckOut.vue';
import ReadMore from '../components/ReadMore.vue';
import SingleProduct from '../components/SingleProduct.vue';
const SignIn = () => import( '../components/core/SignIn.vue');
import SignUp from '../components/core/SignUp.vue';
import ForgotPassword from '../components/core/ForgotPassword.vue';
import AdministratorPage from '../components/core/AdministratorPage.vue';
import AdministrationPage from '@/components/core/AdministrationPage.vue';
import MessagesView from '@/components/messages/MessagesView.vue';
import SenderMessages from '@/components/messages/SenderMessages.vue';
import CreateBlog from '@/components/CreateBlog.vue';
import firebase from "firebase/app"
import "firebase/auth"

const routes = [
  {
    path: '/cart',
    component: CartView,
    meta: {
      title: "Cart",
      //requiresAuth: true,
    }
  },
  {
    path: '/wishlist',
    component: WishList,
    meta: {
      title: "Wish-list",
      //requiresAuth: true,
    }
  },
  {
    path: '/signIn',
    component: SignIn,
    name: SignIn,
    meta: {
      title: "SignIn",
      requiresAuth: false,
    }
  },
  {
    path: '/signUp',
    component: SignUp,
    name: SignUp,
    meta: {
      title: "SignUp",
      requiresAuth: false,
    }
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    name: ForgotPassword,
    meta: {
      title: "Forgot-Password",
      requiresAuth: false,
    }
  },
  {
    path: '/administrator',
    component: AdministratorPage,
    meta: {
      title: "Add-Admin",
      //requiresAuth: true,
      //requiresAdmin: true,
    }

  },
  {
    path: '/administration',
    component: AdministrationPage,
    meta: {
      title: "Administration",
      //requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: '/messages',
    component: MessagesView,
    meta: {
      title: "Messages",
      //requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: '/createblog',
    component: CreateBlog,
    meta: {
      title: "CreateBlog",
      //requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: "Home",
      requiresAuth: false,
    }
  },
  {
    path: '/shop1',
    name: 'shop1',
    component: ShopView,
    meta: {
      title: "Shop",
      //requiresAuth: true,
    }
  },
  {
    path: '/shop/:productBrand',
    name: 'shop',
    component: CategorizedShopView,
    meta: {
      title: "Shop",
      //requiresAuth: true,
    }
  },
 
  
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: "Blogs",
      requiresAuth: false,
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut,
    meta: {
      title: "Checkout",
      //requiresAuth: true,
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: "profile",
      //requiresAuth: true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: "About Us",
      requiresAuth: false,
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: "Contact Us",
      requiresAuth: false,
    }
  },
  {
    path: '/blogpreview',
    name: 'BlogPreview',
    component: BlogPreview,
    meta: {
      title: "Blogs",
      //requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: '/view-blog/:blogid',
    name: 'ViewBlog',
    component: ViewBlog,
    meta: {
      title: "view-blog-post",
      requiresAuth: false,
    }
  },
  {
    path: '/edit-blog/:blogid',
    name: 'EditBlog',
    component: EditBlog,
    meta: {
      title: "edit-blog-post",
      //requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: '/edit-product/:productid',
    name: 'EditProduct',
    component: EditProduct,
    meta: {
      title: "edit-product-post",
      //requiresAuth: true,
      //requiresAdmin: true,
    }
  },
  {
    path: '/blog/readmore',
    name: 'readmore',
    component: ReadMore,
    meta: {
      title: "Blogs",
      requiresAuth: false,
    }
  },
  {
    path: '/shop/sproduct',
    name: 'sproduct',
    component: SingleProduct,
    meta: {
      title: "Shop",
      //requiresAuth: true,
    }
  },
  {
    path: '/senderMessages',
    name: 'senderMessages',
    component: SenderMessages,
    meta: {
      title: "Messages",
      //requiresAuth: true,
    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  document.title = `  ${to.meta.title} | Ukulima Bora Online Farm `;
  next();
});

router.beforeEach(async (to, from, next) => {
 let user = firebase.auth().currentUser;
 let admin = null;
 if (user) {
  let token = await user.getIdTokenResult();
  admin = token.claims.admin
 }
 if (to.matched.some((res) => res.meta.requiresAuth)){
  if (user) {
    if (to.matched.some((res) => res.meta.requiresAdmin)){
      if (admin) {
        return next()
      }
      return next( {name: 'Home'});
    }
    return next();
  }
  return next( {name: 'Home'});
 }
 return next();
});
export default router
