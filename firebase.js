// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChWqHt29Y--djAabAA2WS0ik2nvVEhGJc",
  authDomain: "suraj-portfolio-fd0ea.firebaseapp.com",
  projectId: "suraj-portfolio-fd0ea",
  storageBucket: "suraj-portfolio-fd0ea.appspot.com",
  messagingSenderId: "329997140539",
  appId: "1:329997140539:web:da8908a11b99ef8154521e",
  measurementId: "G-8PMKMLBW65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);