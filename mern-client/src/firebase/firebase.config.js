// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6iYkGeLIuYLOMmlPmEV4nkfmBOUX5g3k",
    authDomain: "book-store-fb1a7.firebaseapp.com",
    projectId: "book-store-fb1a7",
    storageBucket: "book-store-fb1a7.appspot.com",
    messagingSenderId: "685967764892",
    appId: "1:685967764892:web:d1808de1483fc1600eac59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;