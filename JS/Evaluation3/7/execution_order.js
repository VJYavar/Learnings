/*
Question:

What is the execution order of the following block of code? const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2) const ex = () => {
console.log(ex) setTimeout(ex1, 1000) ex2()
} ex()

-----

Explanation:

The function ex() is called. 
function ex() prints "ex" to the console.
function ex() sets a timeout for 1000 milliseconds. It passes function ex1() as the callback to setTimeout event
The timer is started
function ex() calls function ex2().
function ex2() prints "ex2" to the console
Waits. Waits. Waits.
The timer is ended
Then the function ex1() passed as a callback function is called
function ex1() prints "ex1" to the console

*/

"use strict";

const ex1 = () => console.log(ex1);

const ex2 = () => console.log(ex2);

const ex = () => {
  console.log(ex);
  setTimeout(ex1, 1000);
  ex2();
};

ex();
