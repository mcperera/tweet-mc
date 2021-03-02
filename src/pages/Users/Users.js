import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import { updateFirestoreUsers } from "../../api/userApi";
import { USER_UPDATE } from "./../../store/actionTypes/user";
import { userApiUrl } from "../../api/userApi";
import { UserCard } from "../../components";

function Users() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [fetchState, users] = useFetchData(userApiUrl.readUsers);

  //TODO
  const handleFollowUser = (uid, follow) => {
    if (follow) {
      const updatedFollowings = { remove: true, followings: uid };
      //console.log("updatedFollowings", updatedFollowings);
      updateFirestoreUsers(user.uid, updatedFollowings);

      const updatedFollowers = { remove: true, followers: user.uid };
      //console.log("updatedFollowers", updatedFollowers);
      updateFirestoreUsers(uid, updatedFollowers);

      dispatch({
        type: USER_UPDATE,
        payload: { user: { ...user, followings: [] } },
      });
    } else {
      const updatedFollowings = { remove: false, followings: uid };
      //console.log("updatedFollowings", updatedFollowings);
      updateFirestoreUsers(user.uid, updatedFollowings);

      const updatedFollowers = { remove: false, followers: user.uid };
      //console.log("updatedFollowers", updatedFollowers);
      updateFirestoreUsers(uid, updatedFollowers);

      dispatch({
        type: USER_UPDATE,
        payload: { user: { ...user, followings: [uid] } },
      });
    }
  };

  return (
    <div className={`overflow-auto w-3/4 mx-auto py-3`}>
      {fetchState.loading && <h1>Loading...</h1>}
      {users?.map((fetchUser) => {
        if (fetchUser.uid !== user.uid) {
          const currentUserFollowings = user.followings;

          return (
            <UserCard
              key={fetchUser.uid}
              {...fetchUser}
              isFollowing={currentUserFollowings.includes(fetchUser.uid)}
              handleFollowUser={handleFollowUser}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Users;
