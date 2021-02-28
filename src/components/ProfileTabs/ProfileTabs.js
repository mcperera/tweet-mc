import React from "react";
import { BsFilePost } from "react-icons/bs";
import { tabItem } from "./ProfileTabs.module.css";

const tabsData = [
  {
    title: "Posts",
    icon: <BsFilePost className="inline-block mr-2" />,
  },
  {
    title: "Followers",
    icon: <BsFilePost className="inline-block mr-2" />,
  },
  {
    title: "Following",
    icon: <BsFilePost className="inline-block mr-2" />,
  },
];

function ProfileTabs({ selectTab, setSelectTab }) {
  return (
    <div className={`w-3/4 mx-auto`}>
      <ul className={`flex justify-center items-center mx-auto w-3/4`}>
        {tabsData.map((tab, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                setSelectTab(() => {
                  return { tab: tab.title };
                })
              }
              className={`${
                selectTab.tab === tab.title && tabItem
              } flex justify-center  items-center w-32 py-3 text-center mx-3 cursor-pointer`}>
              {tab.icon}
              {tab.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProfileTabs;
