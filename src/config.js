import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyClla0pp5va4_VH9agPSe249PWTb-9sy7s',
  authDomain: 'comments-401e7.firebaseapp.com',
  projectId: 'comments-401e7',
  storageBucket: 'comments-401e7.appspot.com',
  messagingSenderId: '518479565148',
  appId: '1:518479565148:web:8bf4d6ba9a5769ca9cf199',
  measurementId: 'G-NQGMXY2KYS'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
