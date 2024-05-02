//Firebase Setup Start
import { initializeApp } from "firebase/app"
import { getAuth,
         sendEmailVerification,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut, 
          } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAMx5Txlm2VbxLUKL-xsJVMEvvJ2YcZSoc",
    authDomain: "familycookbook-580bf.firebaseapp.com",
    projectId: "familycookbook-580bf",
    storageBucket: "familycookbook-580bf.appspot.com",
    messagingSenderId: "365501345761",
    appId: "1:365501345761:web:9bd74d44cd7a458a156ca0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//Firebase Setup End

function authCreateAccountWithEmail() {
  const email = emailInputEl.value;
  const password = passwordInputEl.value;
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  clearAuthFields()
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage)
})};

function authSignInWithEmail() {
  const email = emailInputEl.value
  const password = passwordInputEl.value
  
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        clearAuthFields()
    })
    .catch((error) => {
        console.error(error.message)
    })
}

function authSignOut() {
  signOut(auth)
      .then(() => {
      }).catch((error) => {
          console.error(error.message)
      })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
      showLoggedInView()
      showProfilePicture(userProfilePictureEl, user)
  } else {
      showLoggedOutView() 
  }
})

function clearInputField(field) {
	field.value = ""
}

function clearAuthFields() {
	clearInputField(emailInputEl)
	clearInputField(passwordInputEl)
}

function showLoggedOutView() {
  hideView(viewLoggedIn)
  showView(viewLoggedOut)
}

function showLoggedInView() {
  hideView(viewLoggedOut)
  showView(viewLoggedIn)
}

function showView(view) {
  view.style.display = "flex"
}

function hideView(view) {
  view.style.display = "none"
}