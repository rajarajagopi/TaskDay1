// Create Resume data in JSON format
let resume = {
    Name:'Rajagopi',age:'33',phone:9952116933,address:'Mudukulathur Ramanathapuram',pincode:623704,bloodgroup:'B+',
    Education:'MCA',Experience:'4years'

};
console.log(JSON.stringify(resume)); //this is JSON string iterate
// fron JSON iterate over all for loops
//print key name only by using for in loop
for (let keyname in resume){
    console.log(keyname);
} 
//Print key name and key value by using for in loop
for(let keyname in resume)
{
console.log(keyname,resume[keyname]);
}

/*
Window,screen and Document

Document Object: The document object represent a web page that is loaded in the browser. 
By accessing the document object, we can access the element in the HTML page. 
With the help of document objects, we can add dynamic content to our web page. 
The document object can be accessed with a window.document or just document.

Syntax:
document.property_name; 

Methods of Document:
Syntax:
document.method_name;

Window Object: The window object is the topmost object of the DOM hierarchy. 
It represents a browser window or frame that displays the contents of the webpage. 
Whenever a window appears on the screen to display the contents of the document, 
the window object is created. 

Syntax:
window.property_name;

Methods of Window:
Syntax:
window.method_name;
*/

