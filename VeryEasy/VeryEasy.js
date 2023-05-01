// VERY EASY: Write a function named min that takes two arguments and returns their minimum.
//Create the variables

let num1 = 75;
let num2 = 5;

//Create a funtion named min that takes two peramaters (num1 and num 2)
let min = function (num1, num2) {
  //Create an if/else statement to comare the two numbers
  //If num one is less than num two, it is returned as the minimum
  if (num1 < num2) {
    return `The number ${num1} is less than the number ${num2}.`;
    //If num two is less than num one, it is returned as the minimum
  } else if (num1 > num2) {
    return `The number ${num2} is less than the number ${num1}.`;
    //If neither number is greater or lesser, than they are even
  } else {
    return `The numbers ${num1} and ${num2} are even.`;
  }
};

// Log the function to make sure it works
console.log(min(num1, num2));
// Added document.write to show in browser, but then has to add 'br' to make each document.write show on a new line, instead of it running all together
document.write(min(num1, num2), '<br>');

//This function can also be used with other numbers
console.log(min(93, 55));
document.write(min(93, 55), '<br>');

//This can also be written as an arrow function with ternary operators
let minA = (numA, numB) => {
  return numA < numB
    ? `The number ${numA} is less than the number ${numB}.`
    : numA > numB
    ? `The number ${numB} is less than the number ${numA}.`
    : `The numbers ${numA} and ${numB} are even.`;
};

console.log(minA(43, 66));
document.write(minA(43, 66), '<br>');

//If you want to have more than two numbers, you can write the numbers in an array
//First we need to store the numbers in an array
let nums = [-3, 13, 17, 15, 14, -9, 5];

//Now we will create a function named minA, so the program doesn't get confused by our two functions
let minB = function (nums) {
  //Set min to the first value in the array, then we will comapre it to the others
  let min = nums[0];
  //To compare each value to the next we will create a for loop and use the .length method to loop through the entire array
  for (let i = 0; i < nums.length; i++) {
    //Use an if statement to comare the numbers to see which is the lesser and set the lesser as the min
    if (nums[i] < min) min = nums[i];
  }
  return `${min} is the minimum number in this array.`;
};

console.log(minB(nums));
document.write(minB(nums), '<br>');
