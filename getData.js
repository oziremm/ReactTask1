import axios from "axios";

export default async function getData(userId) {
  try {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    console.log("user", user)

    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    console.log("posts", posts)
  }
  catch (e) {
    console.log(e)
  }
};