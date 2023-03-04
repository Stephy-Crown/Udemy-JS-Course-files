// CALLING FUNCTIONS INSIDE ANOTHER FUNCTION
//Lets create a machine hat cuts our fruits into multple pieces befor e processing it:::It takes in a parameter of fruit and then return the fruit being cut in 4 pieces::so if apple is 4, it returns this in 16pieces

// const cutFruitPieces=function(){

// }
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  // calling the cutFruitPieces fn inside this function
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //
  console.log(apples, oranges);
  // const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} oranges`;

  return juice;
}

fruitProcessor(5, 0);
console.log(fruitProcessor(5, 3)); //When we call this function it assigns the value of 5 and 3 to the apples and orange empty spaces which in turn will the argument of the cutFruitPieces function which is the same as the fruit parameter which is multiplieed by 4 and then we store thesse in variables of applePieces so as to capture the value and use it in our return string value of the funnction fruitProcessor.
