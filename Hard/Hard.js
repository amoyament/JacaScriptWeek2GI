// HARD: Given the information below for Tom and Jerry.
// Tom - 	height:  9in   	mass: 8 g--- In meters and kilograms: 0.2286m, 0.008kg
// Jerry - 	height: 10in 	mass: 45 g--- In meters and kilograms: 0.254m, 0.045kg
// Compare the BMI (Body Mass Index) of Tom & Jerry using this formula below: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

// First we need to convert our variables to the units of measurement in the formula
// Tom - 	height:  9in   	mass: 8 g--- In meters and kilograms: 0.2286m, 0.008kg
// Jerry - 	height: 10in 	mass: 45 g--- In meters and kilograms: 0.254m, 0.045kg
let massT = 0.008;
let massJ = 0.045;
let heightT = 0.2286;
let heightJ = 0.254;

// Next we need to create a variable of the BMIs using the formula
let bmiT = massT / heightT ** 2;
let bmiJ = massJ / heightJ ** 2;

//Console.log the BMIs to check the formulas are working
console.log(bmiT, bmiJ);

// Now we will create a Boolean variable containing information about whether Tom has a higher BMI than Jerry
let HigherBMIT = bmiT > bmiJ;

// Now we will print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
console.log(`Is Tom's BMI higher than Jerry's? ${HigherBMIT}`);
document.write(`Is Tom's BMI higher than Jerry's? ${HigherBMIT}`);

/*
//This can also be done using an array with objects and a function to utilize DRY methodology
let people = [
  //Input three objects with a last name, first name, and age. I will use my family
  { firstName: "Tom", height: 0.2286, mass: 0.008 },
  { firstName: "Jerry", height: 0.254, mass: 0.045 },
];
//Create a function using the formula
//use x as the mass and y as the height
let bmi = function (mass, height) {
  return mass / height ** 2;
};

//Now console log it using the people's values to endure the functionis working properly. (people[0].height) for the first person's height
// console.log(bmi(people[0].mass, people[0].height));

//Now we need to create a boolean that will return true if Tom's bmi is hight and false if Tom's bmi is lower
let HigherBMIT =
  bmi(people[0].mass, people[0].height) > bmi(people[1].mass, people[1].height);

//Now we will log that to the console and display it on the html page
console.log(
  `Is ${people[0].firstName}'s BMI higher than ${people[1].firstName}'s?: ${HigherBMIT}`
);
document.write(
  `Is ${people[0].firstName}'s BMI higher than ${people[1].firstName}'s?: ${HigherBMIT}`
);

*/
