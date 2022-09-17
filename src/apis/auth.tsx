import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  getAuth,
} from "firebase/auth";
import { provider } from "../firebase";

const auth = getAuth();

export const googleSessionLogin = () => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return googleSignInWithPopup();
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
export const googleSignInWithPopup = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential == null) {
        return;
      }
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      alert(auth.currentUser?.displayName + "님 환영합니다.");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const googleLogout = () => {
  signOut(auth)
    .then(() => {
      alert("로그아웃 되었습니다.");
      console.log(auth);
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
