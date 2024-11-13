const contentMangement = require("./CarynMah_ContentManagement.js");

//Add new posts
console.log("----------------------------------------------------------------------------------------------------");
console.log("ADDING NEW POST!");
console.log();
contentMangement.addPost("First Post!", "Went on my first trip to Bali and enjoyed really good food there.", 0);
console.log();
contentMangement.addPost("Second Post!", "Went on my second trip to Korea and enjoyed the shopping there.", 0);
console.log("----------------------------------------------------------------------------------------------------");


console.log();


//Display all posts
console.log("----------------------------------------------------------------------------------------------------");
console.log("WE SHALL DISPLAY ALL THE AVAILABLE POSTS!");
console.log();
contentMangement.displayPosts();
console.log("----------------------------------------------------------------------------------------------------");


console.log();