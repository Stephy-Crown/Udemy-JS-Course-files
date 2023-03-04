// ARROW FUNCTIONS ARE BASICALLY USED AS FUNCTION EXPRESSIONS

const calAge = (birthyear) => {
  return 2037 - birthyear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  // const age = 2037 - birthYear;
  const age = calAge(birthYear);
  const retirement = 65 - age;

  //use an if statement to specify when the person has already retired
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`); //It works here
    return retirement; //this RETURN STATEMENT exits the code; any thing under this wont be displayed as this return staement exits the function after its done
    // console.log(`${firstName} retires in ${retirement} years`); //this is not even reached.ALT+ UP KEY TO MOVE UP
  } else {
    return -1; //Its a good pratice that when you input a number as a parameter you should return it as number and vice versa for strings:::-1 is like a standard
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1998, "Steph"));
console.log(yearsUntilRetirement(1970, "Jonas"));

console.log();
