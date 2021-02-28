import React from "react";
import { avatar } from "./UserCard.module.css";

function UserCard() {
  return (
    <div
      className={`flex items-center shadow-lg mx-auto my-2 w-3/4 p-8 rounded`}>
      <div className={`${avatar} mr-4`}></div>
      <div className={`flex-grow`}>
        <h1>Madushan Perera</h1>
        <span className={`text-xs`}>Following : 200</span>
      </div>
      <button className={`btn`}>Follow</button>
    </div>
  );
}

export default UserCard;
