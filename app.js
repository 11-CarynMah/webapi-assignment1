const contentMangement = require("./CarynMah_ContentManagement.js");

//1. Add new posts
console.log("----------------------------------------------------------------------------------------------------");
console.log("ADDING NEW POST!");
contentMangement.addPost("Third Post!", "Went on my third trip to France and enjoyed the view there.","places", 80);
console.log("----------------------------------------------------------------------------------------------------");


console.log();


//2. Display all posts
console.log("----------------------------------------------------------------------------------------------------");
console.log("DISPLAYING ALL THE AVAILABLE POSTS!");
contentMangement.displayPosts();
console.log("----------------------------------------------------------------------------------------------------");


console.log();

//3. Edit a post
console.log("----------------------------------------------------------------------------------------------------");
console.log("EDITING POSTS!");
contentMangement.editPosts(2,"Edited Second Post!", "Went on my second trip to Korea.");
console.log()
console.log("----------------------------------------------------------------------------------------------------");

console.log();

//4. Delete a post
console.log("----------------------------------------------------------------------------------------------------");
console.log("DELETING A POST!");
contentMangement.deletePosts(1);
console.log()
console.log("----------------------------------------------------------------------------------------------------");

console.log();

//5. Filter tags
console.log("----------------------------------------------------------------------------------------------------");
console.log("DISPLAY BY TAGS!");
contentMangement.filterTag("places");
console.log()
console.log("----------------------------------------------------------------------------------------------------");