// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR5xqG2L3Y_5czBdE2GJlpGq1fBONREdE",
  authDomain: "movia-63921.firebaseapp.com",
  projectId: "movia-63921",
  storageBucket: "movia-63921.appspot.com",
  messagingSenderId: "475599421215",
  appId: "1:475599421215:web:7508c97f2043fbb2b03a2a",
  measurementId: "G-L8M1QFGM0F"
};


// Initialize Firebase
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { app, auth };
