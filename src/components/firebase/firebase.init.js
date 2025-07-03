// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCESQnTOTHk_N81a-BTfQ-LczI-jIQCDxY",
  authDomain: "coffee-store-app-8959c.firebaseapp.com",
  projectId: "coffee-store-app-8959c",
  storageBucket: "coffee-store-app-8959c.firebasestorage.app",
  messagingSenderId: "994253536696",
  appId: "1:994253536696:web:b1b4de72c3ae2c18c1234d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);