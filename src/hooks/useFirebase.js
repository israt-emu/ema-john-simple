import initializeAuth from "../firebase/initialize-firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const auth = getAuth();
  ///sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign in with fb
  const signInWithFacebook = () => {
    return signInWithPopup(auth, fbProvider);
  };
  //sign up using email & pass
  const signUpWithEmailPass = () => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  //sign in with email and pass
  const signInWithEmailPass = () => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  //update profile
  const userProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };
  //sign out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    signInWithGoogle,
    signInWithFacebook,
    setError,
    error,
    logOut,
    setName,
    setEmail,
    setPass,
    setUser,
    signUpWithEmailPass,
    signInWithEmailPass,
    userProfile,
  };
};
export default useFirebase;
