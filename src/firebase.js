// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeCT7yf_nHBptjm_5eVWrMO1eW2zXTfmQ",
  authDomain: "food-delivery-app-11eef.firebaseapp.com",
  projectId: "food-delivery-app-11eef",
  storageBucket: "food-delivery-app-11eef.firebasestorage.app",
  messagingSenderId: "427733046466",
  appId: "1:427733046466:web:a3cf525017bef56bced75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();