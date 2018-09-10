"use strict"
class Animal {
    constructor(num_legs = 2, is_warm_blooded = true) {
        this.num_legs = num_legs;
        this.is_warm_blooded = is_warm_blooded;
    }
}


class SuperPower {
    constructor() {
    }
    
    use_laser_vision() {
        console.log("Szzzzuuuuuuuit!!!");
    }

    be_invisible() {
        console.log("Puff,, You can't see me..");
    }
}

class Frog extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded);
        this.superPower = new SuperPower();
    }
}

class Bat extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded);
        this.superPower = new SuperPower();
    }
}

class Chicken extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded);
        this.superPower = new SuperPower();
    }
}

let hewan = new Animal();
console.log(hewan); 
console.log("=================================================\n");

let ayamJago = new Chicken();
console.log(ayamJago.num_legs);
console.log(ayamJago.is_warm_blooded);
console.log("\n");

let kodok = new Frog(4, false);
console.log(kodok.num_legs);
console.log(kodok.is_warm_blooded); 
console.log("=================================================\n");

let kalong = new Bat();
kalong.superPower.be_invisible(); 