import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFollowUser } from "../../handlers/user";
import { avatar } from "./UserCard.module.css";

function UserCard({ uid, displayName, followings, isFollowing }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className={`flex items-center shadow-lg mx-auto my-2 w-3/4 p-8 rounded`}>
      <div className={`${avatar} mr-4`}></div>
      <div className={`flex-grow`}>
        <h1>{displayName}</h1>
        <span className={`text-xs`}>
          Following : {followings ? followings.length : 0}
        </span>
      </div>
      <button
        className={`btn`}
        onClick={() => handleFollowUser(uid, isFollowing, user, dispatch)}>
        {isFollowing ? `Unfollow` : `Follow`}
      </button>
    </div>
  );
}

export default UserCard;
