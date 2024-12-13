const url = "http://localhost:3000/posts";

async function fetchData() {
    const newPost = {
        id: 55,
        text: "A comment about post 55",
        postId: 55
    };

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        let result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

// Posting data to the server
fetchData();