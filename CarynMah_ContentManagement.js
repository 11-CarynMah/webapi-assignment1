//Storing posts into an array
const posts = [
    {
        postNum: 1,
        title: "First Post!",
        content: "Went on my first trip to Bali and enjoyed the food there.",
        likes: 0
    },

    {
        postNum: 2,
        title: "Second Post!",
        content: "Went on my second trip to Korea and enjoyed the shopping there.",
        likes: 0
    } 
];

module.exports = {

    // Function #1, add a new post
    addPost(title, content, likes) {
        //Adding the details into the array
        posts.push({
            postNum: posts.length + 1,
            title: title,
            content: content,
            likes: likes
        });

        //Get post details that have just been added
        displayAdded = posts[postNum]
        console.log("Post Number: " + displayAdded.postNum);
        console.log("Title: " + displayAdded.title);
        console.log("Content: " + displayAdded.content);
        console.log("Likes: " + displayAdded.likes);
    },

    // Function #2, display all posts
    displayPosts() {
        if (posts.length > 0) {
            //Loop the console.log to display all the arrays
            posts.forEach((post) => {
                console.log("Post Number: " + post.postNum);
                console.log("Title: " + post.title);
                console.log("Content: " + post.content);
                console.log("Likes: " + post.likes);
                console.log();
            });
        }

        else {
            //Error message if there is no post
            console.log("There is no posts available.");
        }
    },

    //Function #3, 
    editPosts(postNum, titleNew, contentNew) {

        const index = postNum-1;

        if (postNum <= posts.length)
        {
            posts[index].title = titleNew;
            posts[index].content = contentNew;

            console.log("Edited Post Number:" + postNum);
            console.log("Title: " + titleNew);
            console.log("Content: " + contentNew);
        }

        else
        {
            console.log("There is no such post.")
        }
        
        
    }
}