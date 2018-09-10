"use strict"
class Animal {
    constructor(num_legs, is_warm_blooded) {
        this._num_legs = num_legs
        this._is_warm_blooded = is_warm_blooded
        this.superPower = new SuperPower()
    }
}

class Frog extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Bat extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Chimpanzee extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Fox extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class Chicken extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
    }
}

class SuperPower {
    use_laser_vision() {
        return 'Use Laser Vision'
    }

    be_invisible() {
        return 'Be Invisible'
    }
}

let frog = new Frog(4, true)
let bat = new Bat(2, true)
let chimpanzee = new Chimpanzee(2, false)
let chicken = new Chicken(2, false)

console.log(frog)
console.log(bat)
console.log(chimpanzee)
console.log(chicken)

console.log('Chimpanzee Power : ' + chimpanzee.superPower.be_invisible())