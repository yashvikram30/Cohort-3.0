/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let inputArray= [2,556,34,236,346,23];

function findLargestElement(numbers) {
    let max= numbers[0];
    for(let el of numbers){
        if(el>max)  max=el;
    }
    return max;
}

const answer= findLargestElement(inputArray);
console.log(answer);