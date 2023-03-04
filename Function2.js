//FUNCTION DECLARATIONS & FUNCTION EXPRESSIONS

// FUNCTION DECLARATIONS

// Justs as in function.js what we did there was function declaration, we basically use the "function" keyword in FUNCTION DECLARATIONS

// DIFF::
// Function Declarations ca be called before they arae defined as shown below:This isnt really a good idea but can do it if necessary
console.log(calAge1(1991));

function calAge1(birthYear) {
  const age = 2037 - birthYear;
  // To take this value out of this function, we simply return it
  return age;
  // OR return 2037-birthYear;
}
// console.log(calAge1(1991));

// To capture the result we store in a variable::BETEER WAY

const age1 = calAge1(1991);
console.log(age1);

// FUNCTION EXPRESSIONS
// Here function is used but it is an expression and produces a value which we store in a variable:: doesnt have a name called "anonynmous function" : Rememeber an aexpresiion produces a value, so we use that value and store it into a variable:::calAge2 will then be the function::It then holds the value of the function
// This function block is a VALUE::NOTE::IN JS, FUNCTIONS ARE just VALUES and becoz it is avalue we can store it in avalue just as we store numbers and strings in variables

// DIFF::This is better as everything will be organised and structured
// You can call a function without defining it in Function declaration and this happens becoz of a 'HOISTING"
// const age2 = calAge2(1991);
const calAge2 = function (birthYear) {
  // "birthYear" parameter in this case is a local variable to each function, though this parameter bear the same name with ethe calAge1 paramaeter it is local to its specific function where is is decalared. BUT FOR CLARIFOICATION PURPIOSE ::I'D LOVE TO USE A DIFFERENT PARAMETER NAME::JUST NOTE THIS
  return 2037 - birthYear;
};

const age2 = calAge2(1991);
console.log(age2);

// DIFF BTE THEM
// We can call function Declaration before they area defined::scroll up

console.log(age1, age2);
