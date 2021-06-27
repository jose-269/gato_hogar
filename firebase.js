import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlgR36987Gu_QGOgNTqlfKvrZG1uy1Bww",
  authDomain: "gato-hogar.firebaseapp.com",
  projectId: "gato-hogar",
  storageBucket: "gato-hogar.appspot.com",
  messagingSenderId: "166261727999",
  appId: "1:166261727999:web:43daf41c024e576d54e2ca",
  measurementId: "G-1N3Y1HW2NM",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { firebaseConfig, db, storage };
