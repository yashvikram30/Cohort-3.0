interface User{
    name: string;
    age: number;
    address : {
        city ?: string;     //optional field
        country ?: string;  //optional field
        pincode : number;
    };
}

let user: User = {
    name : "yash",
    age: 14,
    address: {
        city: "allahabad",
        country : "india",
        pincode: 202000
    }
}

function isLegal2(person: User) : boolean{
    if(person.age>18)   return true;
    else return false;
}

const validity:boolean = isLegal2(user);
if(validity){
    console.log("Yes the person can vote")
}
else{
    console.log("No the person is still not eligible")
}