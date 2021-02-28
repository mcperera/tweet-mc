import React from "react";
import { UserCard } from "../../components";

function Users() {
  return (
    <div className={`overflow-auto w-3/4 mx-auto py-3`}>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default Users;
