console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent =
  'O ised the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

//console.log(document.getElementsByClassName("node2"));
document.getElementsByClassName("node2")[0].textContent =
  'I used the getElementByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let tagH = document.getElementsByTagName("h3");
console.log(tagH.length);

for (let i = 0; i < tagH.length; i++) {
  tagH[i].textContent =
    'I used the getElementByTag("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newParagraph = document.createElement("p");
newParagraph.textContent =
  "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
document.getElementById("parent").appendChild(newParagraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let newA = document.createElement("a");
newA.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>
newA.href = "#";
newA.style = "text-decoration:none; color:white";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
document.getElementById("parent").insertBefore(newA, newParagraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
let prevChildNode = document.getElementById("N1");
document
  .getElementById("exercise-container3")
  .replaceChild(newChild, prevChildNode);

// TODO: Remove the "New Child Node"
document.getElementById("exercise-container3").removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)"
];

// TODO: Create an unordered list element
let unorderedList = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

for (let i = 0; i < list.length; i++) {
  let createList = document.createElement("li");
  createList.textContent = list[i];
  createList.style = "list-style:none";
  unorderedList.appendChild(createList);
}

// TODO: Append the unordered list to the `div#container` under exercise 4
document.getElementById("container").appendChild(unorderedList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

document.getElementById("btn").addEventListener("click", () => {
  let modalContainer = document.createElement("div");
  let modalContent = document.createElement("div");
  let content = document.createElement("p");
  let closebtn = document.createElement("button");

  content.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

  closebtn.textContent = "Close Button";
  modalContainer.id = "modal";
  modalContent.classList.add("modal-card");
  modalContent.append(content, closebtn);
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  closebtn.addEventListener("click", () => {
    modalContainer.remove();
  });
});

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
