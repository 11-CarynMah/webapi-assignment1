//Storing posts into an array
const posts = [
    {
        postNum: 1,
        title: "First Post!",
        content: "Went on my first trip to Bali and enjoyed the food there.",
        tag: "food",
        likes: 30
    },

    {
        postNum: 2,
        title: "Second Post!",
        content: "Went on my second trip to Korea and enjoyed the shopping there.",
        tag: "shopping",
        likes: 50
    } 
];

module.exports = {

    // Function #1, add a new post
    addPost(title, content, tag, likes) {
        //Adding the details into the array
        posts.push({
            postNum: posts.length + 1,
            title: title,
            content: content,
            tag: tag,
            likes: likes
        });

        console.log("Successfully added new post(s)");
        console.log();

        //Get post details that have just been added
        displayAdded = posts[posts.length-1]
        console.log("Post Number: " + displayAdded.postNum);
        console.log("Title: " + displayAdded.title);
        console.log("Content: " + displayAdded.content);
        console.log("Tags: " + displayAdded.tag)
        console.log("Likes: " + displayAdded.likes);
    },

    // Function #2, display all posts
    displayPosts() {

        if (posts.length > 0) {
            //Loop the console.log to display all the arrays
            posts.forEach((post) => {
                if (post!== null){
                    console.log("Post Number: " + post.postNum);
                    console.log("Title: " + post.title);
                    console.log("Content: " + post.content);
                    console.log("Content: " + post.tag);
                    console.log("Likes: " + post.likes);
                    console.log();
                }

                else
                {
                    //Error message if there is no post
                    console.log("There is no post available.")
                }
            });
        }

        else {
            //Error message if there is no post
            console.log("There is no posts available.");
        }
    },

    //Function #3, edit post content 
    editPosts(postNum, titleNew, contentNew) {

        const index = postNum-1;

        if (postNum <= posts.length)
        {
            //Replace old details with the edited details
            posts[index].title = titleNew;
            posts[index].content = contentNew;

            console.log("Edited Post Number:" + postNum);
            console.log("Title: " + titleNew);
            console.log("Content: " + contentNew);
        }

        else
        {
            //Error message is there is no post
            console.log("There is no such post.")
        }
    },

    //Function #4, delete post
    deletePosts(postNum){

        const index =  postNum-1;

        if (posts.length > 0 && postNum < posts.length) {
            
            //Retrieve the post number and delete by index
            posts[index] = null;
        
            console.log("Successfully deleted post, here is the updated list of posts:");
            console.log();

            //Loop the console.log to display all the arrays
            posts.forEach((post) => {
                //Check if post is null
                if (post!== null){
                    console.log("Post Number: " + post.postNum);
                    console.log("Title: " + post.title);
                    console.log("Content: " + post.content);
                    console.log("Content: " + post.tag);
                    console.log("Likes: " + post.likes);
                    console.log();
                }

                else
                {
                    //Error message if there is no post
                    console.log("There is no post available.")
                }
                
            });
        }

        else {
            //Error message if there is no post
            console.log("There is no posts available.");
        }
    },

     //Function #4, filter tag
     filterTag(tags){
        console.log();
        
        console.log(`Display post by ${tags}:`);

        console.log();
        
        posts.forEach((post) => {
            //check if tags match and if tag is null
            if (post!== null && post.tag === tags){
                console.log("Post Number: " + post.postNum);
                console.log("Title: " + post.title);
                console.log("Content: " + post.content);
                console.log("Content: " + post.tag);
                console.log("Likes: " + post.likes);
                console.log();
            }

            else
            {
                //If it does not fit the criteria, skip
            }
            
        });
     }

}