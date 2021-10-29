// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithRedirect(auth, provider);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqijCe2d71XhCUcAXwCZKW5dWJDg2wXQ8",
    authDomain: "medicel-b86bc.firebaseapp.com",
    databaseURL: "https://medicel-b86bc-default-rtdb.firebaseio.com",
    projectId: "medicel-b86bc",
    storageBucket: "medicel-b86bc.appspot.com",
    messagingSenderId: "8660495771",
    appId: "1:8660495771:web:335d91530cc316a925c53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);