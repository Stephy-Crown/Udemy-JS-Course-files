// For loop keeps running while the condition is true
// LOOPING FORWARD
// if rep is less than or equal to 10::THis is the condition
for (let rep = 1; rep <= 10; rep++) {
  // console.log("lift weight repitition🏋️‍♂️");
  // To make this dynamic and see how this happens
  console.log(`lift weight repitition🏋️‍♂️ ${rep} times`);
}

// LOOPING BACKWARDS OVER AN ARRAY
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// We will be looping from the back::at index 4...to index 0
// 0, 1, ...4 FORWARD
// 4, 3, ....0 BACKWARD

// Creating for loop for that
// jonas.length-1 ::5-1=4(last element in an array) then decrease each itertaion by -1, this continues till iot reached 0 and the condition reaches till 0

for (let i = jonas.length - 1; i >= 0; i--) {
  // jonas[i]::jonas[5]...jonas[0]
  console.log(i, jonas[i]);
}

//LOOP INSIDE A LOOP:::: for loop in a for loop
// exercise <= 3
for (let exercise = 1; exercise < 4; exercise++) {
  // jonas[i]::jonas[5]...jonas[0]
  console.log(`---Starting Exercise--${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    // const element = array[rep];
    console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}🏋️‍♂️`);
  }
}
