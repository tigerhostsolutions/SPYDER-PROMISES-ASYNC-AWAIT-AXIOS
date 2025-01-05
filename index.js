// Import Axios
const axios = require('axios');

// URL of the API we're using
const API_KEY = 'live_gecybbtg4DMF0IwPFn5AC9xqPKEhz02jvj2EcTPI8lXWit3A16xGC4CDI9V6EYA2';
const API_URL = `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${API_KEY}`;

// Function to fetch posts (GET method)
function fetchPosts() {
  return axios.get(API_URL).then((response) => {
    console.log('Fetched Posts:');
    console.log(response.data); // Logs list of posts
    return response.data;
  }).catch((error) => {
    console.error('Error fetching posts:', error);
  });
}

// Function to add a new post (POST method) using Async/Await
async function addPost(postData) {
  try {
    const response = await axios.post(API_URL, postData);
    console.log('New Post Added:');
    console.log(response.data); // Logs the newly created post
    return response.data;
  }
  catch (error) {
    console.error('Error adding post:', error);
  }
}

/**
 * Updates a post by sending a request to the API endpoint.
 *
 * @param {string} url - The API endpoint URL.
 * @param {number|string} id - The ID of the post to update.
 * @param {Object} data - The updated data for the post.
 * @returns {Promise} - A promise that resolves with the API response.
 */
const updatePost = async (url, id, data) => {
  try {
    const response = await axios.put(`${url}/${id}`, data); // Use `.patch` instead if needed
    console.log('Post updated successfully:', response.data);
    return response.data; // Return the updated post data or response
  } catch (error) {
    console.error('Error updating the post:', error);
    throw error; // Rethrow the error for the caller to handle
  }
};

// Example usage:
const apiUrl = 'https://example.com/posts'; // Base API endpoint for posts
const postId = 1; // ID of the post to update
const updatedData = {
  title: 'Updated Title',
  content: 'This is the updated content.',
};

updatePost(apiUrl, postId, updatedData)
.then((updatedPost) => {
  console.log('Updated post details:', updatedPost);
})
 .catch((err) => {
  console.error('Failed to update the post:', err.message);
});


// Function to demonstrate both GET and POST functionality
async function runProject() {
  console.log('Fetching all posts...');
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