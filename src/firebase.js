import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnkHw_w0ekDq5DcHxGha60i-3eNJXVxcw",
  authDomain: "ecomm-6f74a.firebaseapp.com",
  databaseURL: "https://ecomm-6f74a.firebaseio.com",
  projectId: "ecomm-6f74a",
  storageBucket: "ecomm-6f74a.appspot.com",
  messagingSenderId: "690648616483",
  appId: "1:690648616483:web:4121e83a85840eb5ce2b96",
  measurementId: "G-5X5LXJFNZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
