import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAWC0DSfs_adyR6kn4zQcH-YGhlMwPNnVQ',
  authDomain: 'food-99a50.firebaseapp.com',
  databaseURL: 'https://food-99a50.firebaseio.com',
  projectId: 'food-99a50',
  storageBucket: 'food-99a50.appspot.com',
  messagingSenderId: '475948294196',
  appId: '1:475948294196:web:b96eb81b7476ac84042a61',
  measurementId: 'G-GXTJLT0LNQ'
}
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
