// firebaseauth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const showMessage = (id, message, isError = false) => {
  const el = document.getElementById(id);
  el.style.display = 'block';
  el.textContent = message;
  el.style.backgroundColor = isError ? '#e74c3c' : '#8e44ad';
};

document.getElementById("submitSignUp").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("signUpMessage", "Registration successful!");
    })
    .catch((error) => {
      showMessage("signUpMessage", error.message, true);
    });
});

document.getElementById("submitSignIn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("signInMessage", "Sign in successful!");
    })
    .catch((error) => {
      showMessage("signInMessage", error.message, true);
    });
});
