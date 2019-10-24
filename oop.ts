interface IUser {
    name: String
    age: number
}

let customer: IUser = {
    name: "VUong dai ca",
    age: 30
}
console.log(customer.name)


class Shape {
    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    toString(): String{
        return `(x: ${this.x},y: ${this.y})`
    }
}

interface IArea {
    area():number;

}

class Rect extends Shape implements IArea{
    constructor(x:number, y: number, public witdh:number, public height: number){
        super(x,y)
    }
    area(): number {
        return this.witdh*this.height;
    }

}
const rect=new Rect(5,5,10,20);
console.log(rect.area())
console.log(rect.toString())
