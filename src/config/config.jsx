// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCunaj-aQ-HTmuZG5_fc7nUc2gMWUk8WLg",
	authDomain: "my-portfolio-7fc95.firebaseapp.com",
	projectId: "my-portfolio-7fc95",
	storageBucket: "my-portfolio-7fc95.firebasestorage.app",
	messagingSenderId: "80734498035",
	appId: "1:80734498035:web:4da432c5933eedb0de1b86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}; ;