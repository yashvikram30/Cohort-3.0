const fs = require("fs");

function readFilePromisified(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err!=null){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

readFilePromisified("b.txt")
.then((data)=>{
    console.log("File read successfully. The data is: ",data);
})
.catch((error)=>{
    console.log("There appears to be some error: ",error);
})