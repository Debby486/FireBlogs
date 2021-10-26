import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNm8YjyhH012dcOFJxWVZr0O0N_DftKKI",
  authDomain: "fireblogsdb.firebaseapp.com",
  projectId: "fireblogsdb",
  storageBucket: "fireblogsdb.appspot.com",
  messagingSenderId: "979010950870",
  appId: "1:979010950870:web:79aaed3f58d130a4a3db77"
};
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();