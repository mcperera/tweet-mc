import React, { useState } from "react";
import { ProfileHeader, ProfileTabs } from "../../components";

function Profile() {
  const [selectTab, setSelectTab] = useState({
    tab: "Posts",
  });

  let tabData = <h1>Posts</h1>;

  switch (selectTab.tab) {
    case "Post":
      tabData = <h1>Posts</h1>;
      break;
    case "Followers":
      tabData = <h1>Followers</h1>;
      break;
    case "Following":
      tabData = <h1>Following</h1>;
      break;
    default:
      break;
  }

  return (
    <section>
      <ProfileHeader />
      <ProfileTabs setSelectTab={setSelectTab} selectTab={selectTab} />
      <div>{tabData}</div>
    </section>
  );
}

export default Profile;
