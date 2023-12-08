// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9mPwfJIyTWmo0IDc-tF2M-uCkZJYK5hQ",
  authDomain: "reservasapp-1c0b6.firebaseapp.com",
  projectId: "reservasapp-1c0b6",
  storageBucket: "reservasapp-1c0b6.appspot.com",
  messagingSenderId: "581032412077",
  appId: "1:581032412077:web:9183ec6d3d2001176e9724"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig); //autenticacion
export const FirebaseAuth = getAuth(FirebaseApp) //funcionalidades de autenticacion
export const FirebaseDB = getFirestore(FirebaseApp) //configuracion de base de datos