// Import the functions 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config 
const firebaseConfig = {
 apiKey: "AIzaSyBSkG7hH4U-mICOz3_DqBRciA-oKjCesYg",
 authDomain: "cprg306-final.firebaseapp.com",
 projectId: "cprg306-final",
 storageBucket: "cprg306-final.firebasestorage.app",
 messagingSenderId: "796473042382",
 appId: "1:796473042382:web:7537d702ab3f6068a2b79f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
