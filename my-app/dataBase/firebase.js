import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBO5B74kwVS9ALqcp6UMkZcRD2nqLfRggY',
  authDomain: 'focus-hangout-186713.firebaseapp.com',
  databaseURL: 'https://focus-hangout-186713.firebaseio.com',
  projectId: 'focus-hangout-186713',
  storageBucket: 'focus-hangout-186713.appspot.com',
  messagingSenderId: '19034653096',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
