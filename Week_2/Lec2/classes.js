class Rectangle{
    constructor(length, breadth, color){
        this.length= length;
        this.breadth= breadth;
        this.color= color;
    }

    area(){
        return this.length * this.breadth;
    }

    paint(){
        return this.color
    }
}

let rect = new Rectangle(7,5,"yellow");
const requiredArea = rect.area();
const requiredPaint = rect.paint();

console.log(requiredArea);
console.log(requiredPaint);