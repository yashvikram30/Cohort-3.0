"use strict";
// passing arguments as number and function also as number
function isLegal(age) {
    if (age < 18)
        return false;
    else
        return true;
}
// delayed call, takes a function
// fn -> fn name & ()-> stores expected arguments & void->return type of fn
function delayedCall(fn) {
    setTimeout(fn, 1000);
    // fn is called out after 1000ms
}
delayedCall(function () {
    console.log("hiiiiiiiiiiiiiiiiiiiiiii");
});
delayedCall(isLegal);
