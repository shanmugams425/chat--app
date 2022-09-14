import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7m8QQXc_G4MF-UPjOPZyHtRy2CxlHzEI",
  authDomain: "hello-845c9.firebaseapp.com",
  projectId: "hello-845c9",
  storageBucket: "hello-845c9.appspot.com",
  messagingSenderId: "694735851715",
  appId: "1:694735851715:web:3a151fb70997e471f59276",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
