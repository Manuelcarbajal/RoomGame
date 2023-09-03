// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa4lewqWnYmOWFWwVnDX226VJ6EWAaWUc",
  authDomain: "astral-room.firebaseapp.com",
  projectId: "astral-room",
  storageBucket: "astral-room.appspot.com",
  messagingSenderId: "560361572255",
  appId: "1:560361572255:web:8d2139f952a66cd4dddfaa",
  measurementId: "G-R3D5RZQJSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
