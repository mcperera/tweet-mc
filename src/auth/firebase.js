import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBrDPyWQr-zDVbF709JKmhz6vdz0ZJbuaI",
  authDomain: "components-302307.firebaseapp.com",
  projectId: "components-302307",
  storageBucket: "components-302307.appspot.com",
  messagingSenderId: "116646016273",
  appId: "1:116646016273:web:092484b3f8a74f2f8348b0",
};

export default firebase.initializeApp(firebaseConfig);
firebase.analytics();
