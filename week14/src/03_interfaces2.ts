// interfaces are essentially same as interfaces in java

// difference between interfaces and type-:

// interfaces: can be implemented in classes unlike types
// types: can perform union and intersection, unlike interfaces

interface Person{
    name: string,
    age : number,
    greet():void
}

class Manager implements Person{
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name=n;
        this.age=a;
    }

    greet(): void {
        console.log(`Moshi moshi, ${this.name}-san!`);
    }

}

let m1= new Manager("yash",21);
m1.greet();
