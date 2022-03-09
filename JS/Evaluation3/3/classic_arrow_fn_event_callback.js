/*
Question:

What is the difference between when classic and arrow functions are used as event callbacks?

-----

Explanation:

The major difference between when classic and arrow functions are used as event callbacks is
the "this" keyword binding. When a classic function is used as a event callback, the function is hosited
and the this keyword points to the global or outer scope. Here it is document.
When a arrow function is used as a event callback, the function isn't hoisted and the this keyword points to the parent object's
execution context. Here it is window.

*/

"use strict";

function classicClicked() {
  console.log("Classic Function Button was clicked.");
  console.log(this);
}

let arrowClicked = () => {
  console.log("Arrow Function Button was clicked.");
  console.log(this);
};

document
  .getElementById("classicButton")
  .addEventListener("click", classicClicked);

document.getElementById("arrowButton").addEventListener("click", arrowClicked);
