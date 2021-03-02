import fire from "../../auth/firebase";
import { googleProvider } from "../../auth/provider";
import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../actionTypes/user";
import { createFirestoreUser, readFirestoreUserId } from "../../api/userApi";

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

const signWithEmailPass = (formData, history) => {
  return (dispatch) => {
    fire
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(function (result) {
        var userData = readFirestoreUserId(result.user.uid);
        userData.then(({ data }) => {
          const user = { ...data, uid: result.user.uid };
          dispatch({ type: USER_LOGIN_SUCCESS, payload: { user } });
          history.push("/");
        });
      })
      .catch((error) => console.log(error));
  };
};

const createUser = (formData, history) => {
  console.log("createUser -->", formData.email, formData.password);

  return (dispatch) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(function () {
        const user = fire.auth().currentUser;
        user
          .updateProfile({
            displayName: formData.name,
          })
          .then(() => {
            const currentUser = fire.auth().currentUser;
            const user = {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              posts: 0,
              followings: [],
              followers: [],
            };
            createFirestoreUser(user);
            dispatch({
              type: USER_LOGIN_SUCCESS,
              payload: { user },
            });
            history.push("/");
          })
          .catch((error) => console.log("createUser", error));
      })
      .catch((error) => console.log(error));
  };
};

export { signIn, signOut, signWithEmailPass, createUser };
