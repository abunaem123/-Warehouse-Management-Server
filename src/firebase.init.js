// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEuFcDPufDvHb_FG8AZs-kYzi4iJ9rdwc",
  authDomain: "bike-inventory-21a8e.firebaseapp.com",
  projectId: "bike-inventory-21a8e",
  storageBucket: "bike-inventory-21a8e.appspot.com",
  messagingSenderId: "253360027973",
  appId: "1:253360027973:web:f8ca518c1c94d2ad86662c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;