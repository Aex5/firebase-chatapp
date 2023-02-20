// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzlHJcxNiQv-8r18vAFdrDeF7ugu1QSzk",
  authDomain: "nextjs-app-8d65d.firebaseapp.com",
  projectId: "nextjs-app-8d65d",
  storageBucket: "nextjs-app-8d65d.appspot.com",
  messagingSenderId: "210159229642",
  appId: "1:210159229642:web:6fbb0d9e426547740bb233",
  measurementId: "G-XHBY8PYHY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function sendMessage(roomId, user, text) {
  try {
    await addDoc(collection(db, "chat-room", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

const db = getFirestore(app);

const Authentication = getAuth(app);

export { sendMessage, Authentication, db };
