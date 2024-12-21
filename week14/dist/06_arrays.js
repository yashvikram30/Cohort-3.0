"use strict";
//eg:1  Given an array of positive integers as input, return the maximum value in the array
function findMaximum(a) {
    let max = -1000000000000000;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max)
            max = a[i];
    }
    return max;
}
const arr = [1, 456, 3, -34, 5];
console.log(findMaximum(arr));
// array containing the users
const arr2 = [{ name: "yash", age: 20 }, { name: "ayush", age: 20 }, { name: "adi", age: 30 }, { name: "astitva", age: 18 }];
// functions to filter out the users
function isLegal3(a) {
    let legalUsers = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].age > 18)
            legalUsers.push(a[i]);
    }
    return legalUsers;
}
console.log(isLegal3(arr2));
