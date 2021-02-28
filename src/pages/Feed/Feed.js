import React from "react";
import { Post } from "../../components";

function Feed() {
  return (
    <div className={`overflow-auto w-3/4 mx-auto py-3`}>
      <div className={`my-4`}>
        <button className={`btn`}>Write</button>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
