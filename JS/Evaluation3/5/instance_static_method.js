/*
Question:

Explain the Class instance method and static method with an example?

-----

Explanation:

The static method is unique to the class and the instance method is unique 
to the objects instantiated.
The class instance method can be invoked using the instianted object name whereas the 
static method can be invoked using the class name and we can pass the object as a parameter
to the static method.

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
    console.log(`Stopped the car`);
  };
}

let car1 = new Car("BMW", "Gran Tourismo");
let car2 = new Car("Benz", "Maybach");

car1.start();

Car.honk(car1);

car2.start();

Car.honk(car2);

Car.stop();
