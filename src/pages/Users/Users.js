import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { userApiUrl } from "../../api/userApi";
import { UserCard } from "../../components";

function Users() {
  const [fetchState, data] = useFetchData(userApiUrl.readUsers);

  console.log(fetchState);

  return (
    <div className={`overflow-auto w-3/4 mx-auto py-3`}>
      {fetchState.loading && <h1>Loading...</h1>}
      {data?.map((user) => {
        return <UserCard key={user.uid} {...user} />;
      })}
    </div>
  );
}

export default Users;
