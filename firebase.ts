// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBu_MGGvepgX8--hoYb9QYxOwwtu-38gKY",
    authDomain: "react-task-app-72f6e.firebaseapp.com",
    projectId: "react-task-app-72f6e",
    storageBucket: "react-task-app-72f6e.firebasestorage.app",
    messagingSenderId: "667269096664",
    appId: "1:667269096664:web:362451636af03d8828e3ad",
    measurementId: "G-7DDB133VFR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);