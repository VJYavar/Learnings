/*
Question:

Look at the code below, you have a for loop if you have setTimeout inside it. 
If log the loop counter inside setTimeout, what will be logged?
for(var i = 0; i < 10; i++) { setTimeout(function() {
console.log(i); }, 10);
}

-----

Explanation:

Here 10 will be logged 10 times to the console because there are 10 iterations and
in each iteration the setTimeout function starts a timer for 10 milliseconds and
after 10 milliseconds it executes the callback function which will log the value of
loop counter, which has already obtained 10 as the value. Event Loop plays a vital role here

*/

"use strict";

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
