import fire from "./firebase";
import { googleProvider } from "./providers";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "./../store/actionTypes/user";

const signIn = (dispatch) => {
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

const signOut = (dispatch) => {
  fire
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: USER_LOGOUT_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { signIn, signOut };
