import React, { useState, useEffect } from "react";
import { readFirestoreUserId } from "../../api/userApi";
import { avatar } from "./Post.module.css";

function Post({ uid, title, postBody, created }) {
  const [author, setAuthor] = useState("");

  useEffect(() => {
    readFirestoreUserId(uid).then(({ data }) => setAuthor(data));
  }, [uid]);

  return (
    <div className={`shadow-lg mx-auto my-2 w-3/4 p-8 rounded`}>
      <div className={`flex mb-3 items-center`}>
        <div className={`${avatar} mr-4`}></div>
        <div className={`flex flex-grow`}>
          <h1>{author.displayName}</h1>
        </div>
        <span className={`text-xs font-light self-end`}>{created}</span>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{postBody}</p>
      </div>
    </div>
  );
}

export default Post;
