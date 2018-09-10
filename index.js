"use strict"

class Animal {
    constructor(){
        this.num_legs = 2
        this.is_warm_blooded = true
        this.mamalia = true
    }

}

class Frog extends Animal {
    constructor(superPower){
        super()
        this.num_legs = 4
        this.is_warm_blooded = false
        this.mamalia = false
        this.superPower = superPower
    }

}

class Bat extends Animal {
    constructor(){
        super()
        this.is_warm_blooded = false
    }

}

class Chimpanzee extends Animal {
    constructor(){
        super()
        this.num_legs = 4
    }
    
}   

class Fox extends Animal {
    constructor(superPower){
        super()
        this.num_legs = 4
        this.superPower = superPower
    }

}

class Chicken extends Animal {
    constructor(){
        super()
        this.num_legs = 2
    }

}

class SuperPower{
    constructor(){

    }
    use_laser_vision(){
        console.log('dengan laser vision aku akan memburumu di malam hari');   
    }
    be_invisible(){
        console.log('aku akan menghilang disaat waktu berburu');
    }
    satan_run(){
        console.log(`dengan kekuatan berlari, kalian tidak akan lolos`);
    }

}


let superPower = new SuperPower()

let frog = new Frog(superPower)
// console.log(frog);
let fox = new Fox(superPower)
// console.log(fox);

fox.superPower.satan_run()