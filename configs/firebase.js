import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDloS-bexraBQaCFC8w0hM17AjPM0tM3t4",
  authDomain: "texskitchen-9e740.firebaseapp.com",
  databaseURL: "https://texskitchen-9e740.firebaseio.com",
  projectId: "texskitchen-9e740",
  storageBucket: "texskitchen-9e740.appspot.com",
  messagingSenderId: "190715478208",
  appId: "1:190715478208:web:4c6321055a2babeaa46d25",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
