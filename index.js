"use strict"

class Animal {
    constructor(numLegs, isWarmBlooded) {
        this.numLegs = numLegs;
        this.isWarmBlooded = isWarmBlooded; 
    }

    fly() {
        return "I'm flying"
    }
}


class Chicken extends Animal {
    constructor(numLegs, isWarmBlooded, wing) {
        super(numLegs, isWarmBlooded);
        this.wing = wing;
        this.superPower = new SuperPower();
    }
}

class SuperPower {
    use_laser_vision() {
        return 'lasseeerrr'
    }

    be_invisible() {
        return 'ga keliatannn'
    }
}


let binatang = new Animal(2,5);
console.log(binatang);
console.log(binatang.fly());



let ayam = new Chicken(3,6, 2);
console.log(ayam);
console.log(ayam.fly());
console.log(ayam.superPower.be_invisible());


