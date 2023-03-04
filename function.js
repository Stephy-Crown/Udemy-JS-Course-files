//ACTIVATING STRICT MODE:To write secure codes in JS:::Avoid accidental errors and bugs:::creates visible errors that JS will fail slently and wont tell us

//strict mode string
"use strict";

function fruitProcessor(apples, oranges) {
  //Apples and oranges rep the input data of this function and will dget defined when the function is called.
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  //We can return this Juice::With the "return" keyword we can return any value we want from the function  and this value we returned can be used any where in our code.This juice will become the result of executing this function
  return juice;
}
//calling/ invoking /running fns
fruitProcessor(5, 0); //This is replaced by the result of the function
// The apples and oranges are emoyy values we need to fill. so we give them a specific values::they are now getting defined when we call this function.These are called ARGUMENTS

// to get the actual value the result of calling this fruitProcessor function is the JUICE ::the result of this function we have to capture this value in a variable in order to use it, we store the result in a variable
// const appleJuice = fruitProcessor(5, 3);
// // we log the value to the console
// console.log(appleJuice);

// WE can also see the value without storing it to a variable.
console.log(fruitProcessor(5, 3));

//REUSING THE FUNCTION AND FIKLLING THE "APPLE" AND "ORANGE" EMPTY SPACES
const appleOrangeJuice = fruitProcessor(4, 5);
console.log(appleOrangeJuice);

//FUNCTION HELPS US ADHERE TO THE "DRY" PRINCIPLE:::DO NOT REPEAT YOURSELF

// JS BUILT IN FUNCTION
Number("23"); //converts string to a number, it takes "23" string as an argument and return a value with is 23 as a number

// To capture this we have to save it a variable
const num = Number("23");
console.log(num);
