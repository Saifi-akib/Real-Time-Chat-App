import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFW0pDG09JU1ZFWjKjOI3i-ySlrVnends",
  authDomain: "real-time-chat-65af2.firebaseapp.com",
  projectId: "real-time-chat-65af2",
  storageBucket: "real-time-chat-65af2.appspot.com",
  messagingSenderId: "995977373495",
  appId: "1:995977373495:web:669b973aaf61d921addcb2",
  databaseURL: "https://real-time-chat-65af2-default-rtdb.firebaseio.com/",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
