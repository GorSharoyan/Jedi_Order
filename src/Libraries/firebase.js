import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const REACT_APP_API_KEY = "AIzaSyBwQsfze1_SthdufKk3aa2n1k-p6Nw3lhw";
const REACT_APP_AUTH_DOMAIN = "jedi-order-62b2f.firebaseapp.com";
const REACT_APP_DATABASE_URL =
  "https://jedi-order-62b2f-default-rtdb.europe-west1.firebasedatabase.app";
const REACT_APP_PROJECT_ID = "jedi-order-62b2f";
const REACT_APP_STORAGE_BUCKET = "jedi-order-62b2f.appspot.com";
const REACT_APP_MESSAGING_SENDER_ID = "787347063036";
const REACT_APP_APP_ID = "1:787347063036:web:98fb26e26df367c83a1779+";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();

export default firebase;
