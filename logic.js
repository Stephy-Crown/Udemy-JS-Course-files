// const teamDolphinsAverageScore = (96 + 108 + 89) / 3;
// const teamKoalasAverageScore = (88 + 91 + 110) / 3;
// if (teamDolphinsAverageScore > teamKoalasAverageScore) {
//   console.log(
//     `Team Dolphins with a score of ${teamDolphinsAverageScore} is the winner`
//   );
// } else {
//   console.log(
//     `Team Koalas with a score of ${teamKoalasAverageScore} is the winner`
//   );
// }

//

// BONUS 1
// const teamDolphinsAverageScore = (97 + 112 + 101) / 3;
// const teamKoalasAverageScore = (109 + 95 + 106) / 3;
// console.log(teamDolphinsAverageScore);
// console.log(teamKoalasAverageScore);
// if (
//   teamDolphinsAverageScore > teamKoalasAverageScore &&
//   teamDolphinsAverageScore >= 100
// ) {
//   console.log(
//     `Team Dolphins with a score of ${teamDolphinsAverageScore} is the winner and has a score with minimum of 100 points`
//   );
// } else if (
//   teamKoalasAverageScore > teamDolphinsAverageScore &&
//   teamKoalasAverageScore >= 100
// ) {
//   console.log(
//     `Team Koalas with a score of ${teamKoalasAverageScore} is the winner and has a score with minimum of 100 points`
//   );
// } else {
//   console.log("Both are winners");
// }

const teamDolphinsAverageScore = (97 + 112 + 101) / 3;
const teamKoalasAverageScore = (109 + 95 + 106) / 3;
console.log(teamDolphinsAverageScore);
console.log(teamKoalasAverageScore);
if (
  teamDolphinsAverageScore > teamKoalasAverageScore &&
  teamDolphinsAverageScore >= 100
) {
  console.log(
    `Team Dolphins with a score of ${teamDolphinsAverageScore} is the winner and has a score with minimum of 100 points`
  );
} else if (
  teamKoalasAverageScore > teamDolphinsAverageScore &&
  teamKoalasAverageScore >= 100
) {
  console.log(
    `Team Koalas with a score of ${teamKoalasAverageScore} is the winner and has a score with minimum of 100 points`
  );
} else if (
  teamDolphinsAverageScore === teamKoalasAverageScore &&
  teamDolphinsAverageScore >= 100 &&
  teamKoalasAverageScore >= 100
) {
  console.log("Both are winners");
} else {
  console.log("No one wills the trophy");
}
