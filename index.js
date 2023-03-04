const markMass = 78;
const markHeight = 1.69;

const markBMI = markMass / markHeight ** 2;

const markBM = markMass / (markHeight * markHeight);
console.log(markBMI);
console.log(markBM);

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;
const johnBM = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);
console.log(johnBM);

console.log(markBMI, johnBMI);

//TWO for comparison operator
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//CHALLENGE 2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log("Helloo");
}
