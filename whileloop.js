// Similarity between FOR LOOP and WHILE LOOP
// FOR LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lift weight repitition🏋️‍♂️ ${rep} times`);
// }

// For the WHILE LOOP: we can only specify the condition
//  It is called a while loop because it will run WHILE the CONDITION is true

// We do the other parts outside
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE LOOP:lift weight repitition🏋️‍♂️ ${rep} times`);
  rep++;
}

// DICE BASED ON A RANDOM VALUE::Keep running WHILE the roll dice is different from 6;
// So we dont actually know how many times the loop should run::SO WE DONT NEED A COUNTER VARIABLE::this is the use case of a WHILE LOOP

// Math.random()::Create number between 0 & 1 usually a decimal number::
// tTo make it whole number we use  Math.trunc
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(Math.random());
// console.log(dice);s

// We want to run the roll the dice until the condition is 6::As soon as the value is 6, THE WHILE LOOP will stop
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`You just rolled a ${dice}..so Loop ends`);
  }
}
