
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, onSnapshot} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARIivpkHVffmrzGY_WunFa_k6Me-CJAj8",
  authDomain: "sweet-marine-1ee54.firebaseapp.com",
  projectId: "sweet-marine-1ee54",
  storageBucket: "sweet-marine-1ee54.appspot.com",
  messagingSenderId: "1033233505625",
  appId: "1:1033233505625:web:a6337dc076b2878c338048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const obtenerProductos = (callback) => onSnapshot(collection(db, "UTICKET"), callback);
  
  

