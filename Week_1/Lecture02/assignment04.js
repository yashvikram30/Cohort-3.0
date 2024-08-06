//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21).Also tell the user if they are legal to vote or not

let userData= {
    name: "yash",
    age: 20,
    gender: "male"
};

function greet(user){
    let greeting;
    if(gender==="male") greeting="Mr."
    else if(gender === "female")    greeting==="Mrs."
    else greeting === "Others"

    console.log(`${greeting} ${user.name}, your age is ${user.age}.`)
    if(age>18)  console.log("You are eligible to vote")
    else console.log("You are not eligible to vote")
}