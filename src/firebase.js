// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1PUIQEdzdO-bO32M6TCqPp3Cun2yj_DM",
  authDomain: "todo-react-fb-dff56.firebaseapp.com",
  projectId: "todo-react-fb-dff56",
  storageBucket: "todo-react-fb-dff56.appspot.com",
  messagingSenderId: "825392604091",
  appId: "1:825392604091:web:b51c6eae603fa6daf09a9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
