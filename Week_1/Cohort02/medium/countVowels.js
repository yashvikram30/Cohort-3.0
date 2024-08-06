/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

let myName = 'yash';
function countVowels(str) {
    let vowelCount =0;
    for(let el of str){
      if(el==='a' || el==='e' ||el==='i' ||el==='o' ||el==='u' ||el==='A' ||el==='E' ||el==='I' ||el==='O' ||el==='U'){
        vowelCount++;
      }
    }
    return vowelCount;
}

console.log(countVowels(myName));