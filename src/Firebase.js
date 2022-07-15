// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYkZzqUVCPP9Tvnv01PrD4ZY8-Om0u0Kk",
    authDomain: "instagram-clone-54a84.firebaseapp.com",
    projectId: "instagram-clone-54a84",
    storageBucket: "instagram-clone-54a84.appspot.com",
    messagingSenderId: "88606169906",
    appId: "1:88606169906:web:e4c484e0b07a9d04c2152b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { auth, db };