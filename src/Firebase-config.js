// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVNVSoW5oc67sTNmyDF_KW4TNVBcMNdWM",
  authDomain: "react-chat-app-bf16e.firebaseapp.com",
  projectId: "react-chat-app-bf16e",
  storageBucket: "react-chat-app-bf16e.appspot.com",
  messagingSenderId: "134937633726",
  appId: "1:134937633726:web:5af97289213356c28c4fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
