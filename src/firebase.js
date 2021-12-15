import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYX0zP9FUOdYV7vyt8oNaCAK6pd7fV0nI",
  authDomain: "stu-journo-app.firebaseapp.com",
  projectId: "stu-journo-app",
  storageBucket: "stu-journo-app.appspot.com",
  messagingSenderId: "688479202061",
  appId: "1:688479202061:web:0120c523dac9553b379e44",
  measurementId: "G-HXPCJD7JDG",
};

// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
export default firebaseDB.database().ref();
