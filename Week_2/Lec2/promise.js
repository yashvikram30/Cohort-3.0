// function setTimeoutPromisified(duration){
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve, duration);
//     })
// }

// function callback(){
//     console.log("Yash");
// }

// setTimeoutPromisified(3000).then(callback);


const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve();   
    },3000)
})

promiseOne.then(function(){
    console.log("Promise is executed")
})