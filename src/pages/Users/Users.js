import React from "react";
import { useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import { userApiUrl } from "../../api/userApi";
import { UserCard } from "../../components";

function Users() {
  const { user } = useSelector((state) => state.user);
  const [fetchState, users] = useFetchData(userApiUrl.readUsers);

  //TODO

  return (
    <div className={`overflow-auto w-3/4 mx-auto py-3`}>
      {fetchState.loading && <h1>Loading...</h1>}
      {users?.map((fetchUser) => {
        if (fetchUser.uid !== user.uid) {
          const currentUserFollowings = user.followings;

          return (
            <UserCard
              key={fetchUser.uid}
              {...fetchUser}
              isFollowing={currentUserFollowings.includes(fetchUser.uid)}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Users;
