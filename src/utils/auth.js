import React from "react";
import { navigate } from "gatsby";
import * as firebase from "firebase";

export const fireBaseLogin = ({ email, password }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      window.localStorage.setItem("firebaseAuth", true);
      navigate(`/app/profile`);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(error);
    });
};

export const isBrowser = () => typeof window !== "undefined";

const getFirebaseAuthStatus = () => {
  return isBrowser() && window.localStorage.getItem("firebaseAuth")
    ? isBrowser() && window.localStorage.getItem("firebaseAuth")
    : false;
};

export const isLogin = () => {
  return getFirebaseAuthStatus();
};
