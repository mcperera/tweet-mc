import { updateFirestoreUsers } from "../api/userApi";
import { USER_UPDATE } from "./../store/actionTypes/user";

const handleFollowUser = (uid, isNotFollowing, user, dispatch) => {
  if (isNotFollowing) {
    const updatedFollowings = { remove: true, followings: uid };
    updateFirestoreUsers(user.uid, updatedFollowings);

    const updatedFollowers = { remove: true, followers: user.uid };
    updateFirestoreUsers(uid, updatedFollowers);

    const followings = user.followings.filter((item) => item !== uid && item);

    dispatch({
      type: USER_UPDATE,
      payload: { user: { ...user, followings: followings } },
    });
  } else {
    const updatedFollowings = { remove: false, followings: uid };
    updateFirestoreUsers(user.uid, updatedFollowings);

    const updatedFollowers = { remove: false, followers: user.uid };
    updateFirestoreUsers(uid, updatedFollowers);

    const followings = user.followings.map((item) => item);
    followings.push(uid);

    dispatch({
      type: USER_UPDATE,
      payload: { user: { ...user, followings: followings } },
    });
  }
};

export { handleFollowUser };
