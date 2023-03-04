// This is to add the array challenge file
//1. Create a fn
const calcTip = (billValue) => {
  // const bill = 100;
  const tipValue =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  console.log(
    `Your billValue is ${billValue} and your tipValue was ${tipValue}, and the total value is ${
      billValue + tipValue
    } `
  );
  return tipValue;
};

// To get the returned value of the function
console.log(calcTip(100));
// OR ALTERNATIVELY capturing the returned value in a variable
const tipValue = calcTip(100);
console.log(tipValue);

//2. Create an array containing the test data:125,555 and 44
const bills = [125, 555, 44];

// 3.  Create an array "tips" contsinig the tipvalue for each bill, calculated from thr fn created in exercise 1
const tipOne = calcTip(bills[0]);
const tipTwo = calcTip(bills[1]);
// for the last element in the array
const tipThree = calcTip(bills[bills.length - 1]);

const tips = [tipOne, tipTwo, tipThree];
// Altenatively
const tipss = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips, tipss);

//4. BONUS: Create an array "total" containig the total values, so the  bill + tip
const total = [bills[0] + tipOne, bills[1] + tipTwo, bills[2] + tipThree];
console.log(total);
