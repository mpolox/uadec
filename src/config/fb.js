import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAMD8wwy9gAxROySABl6--IO4LCHSeAjPc",
  authDomain: "uadec-df865.firebaseapp.com",
  databaseURL: "https://uadec-df865.firebaseio.com",
  projectId: "uadec-df865",
  storageBucket: "",
  messagingSenderId: "900133903526",
  appId: "1:900133903526:web:3dffd21365b39e92186867",
  measurementId: "G-580K72MV4B"
};

firebase.initializeApp(config);

export default firebase;

