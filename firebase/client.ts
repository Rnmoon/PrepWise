// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCe9RL6AD_v_igFdz39DmniYfcqSb43TDs",
  authDomain: "prepwise-bb2be.firebaseapp.com",
  projectId: "prepwise-bb2be",
  storageBucket: "prepwise-bb2be.firebasestorage.app",
  messagingSenderId: "163195959608",
  appId: "1:163195959608:web:c26ddd3690ac96b5fe69cd",
  measurementId: "G-4PV8MMT1G7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);