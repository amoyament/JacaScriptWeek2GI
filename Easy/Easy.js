// Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."
//First, define the array
let students = [
  //Input three objects with a last name, first name, and age. I will use my family
  { firstName: 'Clayton', lastName: 'Trotter', age: 28 },
  { firstName: 'Aubrey', lastName: 'Moya-Mendez Trotter', age: 27 },
  { firstName: 'Everette', lastName: 'Trotter', age: 2 },
];

//Console log the array and each of the students to make sure the objects can be called upon.
//Comment this out so it doesn't junk up the console
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students);

//Create/define the greeting with the first name, last name and age of each student.
let greetingStudent1 = `Hello my name is ${students[0].firstName} ${students[0].lastName} and I am ${students[0].age} years old.`;
let greetingStudent2 = `Hello my name is ${students[1].firstName} ${students[1].lastName} and I am ${students[1].age} years old.`;
let greetingStudent3 = `Hello my name is ${students[2].firstName} ${students[2].lastName} and I am ${students[2].age} years old.`;

//Now, log the greeting for student 2
console.log(greetingStudent2);
//Document.write the greeting for it to show on the browser.
document.write(greetingStudent2);
//These greetings can be swapped out for each student
