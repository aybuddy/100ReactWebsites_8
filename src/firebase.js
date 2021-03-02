import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCebZTJf2YjVV4Jx5-zl4Sgbg5SsuSBmb8',
  authDomain: 'fb-messenger-clone-cp.firebaseapp.com',
  projectId: 'fb-messenger-clone-cp',
  storageBucket: 'fb-messenger-clone-cp.appspot.com',
  messagingSenderId: '163425779181',
  appId: '1:163425779181:web:8673d030e50baca9b73be4',
  measurementId: 'G-4H636YS4HL',
});

const db = firebaseApp.firestore();

export default db;
