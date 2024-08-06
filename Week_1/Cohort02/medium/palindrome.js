/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
const myVar = "saumya"
function isPalindrome(str) {
    const size= str.length;
    const newStr = str.toLowerCase();
    for(let i=0; i<size/2; i++){
        if(newStr[i]!=newStr[size-i-1]){
          return false;
        }
    }
    return true;
}

console.log(isPalindrome(myVar))
