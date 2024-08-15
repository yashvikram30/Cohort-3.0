const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("c.txt", "utf-8", function (err, contents) {
  if(err!=null){
    console.log("there is some error in reading the file")
  }
  else{
    console.log(contents);
  }
  
});
