import React from "react";
import { avatar } from "./Post.module.css";

function Post() {
  return (
    <div className={`shadow-lg mx-auto my-2 w-3/4 p-8 rounded`}>
      <div className={`flex mb-3 items-center`}>
        <div className={`${avatar} mr-4`}></div>
        <div className={`flex flex-grow`}>
          <h1>Madushan Perera</h1>
        </div>
        <span className={`text-xs font-light self-end`}>10 mins ago</span>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          necessitatibus obcaecati veniam error? Fugiat quis et repellat sit eos
          ratione tempora? Quasi iste eius aperiam cumque dicta dolorem sequi
          asperiores!
        </p>
      </div>
    </div>
  );
}

export default Post;
