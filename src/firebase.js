import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBdowcRmpMjfomhgnKo9q1VaSXBklDz74",
  authDomain: "todo-app-cp-4844d.firebaseapp.com",
  databaseURL: "https://todo-app-cp-4844d.firebaseio.com",
  projectId: "todo-app-cp-4844d",
  storageBucket: "todo-app-cp-4844d.appspot.com",
  messagingSenderId: "368484835743",
  appId: "1:368484835743:web:ffd14b8aca117dbb785daa",
  measurementId: "G-Z48B2YM6BK"
})

  const db = firebaseApp.firestore();

  export default db;