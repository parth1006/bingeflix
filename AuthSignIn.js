
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDacOaGoQWe_ZC70WtHeLNUezh3oIP69IE",
  authDomain: "bingeflix-bcfc2.firebaseapp.com",
  projectId: "bingeflix-bcfc2",
  storageBucket: "bingeflix-bcfc2.appspot.com",
  messagingSenderId: "840040395516",
  appId: "1:840040395516:web:60f37886675a1758d01d79"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById("SignInBtn");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //INPUTS
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Signing in to account");
      window.location.href="index1.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage+errorCode);
      // ..
    });
});
