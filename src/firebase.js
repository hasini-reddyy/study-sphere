// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7CQA1H931ojKlTlZHB951f3jTQ-kbBr4",
  authDomain: "study-sphere-51df1.firebaseapp.com",
  projectId: "study-sphere-51df1",
  storageBucket: "study-sphere-51df1.firebasestorage.app",
  messagingSenderId: "625975874938",
  appId: "1:625975874938:web:e1ad757d462fdcfc9f72c3",
  measurementId: "G-SRBV75C840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
