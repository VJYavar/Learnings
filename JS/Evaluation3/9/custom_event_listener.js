/*
Question:

Create a custom event listener and explain?

-----

Explanation:

A Custom Event Listener is a Synthetic Event and it is created to handle the events based on custom requirements.
It can be created using the Event Constructor or CustomEvent Constructor function.
We can use this to handle the non browser events and browser events to a customised need.

*/

"use strict";

let customClickEvent = new Event("customClick");

document.addEventListener("customClick", function (event) {
  console.log("Custom Click Event Occured");
  console.log(event);
});

document
  .getElementById("customClickButton")
  .addEventListener("click", function (event) {
    document.dispatchEvent(customClickEvent);
  });
