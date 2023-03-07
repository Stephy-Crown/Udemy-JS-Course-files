// JS object tutorial

// Create an obj with ppties
const John = {
  fullName: "John Smith",
  mass: 78,
  height: 1.69,

  // Create a method
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const Michael = {
  fullName: "Michael Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

// Michael.BMI OR Michael.calcBMI()
console.log(John.calcBMI(), Michael.calcBMI(), Michael.BMI);

// From this John's BMI is greater than Micheal's BMI

// Conditional statement
if (John.calcBMI() > Michael.BMI) {
  console.log(
    `${John.fullName}'s ${John.calcBMI()} BMI is higher than ${
      Michael.fullName
    }'s ${Michael.calcBMI()}`
  );
} else if (Michael.calcBMI() > John.BMI) {
  console.log(
    `${Michael.fullName}'s ${Michael.calcBMI()} BMI is higher than ${
      John.fullName
    }'s ${John.calcBMI()}`
  );
}
