// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNbBGp48E-Jo9zkNosTGQzyrSeLt8QIYg",
    authDomain: "simple-firebase-5ff6f.firebaseapp.com",
    projectId: "simple-firebase-5ff6f",
    storageBucket: "simple-firebase-5ff6f.appspot.com",
    messagingSenderId: "649952045347",
    appId: "1:649952045347:web:80e1d80a66ffa0da648496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;