// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBg_t-K8hobLPlzY6wS1Z3eyyzjufWI-Oo",
  authDomain: "reactquiz-7c19e.firebaseapp.com",
  projectId: "reactquiz-7c19e",
  storageBucket: "reactquiz-7c19e.appspot.com",
  messagingSenderId: "2829571310",
  appId: "1:2829571310:web:98dcd03de7de2df2460fff"
};

export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)