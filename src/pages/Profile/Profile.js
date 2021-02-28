import React, { useState } from "react";
import { ProfileHeader, ProfileTabs, Post, UserCard } from "../../components";

function Profile() {
  const [selectTab, setSelectTab] = useState({
    tab: "Posts",
  });

  let tabData = <Post />;

  switch (selectTab.tab) {
    case "Post":
      tabData = <Post />;
      break;
    case "Followers":
      tabData = <UserCard />;
      break;
    case "Following":
      tabData = <UserCard />;
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
