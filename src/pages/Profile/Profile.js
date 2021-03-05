import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import { userApiUrl } from "../../api/userApi";
import { readFirestorePostUserId } from "../../api/postApi";
import { ProfileHeader, ProfileTabs, Post, UserCard } from "../../components";

function Profile() {
  const [selectTab, setSelectTab] = useState({
    tab: "Posts",
  });
  const [postData, setPostData] = useState("");
  const { user } = useSelector((state) => state.user);
  const [fetchState, dbUsers] = useFetchData(userApiUrl.readUsers);

  let tabData = "";

  useEffect(() => {
    readFirestorePostUserId(user.uid).then(({ data }) => {
      setPostData(data);
    });
  }, [user.uid]);

  const userFollowings = dbUsers?.filter((data) => {
    return user.followings.includes(data.uid) && data;
  });

  const userFollowers = dbUsers?.filter((data) => {
    return user.followers.includes(data.uid) && data;
  });

  switch (selectTab.tab) {
    case "Posts":
      tabData = (
        <>
          {postData &&
            postData.map((post) => {
              console.log(post);
              return <Post key={post.postId} {...post} />;
            })}
        </>
      );
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
              <UserCard key={fUser.uid} {...fUser} isFollowing={true} />
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
