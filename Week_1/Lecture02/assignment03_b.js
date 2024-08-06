// create a function that takes an input of array of objects and returns users that are male and age>18

// use push and filter

let arrOfObjects = [{
    name: "yash",
    age: 20,
    gender: "male"
},{
    name: "ayush",
    age: 38,
    gender: "male"
},{
    name: "saumya",
    age: 12,
    gender: "female"
}
]

let requiredFun = (arr) =>{
    let myNewArray= arr.filter((el)=>{
        return el.age> 18 && el.gender==="male"
    })
    return myNewArray;
}

const ans = requiredFun(arrOfObjects);
console.log(ans);
