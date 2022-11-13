class Animal {
    constructor(boolean,string,int){
        this.name = string
        this.age = int
        this.isMammal = boolean
    }
}

class Rabbit extends Animal {
    constructor(name,age){
        super(true,name,age)
    }
    eat(){
        return `${this.name} sedang makan`
    }
}

class Eagle extends Animal {
    constructor(name,age){
        super(false,name,age)
    }
    fly(){
        return `${this.name} sedang terbang`
    }
}

const myRabbit = new Rabbit('labi',2)
const myEagle = new Eagle('elo',4)
console.log(myRabbit.isMammal);
console.log(myEagle.isMammal);
console.log(myEagle.fly());
console.log(myRabbit.eat());
// console.log(myRabbit,myRabbit.eat());
// console.log(myEagle,myEagle.fly());