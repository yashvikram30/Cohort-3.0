"use strict";
// interfaces are essentially same as interfaces in java
class Manager {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet() {
        console.log(`Moshi moshi, ${this.name}-san!`);
    }
}
let m1 = new Manager("yash", 21);
m1.greet();
