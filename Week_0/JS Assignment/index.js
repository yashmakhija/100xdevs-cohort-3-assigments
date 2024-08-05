// -----------syntax_js Assigment -------------------

/*
Create a variable for each of the following: your favorite color, your height in centimeters, 
and whether you like pizza. Use appropriate variable declarations (let, const, or var). 
Try logging it using console.log
*/

let color = "Blue";
const height = 5.7;
var favFood = true;

if (favFood == true) console.log("I Like Pizza");
else console.log("I don't like Pizza");

/*
Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/

function sum(a, b) {
  const total = a + b;
  console.log("Sum of " + a + " & " + b + " = " + total);
}

let value = sum(2, 3);

/*
Write a function called canVote that returns true or false if the age of a user is > 18
*/
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let checkVote = canVote(17.5);
console.log("Do you can Vote true or false? " + checkVote);

/*
Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

function checkEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("Does your number is Even or Odd? " + checkEvenOrOdd(11));

/*
Write a function called sum that finds the sum from 1 to a number
*/

function totalSum(num) {
  let totalValue = 0;

  for (let i = 1; i <= num; i++) {
    totalValue += i;
  }
  return "Your Sum of 1 to " + num + " is " + totalValue;
}

console.log(totalSum(5));

// -----------complex_types_Javascript Assigment -------------------

/*
Write a function that takes a user as an input and greets them with their name and age
*/

let user = {
  fName: "Yash",
  age: 19,
};

console.log("Namaste " + user.fName + ", You are " + user.age + " Year Old");

/*
Write a function that takes a new object as input which has name , age  and gender and 
greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
*/

let listUser = [
  {
    fname: "Yash",
    age: 19,
    gender: "male",
  },
  {
    fname: "Harkiart",
    age: 26,
    gender: "male",
  },
  {
    fname: "Tina",
    age: 21,
    gender: "Female",
  },
];

function newGreet(person) {
  for (let i = 0; i < person.length; i++) {
    if (person[i].gender == "male") {
      console.log(
        "Hello Mr." + person[i].fname + ", your age is " + person[i].age
      );
    } else {
      console.log(
        "Hello Mrs." + person[i].fname + ", your age is " + person[i].age
      );
    }
  }
}

newGreet(listUser);

function listAge(person) {
  for (let i = 0; i <= person.length; i++) {
    if (person[i].age >= 18) {
      return "Your age is " + person[i].age + " & You can Vote!!";
    } else return "Your age is " + person[i].age + " & You can't Vote!!";
  }
}

console.log(listAge(listUser));

/*
Write a function that takes an array of numbers as input, 
and returns a new array with only even values. Read about filter in JS
*/

function evenArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let array = [1, 2, 3, 4, 5, 6];
console.log("Your new even Array is " + evenArr(array));

/*
Write a function that takes an array of users as inputs and 
returns only the users who are more than 18 years old
*/

const users = [
  {
    name: "Harkirat",
    age: 21,
    gender: "male",
  },
  {
    name: "Yash",
    age: 19,
    gender: "male",
  },
  {
    name: "Kamlabai",
    age: 17,
    gender: "Female",
  },
  {
    name: "Priya",
    age: 19,
    gender: "Female",
  },
];

function userGreater(arr) {
  console.log("All Array of whose age is greater than 18");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(userGreater(users));

/*
Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male
*/

function userMale(arr) {
  console.log("All Array of Male whose age is greater than 18");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].gender == "male") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(userMale(users));
