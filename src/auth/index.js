import fire from "./firebase";
import { googleProvider } from "./provider";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "./../store/actionTypes/user";

const signIn = () => {
  return (dispatch) => {
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // var token = result.credential.accessToken;
        var user = result.user;
        // console.log(token, user);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: { user } });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
};

const signOut = (history) => {
  return (dispatch) => {
    fire
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: USER_LOGOUT_SUCCESS });
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const signWithEmailPass = (email, password, history) => {
  return (dispatch) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        var user = result.user;
        dispatch({ type: USER_LOGIN_SUCCESS, payload: { user } });
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
};

const createUser = (email, password, history) => {
  console.log("createUser -->", email, password);

  return (dispatch) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        var user = result.user;
        dispatch({ type: USER_LOGIN_SUCCESS, payload: { user } });
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
};

export { signIn, signOut, signWithEmailPass, createUser };
