// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";

// import { getAuth } from "firebase/auth";


const firebaseConfig={
  apiKey: "AIzaSyBKufztuBKMUw6hzAWbam6lIB2lrTFZVko", //process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:"hs-pantry-tracker-1fa0b.firebaseapp.com", // process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "hs-pantry-tracker-1fa0b", //process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "hs-pantry-tracker-1fa0b.appspot.com", //process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "899839377000",//process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:899839377000:web:913a181d42aa535e98c5dd"//process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
export {
  fireStore
}