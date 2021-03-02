import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";
import { profileHeader, avatar } from "./ProfileHeader.module.css";

function ProfileHeader() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  return (
    <div className={`${profileHeader} w-3/4 mx-auto text-red-400`}>
      <div className={`flex justify-center items-center gap-12 py-10`}>
        <div className={`${avatar}`}></div>
        <div>
          <h1 className={`font-bold text-3xl`}>{user.displayName}</h1>
          <ul className={`flex my-2 text-red-300`}>
            <li className={`pr-5`}>Posts : {user.posts}</li>
            <li className={`pr-5`}>
              Followers : {user.followers ? user.followers.length : 0}
            </li>
            <li className={`pr-5`}>
              Followings : {user.followings ? user.followings.length : 0}
            </li>
          </ul>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
