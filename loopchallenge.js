const calcTip = (billValue) => {
  // const bill = 100;
  const tipValue =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  // console.log(
  //   `Your billValue is ${billValue} and your tipValue was ${tipValue}, and the total value is ${
  //     billValue + tipValue
  //   } `
  // );
  return tipValue;
};

// Create bills array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Empty arrays
const tips = [];
const totals = [];

// Using the calcTip fn to calculate tips and the total value(bill+tip)  for every bill value in the array

// Using The FOR LOOP and the calTip function
for (let index = 0; index < bills.length; index++) {
  // To calculat the tip for each element in the array
  // Using CONST::Because for ech iteration, it produces a different value, so we aren't changing anything:::In each iteration  a new tip variable is created, we aren't mutatimg or changing it,,so const is used and not let
  const tip = calcTip(bills[index]);
  tips.push(tip);
  totals.push(tip + bills[index]);
}

console.log(bills, tips, totals);

// BONUS
//  Function that calculates the average of all numbers in a given array
const calAverage = function (arr) {
  // SUM strats at 0
  let sum = 0;
  // Loop through array with FOR LOOP
  for (let i = 0; i < arr.length; i++) {
    // adding the current value of the SUM variable::This way, by the nd of the loop, all the values of the array will be added together
    // sum=sum+arr[i]
    sum += arr[i];
  }
  console.log(sum);
  // Divide sum by the number of elements in the array
  return sum / arr.length;
};
calAverage([2, 3, 7]);

// To get the returned value
console.log(calAverage([2, 3, 7]));
// OR storing in avariable and consoling it

// To calculate the average total value of ALL BILLS AND TIPS
console.log(calAverage(totals));
console.log(calAverage(bills));
console.log(calAverage(tips));
