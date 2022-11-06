// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZVetheAb-nRBSxePzOAuegFQZsUc-G-A",
    authDomain: "dev-hq-353da.firebaseapp.com",
    projectId: process.env.PROJECT_API_PROJECT_ID,
    storageBucket: process.env.PROJECT_API_STORAGEBUCKET,
    messagingSenderId: process.env.PROJECT_API_MESSAGINGSENDERID,
    appId: process.env.PROJECT_API_APPID,
    measurementId: process.env.PROJECT_API_MEASURMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);