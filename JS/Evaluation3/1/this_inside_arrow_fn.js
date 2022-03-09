/*
Question:

What is the scope of ‘this’ inside the Arrow function? 
Explain with an example?

-----

Explanation:

The 'this' keyword points to the execution context.
Arrow functions doesn't have a execution context of its own.
The 'this' inside the Arrow Function points to the parent's execution context

*/

"use strict";

this.brand = "BMW";
let model = "Gran Tourismo";

let car = {
  brand: "Rolls Royce",
  model: "Phantom",
  detail: () => {
    console.log(
      `The car's brand is ${this.brand} and the model is ${this.model}`
    );
  },
};

car.detail();
