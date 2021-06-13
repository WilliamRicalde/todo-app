import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDrcgJR5crCdwxZIrLKSfD7SR544t_ebpo',
  authDomain: 'task-app-5bd50.firebaseapp.com',
  projectId: 'task-app-5bd50',
  storageBucket: 'task-app-5bd50.appspot.com',
  messagingSenderId: '701089778766',
  appId: '1:701089778766:web:f134bd570fa7f80b4a871f'
}

firebase.initializeApp(firebaseConfig)

export default firebase
