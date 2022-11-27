import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4M-MqgFV1acSTFL19WuKtdRiG1gr_elA",
  authDomain: "project-management-react-ce901.firebaseapp.com",
  projectId: "project-management-react-ce901",
  storageBucket: "project-management-react-ce901.appspot.com",
  messagingSenderId: "117409339854",
  appId: "1:117409339854:web:8324f9cb0e2fcc2616339f",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
