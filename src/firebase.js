import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyE92p4u7MX7T3qgTS2oeNC3UfRiVxG0I",
  authDomain: "react-db-59fd8.firebaseapp.com",
  projectId: "react-db-59fd8",
  storageBucket: "react-db-59fd8.appspot.com",
  messagingSenderId: "57511062988",
  appId: "1:57511062988:web:17871df02fe4a64e574169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth()

// for storing data files
export const storage = getStorage(app);

