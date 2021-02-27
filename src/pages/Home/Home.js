import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../auth/";

function Home({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };
  return (
    <div>
      <h1>Home : {user.email}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
