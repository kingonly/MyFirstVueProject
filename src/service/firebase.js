import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDBKZZM7cvOZWFLETMLeTFyPogPcR-7U4Q',
  authDomain: 'cropchat-5172b.firebaseapp.com',
  databaseURL: 'https://cropchat-5172b.firebaseio.com',
  projectId: 'cropchat-5172b',
  storageBucket: 'cropchat-5172b.appspot.com',
  messagingSenderId: '1069388643928'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
