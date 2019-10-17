import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD8vos2OTesHHPB-s2dsO2sTkyO5RvLsjg',
  authDomain: 'ratemyagent.firebaseapp.com',
  databaseURL: 'https://ratemyagent.firebaseio.com',
  projectId: 'ratemyagent',
  storageBucket: 'ratemyagent.appspot.com',
  messagingSenderId: '516483863792'
}
// const settings = { timestampsInSnapshots: true }
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
