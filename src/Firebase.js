// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCJH6WPpveXiF6hemnn6dewbQJCZaHeItM",
  authDomain: "ecommerce-app-5e5c1.firebaseapp.com",
  projectId: "ecommerce-app-5e5c1",
  storageBucket: "ecommerce-app-5e5c1.appspot.com",
  messagingSenderId: "621826526947",
  appId: "1:621826526947:web:dcc8bf98336d0bc6e83fd6",
  measurementId: "G-2CZMXJTTXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};