const axios = require("axios");

const postApiUrl = {
  createPost:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/post/create",
  readPostById:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/posts/",
  readPosts:
    "https://us-central1-components-302307.cloudfunctions.net/tweetFunctions/api/posts",
};

const createFirestorePost = async (post) => {
  //console.log("createFirestoreUser-->", user.uid, user.displayName);
  await axios
    .post(postApiUrl.createPost, {
      uid: post.uid,
      title: post.title,
      postBody: post.postBody,
    })
    .then((res) => console.log("createPost-->", res))
    .catch((error) => console.log("createPost-->", error));
};

const readFirestorePostUserId = async (userUid) => {
  //console.log("readFirestoreUserId-->", userId);
  try {
    const data = await axios.get(`${postApiUrl.readPostById}${userUid}`);
    return data;
  } catch (error) {
    console.log("readFirestoreUserId-->", error);
  }
};

export { postApiUrl, createFirestorePost, readFirestorePostUserId };
