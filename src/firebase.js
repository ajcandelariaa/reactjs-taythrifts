import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDXe_oX698DTCqR8uB2TBKVRbcixjr1zo",
  authDomain: "reactjs-taythrifts.firebaseapp.com",
  projectId: "reactjs-taythrifts",
  storageBucket: "reactjs-taythrifts.appspot.com",
  messagingSenderId: "495298717983",
  appId: "1:495298717983:web:661c3501ab4c2c42ea682a",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
