import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actionCreators/user";
import { Layout } from "../../components";

function Home({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };
  return (
    <Layout>
      <h1>Home : {user.displayName}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </Layout>
  );
}

export default Home;
