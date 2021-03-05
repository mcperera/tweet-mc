const axios = require("axios");

const userApiUrl = {
  createUser:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/user/create",
  readUserId:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/user/",
  readUsers:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/users",
  updateUsers:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/user/update/",
};

const createFirestoreUser = async (user) => {
  //console.log("createFirestoreUser-->", user.uid, user.displayName);
  await axios
    .post(userApiUrl.createUser, {
      uid: user.uid,
      displayName: user.displayName,
      posts: user.posts,
    })
    .then()
    .catch((error) => console.log("createUser-->", error));
};

const readFirestoreUserId = async (userUid) => {
  //console.log("readFirestoreUserId-->", userId);
  try {
    const data = await axios.get(`${userApiUrl.readUserId}${userUid}`);
    return data;
  } catch (error) {
    console.log("readFirestoreUserId-->", error);
  }
};

const updateFirestoreUsers = async (userUid, updatedUser) => {
  //console.log("updateFirestoreUsers-->", updatedUser);
  await axios
    .put(`${userApiUrl.updateUsers}${userUid}`, updatedUser)
    .then()
    .catch((error) => console.log("updateFirestoreUsers-->", error));
};

export {
  userApiUrl,
  createFirestoreUser,
  readFirestoreUserId,
  updateFirestoreUsers,
};
