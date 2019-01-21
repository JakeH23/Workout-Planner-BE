const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = require('./config.js');

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

module.exports = db;
