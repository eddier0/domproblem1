
//create a function for the background 
//Get all elements in the document with the specified tag name body

function set_background() {
  docBody = document.getElementsByTagName("body")[0];
   
  //Get all the p elements that are descendants of the body
   myBodyElements = docBody.getElementsByTagName("p");

   // get the p element and set the background color
   myp1 = myBodyElements[0];
   myp1.style.background = "#f18973";
 }