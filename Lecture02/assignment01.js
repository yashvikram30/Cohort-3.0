// Assignment #1
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

let findSum = (num1, num2) => {
    return num1+ num2;
}

let canVote = (age) => {
    return (age>18) ? true: false;
}

console.log(findSum(1,45));
console.log(canVote(45));