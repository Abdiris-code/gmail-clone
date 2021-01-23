import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyB-7pjsKlwi166IBWngGVXWQjscFgvOpyI",
	authDomain: "clone-6498d.firebaseapp.com",
	projectId: "clone-6498d",
	storageBucket: "clone-6498d.appspot.com",
	messagingSenderId: "286005626868",
	appId: "1:286005626868:web:a13aad8f8235dfe822dba1",
	measurementId: "G-VZE5ZPE2CY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
