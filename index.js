"use strict"

class Animal {
    constructor (num_legs, is_warm_blooded, habitat) {
        this.num_legs = num_legs,
        this.is_warm_blooded = is_warm_blooded,
        this.habitat = habitat
    }
    is_warm_blooded() {
        var warmCold = this.is_warm_blooded
        if ( warmCold === 'warm') {
            console.log('Warm blooded')
            return this
        }
        else {
            console.log('Cold blooded')
            return this
        }
    }
    
}

class Bat extends Animal {
    constructor(num_legs, is_warm_blooded, habitat) {
        super(num_legs, is_warm_blooded, habitat);
    }
}

class Dog extends Animal{
    constructor(num_legs, is_warm_blooded, habitat) {
        super(num_legs, is_warm_blooded, habitat);
    }
}

class Cat extends Animal{
    constructor(num_legs, is_warm_blooded, habitat) {
        super(num_legs, is_warm_blooded, habitat);
    }
}

class Snake extends Animal {
    constructor(num_legs, is_warm_blooded, habitat) {
        super(num_legs, is_warm_blooded, habitat);
    }
}

class SuperPower extends Animal {

}

// var animal = new Animal
const bat = new Bat ( 2, 'warm', 'tree')
const dog = new Dog (4, 'warm', 'ground')
const cat = new Cat (4, 'warm', 'ground')
const snake = new Snake (0, 'warm', 'ground')

console.log(bat)
console.log(dog)
console.log(cat)
console.log(snake)
