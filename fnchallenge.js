"use strict";
// Arrow fn that cal the average of 3 scores

// Test Data 1
const calAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
let avgScoreDolphins = console.log(calAverage(44, 23, 71));
let avgScoreKoalas = console.log(calAverage(65, 54, 49));

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};
checkWinner(avgScoreDolphins, avgScoreKoalas);

// Test Data 2
// Reassigning the values
avgScoreDolphins = calAverage(85, 54, 41);
avgScoreKoalas = calAverage(23, 34, 27);

checkWinner(avgScoreDolphins, avgScoreKoalas);
