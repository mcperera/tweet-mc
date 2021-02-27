import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../actionTypes/user";
import fire from "../../auth/firebase";
import { googleProvider } from "../../auth/providers";

const signIn = () => {
  return (dispatch) => {
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        var user = result.user;
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

function logOut() {
  return (dispatch) => {
    fire
      .auth()
      .signOut()
      .then(function () {
        dispatch({
          type: USER_LOGOUT_SUCCESS,
        });
      })
      .catch(function (error) {
        // An error happened.
      });
  };
}

export { signIn, logOut };
