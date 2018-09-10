"use strict"

class Animal {
    constructor(name, numOfLegs, isWarmBlooded) {
        this.name = name;
        this.numOfLegs = numOfLegs;
        this.isWarmBlooded = isWarmBlooded;
    }

    makeSound() {
        console.log('......');
    }

    poop() {
        console.log(`${this.name} poops`);
    }
}

class FlyingAnimal extends Animal {
    constructor(name, numOfLegs, isWarmBlooded) {
        super(name, numOfLegs, isWarmBlooded);
    }

    fly() {
        console.log(`${this.name} flies........`);
    }
}

class Insect extends FlyingAnimal {
    constructor(name, numOfLegs) {
        super(name, numOfLegs, false);
    }

    makeSound() {
        console.log('BZZZZZZZZZZZZzzzzzzzzzZZZZZZZ');
    }
}

class QueenBee extends Insect {
    constructor(name) {
        super(name, 16, false);
        this.superPower = new SuperPower();
    }

    layEggs() {
        console.log(`${this.name} lays eggs`);
    }
}

class Bird extends FlyingAnimal {
    constructor() {

    }

    makeSound() {
        console.log('SQUAAAAAAAAAAAAAWK');
    }
}

class SuperPower {
    useLaserVision() {
        console.log('use LAZZZZZZZZZZZZZZZZZZZZZEEER');
    }
}

let superBee = new QueenBee('queen');

superBee.superPower.useLaserVision();
superBee.fly();
superBee.layEggs();
superBee.poop();