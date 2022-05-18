// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF87gi9acGx3iC8yB1adftcTkJv8sA6U8",
    authDomain: "reward-todo-45dac.firebaseapp.com",
    projectId: "reward-todo-45dac",
    storageBucket: "reward-todo-45dac.appspot.com",
    messagingSenderId: "488513842016",
    appId: "1:488513842016:web:2c2e1c777f31f20a2c0c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;