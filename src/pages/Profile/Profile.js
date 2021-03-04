import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import { userApiUrl } from "../../api/userApi";
import { updateFirestoreUsers } from "../../api/userApi";
import { USER_UPDATE } from "./../../store/actionTypes/user";
import { ProfileHeader, ProfileTabs, Post, UserCard } from "../../components";

function Profile() {
  const [selectTab, setSelectTab] = useState({
    tab: "Posts",
  });
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [fetchState, dbUsers] = useFetchData(userApiUrl.readUsers);

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

  let tabData = <Post />;

  const userFollowings = dbUsers?.filter((data) => {
    return user.followings.includes(data.uid) && data;
  });

  const userFollowers = dbUsers?.filter((data) => {
    return user.followers.includes(data.uid) && data;
  });

  switch (selectTab.tab) {
    case "Post":
      tabData = <Post />;
      break;
    case "Followers":
      tabData = (
        <>
          {userFollowers.map((fUser) => {
            return fetchState.loading ? (
              <h1>Loading...</h1>
            ) : (
              <UserCard
                key={fUser.uid}
                {...fUser}
                isFollowing={user.followings.includes(fUser.uid)}
                handleFollowUser={handleFollowUser}
              />
            );
          })}
        </>
      );
      break;
    case "Following":
      tabData = (
        <>
          {userFollowings.map((fUser) => {
            return fetchState.loading ? (
              <h1>Loading...</h1>
            ) : (
              <UserCard
                key={fUser.uid}
                {...fUser}
                isFollowing={true}
                handleFollowUser={handleFollowUser}
              />
            );
          })}
        </>
      );
      break;
    default:
      break;
  }

  return (
    <section>
      <ProfileHeader />
      <ProfileTabs setSelectTab={setSelectTab} selectTab={selectTab} />
      <div className={`w-3/4 mx-auto`}>{tabData}</div>
    </section>
  );
}

export default Profile;
