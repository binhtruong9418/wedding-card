// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8DCBLIR1yCigCVCnG-p_NXpayXt6dVMw",
  authDomain: "binh-todolist.firebaseapp.com",
  projectId: "binh-todolist",
  storageBucket: "binh-todolist.appspot.com",
  messagingSenderId: "870194843393",
  appId: "1:870194843393:web:32f894b2805cb22b751500",
  measurementId: "G-NP2TTJEXZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)



