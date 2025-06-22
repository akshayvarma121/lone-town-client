// client/src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd2JGMJN1RLideYvYFxZibwXz60DRZO0w",
  authDomain: "lone-town-8bc7d.firebaseapp.com",
  projectId: "lone-town-8bc7d",
  storageBucket: "lone-town-8bc7d.firebasestorage.app",
  messagingSenderId: "996866619256",
  appId: "1:996866619256:web:4d5826921340d9f5fa3a8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
