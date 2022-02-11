// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuMj3aCQB9hGlJ6idSrxUTA9hKcjyiomg",
  authDomain: "housing-2973d.firebaseapp.com",
  projectId: "housing-2973d",
  storageBucket: "housing-2973d.appspot.com",
  messagingSenderId: "1020310796450",
  appId: "1:1020310796450:web:c678df3b24a1086ee3fffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()