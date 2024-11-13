//Storing posts into an array
let posts = [];

module.exports = {
    // Function #1, add a new post
    addPost(title, content, likes) {
        posts.push({
            title: title,
            content: content,
            likes: likes
        });

        displayAdded = posts[posts.length-1]

        console.log("Title: " + displayAdded.title);
        console.log("Content: " + displayAdded.content);
        console.log("Likes: " + displayAdded.likes);
    },
    // Function #2, display all posts
    displayPosts() {
        if (posts.length > 0) {
            posts.forEach(post => {
                console.log("Title: " + post.title);
                console.log("Content: " + post.content);
                console.log("Likes: " + post.likes);
                console.log();
            });
        }

        else {
            console.log("There is no posts available.");
        }
    }
}