const axios = require("axios");

const userApiUrl = {
  createUser:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/user/create",
  readUserId:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/user/",
  readUsers:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/users",
};

const createFirestoreUser = (user) => {
  console.log(user.uid, user.displayName);
  axios
    .post(userApiUrl.createUser, {
      uid: user.uid,
      displayName: user.displayName,
    })
    .then((res) => console.log("createUser", res))
    .catch((error) => console.log("createUser", error));
};

export { userApiUrl, createFirestoreUser };
