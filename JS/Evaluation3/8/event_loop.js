/*
Question:

Explain the event loop with an example?

-----

Explanation:

Event loop is a way to achieve mulithreading functionality, though javascript supports only single threading functionality.
There is no need to wait for the current statement to finish execution.
With Event loop, once the statement starts executing it is assigned to an event loop and we can move to the next statement
when the statement in the event loop finishes its execution, then we can make the necessary processing without waiting for it
to complete. This isn't possible in single threading where upon completion of a task the other task will start its execution.

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
