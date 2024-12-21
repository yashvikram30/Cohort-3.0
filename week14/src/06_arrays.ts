//eg:1  Given an array of positive integers as input, return the maximum value in the array

function findMaximum (a: number[]): number{
    let max = -1000000000000000;
    for(let i =0 ;i< a.length; i++){
        if(a[i]>max)    max= a[i];
    }
    return max;
}

const arr: number[] = [1,456,3,-34,5];
console.log(findMaximum(arr));

//eg:2  Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface user{
    name: string,
    age : number
}

// array containing the users
const arr2: user[] = [{name: "yash",age: 20},{name: "ayush",age: 20},{name: "adi",age: 30},{name: "astitva",age: 18}]

// functions to filter out the users
function isLegal3(a: user[]): user[]{
    let legalUsers = [];
    for(let i=0; i<a.length; i++){
        if(a[i].age>18) legalUsers.push(a[i]);
    }
    return legalUsers;
}

console.log(isLegal3(arr2));