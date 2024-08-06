// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let arr= [1,2,3,4,5];

let evenArray= (arr)=>{
    let myNewArray = arr.filter((num)=>{
        return num%2==0
    })
    return myNewArray;
}

console.log(evenArray(arr));