// npm install json-server to create fake json server
// npx json-server blog.json
// http://localhost:3000/posts
// { "id": "1", "text": "a comment about post 1", "postId": "1" }



const url = "http://localhost:3000/posts";

const newPost = {
    id: 44,
    text: "A comment about post 44",
    postId: 44
};

// Posting data to the server
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});



// Fetching data from the server
fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});





/**
 * Get the data from a Form then send that data to the server
 * Using async-await
 */













/**
 * Exam Suggestions:
 * 1) Create a form to get the data from the user
 * 2) Create a fake json server using json-server
 * 3) Use API to post it to the server
 * 4) Then fetch the data from the server using fetch API
 * 5) Then use a table to display the data
 */