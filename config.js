import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCR0rrmqcb4WYRQ8aIVVmZ_SdGUW2IsNqU",
  authDomain: "e-ride-591ee.firebaseapp.com",
  projectId: "e-ride-591ee",
  storageBucket: "e-ride-591ee.appspot.com",
  messagingSenderId: "949441734102",
  appId: "1:949441734102:web:0ec68563e3a6d260eef077"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
