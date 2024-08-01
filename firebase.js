// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBB0Ry9wJoPsBHToKzqXgl0fZ3aiyctCiE",
  authDomain: "hs-pantry-tracker-1236d.firebaseapp.com",
  projectId: "hs-pantry-tracker-1236d",
  storageBucket: "hs-pantry-tracker-1236d.appspot.com",
  messagingSenderId: "774564384174",
  appId: "1:774564384174:web:201ee94d6bf23e383ccc3f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
export {
  fireStore
}