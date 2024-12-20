"use strict";
let user = {
    name: "yash",
    age: 14,
    address: {
        city: "allahabad",
        country: "india",
        pincode: 202000
    }
};
function isLegal2(person) {
    if (person.age > 18)
        return true;
    else
        return false;
}
const validity = isLegal2(user);
if (validity) {
    console.log("Yes the person can vote");
}
else {
    console.log("No the person is still not eligible");
}
