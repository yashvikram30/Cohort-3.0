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
    let reqAns;
    for( let i=0; i<arr.length; i++){
        if(arr[i].gender==="male" && arr[i].age>18){
            reqAns.push(arr[i]);
        }
    }
    
    return reqAns;
}

const ans = requiredFun(arrOfObjects);
console.log(ans);