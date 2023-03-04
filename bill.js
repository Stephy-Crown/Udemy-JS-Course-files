// const billValue = 275;
// const tipOne = 0.15 * billValue; //15% of billValue
// const tipTwo = 0.2 * billValue; //15% of billValue

// const tip =
//   billValue >= 50 && billValue <= 300
//     ? console.log(
//         `Your billValue is ${billValue} and your tip was ${tipOne}, and the total value is ${
//           billValue + tipOne
//         } `
//       )
//     : console.log(
//         `Your billValue is ${billValue} and your tip was ${tipTwo}, and the total value is ${
//           billValue + tipTwo
//         } `
//       );

// CORRECTION
const billValue = 275;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `Your billValue is ${billValue} and your tip was ${tipValue}, and the total value is ${
    billValue + tipValue
  } `
);

// console.log(first); //cl +ENTER
