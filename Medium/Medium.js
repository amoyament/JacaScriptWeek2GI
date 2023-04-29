//Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

//First we need to create variables with which we can interact with the HTML elements
//Input box
let month = document.getElementById("month");
//Enter button
let button = document.getElementById("enter");
//Where we want the month name to display on HTML page
let result = document.getElementById("result");

// //Create a function that will display the month name of the number the user enters
// //Add event listener for user clicking the enter button
// button.addEventListener("click", function convertMonth() {
//   //Define monthe number by the input value of the input box (what the user entered)
//   let monthNum = month.value;
//   //Set each month to its number, but in " " so it will be a string like what the user inputs, A number without the " " will return an error
//   if (monthNum === "1") {
//     console.log("January");
//     //result.textContent so the content will display that page.
//     //If we use document.write, it will make the entire page white and only display the month name, everything else will disappear.
//     result.textContent = "January";
//     return "January";
//   } else if (monthNum === "2") {
//     console.log("February");
//     result.textContent = "February";
//     return "February";
//   } else if (monthNum === "3") {
//     console.log("March");
//     result.textContent = "March";
//     return "March";
//   } else if (monthNum === "4") {
//     console.log("April");
//     result.textContent = "April";
//     return "April";
//   } else if (monthNum === "5") {
//     console.log("May");
//     result.textContent = "May";
//     return "May";
//   } else if (monthNum === "6") {
//     console.log("June");
//     result.textContent = "June";
//     return "June";
//   } else if (monthNum === "7") {
//     console.log("July");
//     result.textContent = "July";
//     return "July";
//   } else if (monthNum === "8") {
//     console.log("August");
//     result.textContent = "August";
//     return "August";
//   } else if (monthNum === "9") {
//     console.log("September");
//     result.textContent = "September";
//     return "September";
//   } else if (monthNum === "10") {
//     console.log("October");
//     result.textContent = "October";
//     return "October";
//   } else if (monthNum === "11") {
//     console.log("November");
//     result.textContent = "November";
//     return "November";
//   } else if (monthNum === "12") {
//     console.log("December");
//     result.textContent = "December";
//     return "December";
//     //If anything but a number 1-12 is enetered the user will get this error
//   } else {
//     console.log(`I'm sorry, ${month.vaule} is not a valid month number`);
//     result.textContent = `I'm sorry, ${month.value} is not a valid month number`;
//     return `I'm sorry, ${month.value} is not a valid month number`;
//   }
// });

//This works but we want to make it DRY, and this code repeates a lot

//Create the function above, but with an array so that it will not repeate as much
//Add event listener for user clicking the enter button
button.addEventListener("click", function convertMonth() {
  //Define monthe number by the input value of the input box (what the user entered)
  let monthNum = month.value;
  //Create array of months that we can assign to each number
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (monthNum >= 1 && monthNum <= 12) {
    //Set numbers 1-12 to an assigned position in the array.
    //Start the array position at -1 so that the month number 1 will be equal to [0], the first position in the array
    console.log(monthNames[monthNum - 1]);
    result.textContent = monthNames[monthNum - 1];
    return monthNames[monthNum - 1];
    //If anything but a number 1-12 is enetered the user will get this error
  } else {
    console.log(`I'm sorry, ${month.value} is not a valid month number`);
    result.textContent = `I'm sorry, ${month.value} is not a valid month number`;
    return `I'm sorry, ${month.value} is not a valid month number`;
  }
});
