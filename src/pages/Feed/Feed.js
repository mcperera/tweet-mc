import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { postApiUrl } from "../../api/postApi";
import { Post } from "../../components";

function Feed() {
  const [fetchState, posts] = useFetchData(postApiUrl.readPosts);
  return (
    <div className={`overflow-auto w-5/6 mx-auto py-3`}>
      <div className={`my-4`}>
        <button className={`btn`}>Write</button>
      </div>
      {fetchState.loading && <h1>Loading...</h1>}
      {posts?.map((post) => {
        return <Post key={post.postId} {...post} />;
      })}
    </div>
  );
}

export default Feed;
