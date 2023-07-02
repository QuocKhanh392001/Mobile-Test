// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDMycaYpbUIvvjiGz7jhv-JTjqaXycJ7U",
  authDomain: "mobile-test-3b281.firebaseapp.com",
  projectId: "mobile-test-3b281",
  storageBucket: "mobile-test-3b281.appspot.com",
  messagingSenderId: "161188882710",
  appId: "1:161188882710:web:90cd1dc6bb1a51f5360837",
  measurementId: "G-XTJ65PDEF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
