import produce from "immer";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_UPDATE,
} from "../actionTypes/user";

const initialState = {
  user: null,
};

//----with immer
export default produce((draft, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      draft.user = action.payload.user;
      break;
    case USER_UPDATE:
      draft.user = action.payload.user;
      break;
    case USER_LOGOUT_SUCCESS:
      draft.user = null;
      break;
    default:
      return draft;
  }
}, initialState);

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case USER_LOGIN_SUCCESS:
//       return { ...state, user: action.payload.user };
//     //draft.user = action.payload.user;
//     case USER_LOGOUT_SUCCESS:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// }
