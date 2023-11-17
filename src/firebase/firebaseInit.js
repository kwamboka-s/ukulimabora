import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDIk5Mf6mlOwogdEEKDMYeMlasCGCF49UU",
  authDomain: "ukulima-bora.firebaseapp.com",
  projectId: "ukulima-bora",
  storageBucket: "ukulima-bora.appspot.com",
  messagingSenderId: "754262961528",
  appId: "1:754262961528:web:4bc3fcb6eba85e9b392c8d",
  measurementId: "G-3J2E47GL6S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { firestamp };
  export default firebaseApp.firestore();