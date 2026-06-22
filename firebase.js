import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  set,
  get,
  onValue,
  runTransaction,
  remove,
  update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1z3g4ZV5YYpY4FyzmQ7BRMe8SpsKp_MM",
  authDomain: "djleonardx.firebaseapp.com",
  databaseURL: "https://djleonardx-default-rtdb.firebaseio.com",
  projectId: "djleonardx",
  storageBucket: "djleonardx.firebasestorage.app",
  messagingSenderId: "214070212244",
  appId: "1:214070212244:web:05560ffa1aa7da868fa681",
  measurementId: "G-42MR358TSN"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export {
  ref,
  push,
  set,
  get,
  onValue,
  runTransaction,
  remove,
  update
};

signInAnonymously(auth)
  .then(() => console.log("Conectado anónimamente"))
  .catch(console.error);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("UID:", user.uid);
  }
});