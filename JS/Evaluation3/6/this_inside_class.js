/*
Question:

How does “this” works inside the Class method with an example?

-----

Explanation:

The 'this' keyword inside the class instance method points to the object instance.
The 'this' keyword inside the class static method points to the class itself.

*/

"use strict";

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start = () => {
    console.log(`Started the ${this.brand} ${this.model} car`);
  };

  static honk = (obj) => {
    console.log(`${obj.brand} ${obj.model} car Honked`);
  };

  static stop = () => {
    console.log(`Stopped the car ${this}`);
  };
}

let car1 = new Car("BMW", "Gran Tourismo");
let car2 = new Car("Benz", "Maybach");

car1.start();

Car.honk(car1);

car2.start();

Car.honk(car2);

Car.stop();
