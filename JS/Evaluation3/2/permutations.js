/*
Question:

How would you create all permutations of a string?

-----

Explanation:

The permutations of a string can be created using the loop recursion

*/

"use strict";

function isInputString(input) {
  return typeof input === "string";
}

function stringPermutations(input) {
  if (input.length < 2) {
    return input;
  }

  let permutationsArray = [];
  for (let iter = 0; iter < input.length; iter++) {
    let currentCharacter = input[iter];
    let inputResidue =
      input.slice(0, iter) + input.slice(iter + 1, input.length);
    let residuePermutations = stringPermutations(inputResidue);
    for (let element of residuePermutations) {
      permutationsArray.push(currentCharacter + element);
    }
  }
  return permutationsArray;
}

function createStringPermutations(input) {
  if (isInputString(input)) {
    if (input != "") {
      return stringPermutations(input);
    } else {
      return "Input shouldn't be a empty string";
    }
  } else {
    return "Input isn't a string, Input:" + input;
  }
}

console.log(createStringPermutations("cat"));
console.log(createStringPermutations("work"));
console.log(createStringPermutations(3));
console.log(createStringPermutations(""));
console.log(createStringPermutations());
console.log(createStringPermutations([1, 2, 3]));
