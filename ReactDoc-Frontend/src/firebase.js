import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhnF1-j9J79XxgfOVpb8rTDsH1rLasEXY",
  authDomain: "doc-editor-78522.firebaseapp.com",
  projectId: "doc-editor-78522",
  storageBucket: "doc-editor-78522.appspot.com",
  messagingSenderId: "603352894218",
  appId: "1:603352894218:web:78f7160167ff12449388f3",
  measurementId: "G-M1G4V2N6P0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
