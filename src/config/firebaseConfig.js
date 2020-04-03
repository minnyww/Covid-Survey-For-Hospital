import * as firebase from 'firebase';

let firebaseApp
const config = {
  // apiKey: "AIzaSyBg0LK0eKK8rorYdvL8vw5cgmoV3hUZmeg",
  // authDomain: "chayen.firebaseapp.com",
  // databaseURL: "https://chayen.firebaseio.com",
  // projectId: "chayen",
  // storageBucket: "chayen.appspot.com",
  // messagingSenderId: "562614183093",
  // appId: "1:562614183093:web:1ac671d1000f49b9ee4afc",
  // measurementId: "G-DJKHWJEEM6"

  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUGKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID

};

firebaseApp = firebase.initializeApp(config);

export default firebaseApp;