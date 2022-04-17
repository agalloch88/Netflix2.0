// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiwasp-XIdnPiWCNthpdrJvvEDm24lz7c",
  authDomain: "netflix2-d60a6.firebaseapp.com",
  projectId: "netflix2-d60a6",
  storageBucket: "netflix2-d60a6.appspot.com",
  messagingSenderId: "1089911918728",
  appId: "1:1089911918728:web:ce27f1490f3bbf99bdcf3d"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }