/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
let str1= "yash";
let str2= "hyas";
function isAnagram(str1, str2) {
    if(str1.length!= str2.length) return false;
    for(let alphabet of str1){
       let alphabetSearch= str2.search(alphabet);
       if(alphabetSearch===-1) return false;
    }
    for(let alphabet of str2){
       let alphabetSearch= str1.search(alphabet);
       if(alphabetSearch===-1) return false;
    }
    return true;
}

console.log(isAnagram(str1,str2));