import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYdPC-BeqG8NsMPmTD_rskwyxDuQ3knyA",
  authDomain: "clone-c2baa.firebaseapp.com",
  projectId: "clone-c2baa",
  storageBucket: "clone-c2baa.appspot.com",
  messagingSenderId: "223711186295",
  appId: "1:223711186295:web:507c15ad85474d7788a572",
  measurementId: "G-KS52K9VDDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
