import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDpcIfq4S3xOoT7hnxZBMmg-1RlJebjlrs",
    authDomain: "blog-5e858.firebaseapp.com",
    projectId: "blog-5e858",
    storageBucket: "blog-5e858.firebasestorage.app",
    messagingSenderId: "1025190571512",
    appId: "1:1025190571512:web:b32542eb75fa1d167c7a0d",
    measurementId: "G-SLFKB84Y75"
  };
  
  const app = initializeApp(firebaseConfig);

  export default app;