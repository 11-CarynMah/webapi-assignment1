const contentMangement = require("./CarynMah_ContentManagement.js");

//Add new posts
console.log("----------------------------------------------------------------------------------------------------");
console.log("ADDING NEW POST!");
contentMangement.addPost("Third Post!", "Went on my third trip to France and enjoyed the view there.", 0);
console.log("----------------------------------------------------------------------------------------------------");


console.log();


//Display all posts
console.log("----------------------------------------------------------------------------------------------------");
console.log("DISPLAYING ALL THE AVAILABLE POSTS!");
contentMangement.displayPosts();
console.log("----------------------------------------------------------------------------------------------------");


console.log();

//Edit a post
console.log("----------------------------------------------------------------------------------------------------");
console.log("EDITING POSTS!");
contentMangement.editPosts(2,"Edited Second Post!", "Went on my second trip to Korea.");
console.log()
console.log("----------------------------------------------------------------------------------------------------");

console.log();