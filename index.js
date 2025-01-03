// Import Axios
const axios = require("axios");

// URL of the API we're using
const API_KEY = "live_gecybbtg4DMF0IwPFn5AC9xqPKEhz02jvj2EcTPI8lXWit3A16xGC4CDI9V6EYA2";
const API_URL = `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${API_KEY}`;
// Function to fetch posts (GET method)
function fetchPosts() {
  return axios.get(API_URL)
               .then((response) => {
    console.log("Fetched Posts:");
    console.log(response.data); // Logs list of posts
    return response.data;
  })
               .catch((error) => {
    console.error("Error fetching posts:", error);
  });
}

/*
// Function to add a new post (POST method) using Async/Await
async function addPost(postData) {
  try {
    const response = await axios.post(API_URL, postData);
    console.log("New Post Added:");
    console.log(response.data); // Logs the newly created post
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
  }
}
 */

// Function to demonstrate both GET and POST functionality
async function runProject() {
  console.log("Fetching all posts...");
  await fetchPosts(); // Call the fetchPosts function (GET)

  /*
  console.log("\nAdding a new post...");
  const newPost = {
    title: "My New Post",
    body: "This is the content of the new post.",
    userId: 1

  };

  await addPost(newPost); // Call the addPost function (POST)
*/

}

// Run the project
runProject();