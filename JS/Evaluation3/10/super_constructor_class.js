/*
Question:

Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?

-----

Explanation:

The 'super' keyword is used to access the object's parent class methods and constructors
The 'constructor' keyword is used to create a object instance and initialise the object instance's values

*/

"use strict";

class Animal {
  constructor(type) {
    this.type = type;
  }

  eat = () => {
    console.log("Animal is eating");
  };

  sleep = () => {
    console.log("Animal is sleeping");
  };
}

class Dog extends Animal {
  constructor(breed, age, type) {
    super(type);
    this.breed = breed;
    this.age = age;
  }

  bark = () => {
    console.log("Dog is barking");
  };

  eat = () => {
    console.log("Dog is eating");
  };
}

let scobby = new Dog("Great Dane", 2, "Domestic");

scobby.bark();

scobby.eat();

scobby.sleep();
