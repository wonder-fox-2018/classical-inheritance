"use strict"
class Animal {
    constructor(){
       this.legs = 4;
       this.color = 'white';
       this.blood = 'true';
       
    }

    eat(){
        console.log('Animal is eating')
    }

    drink(){
        console.log('Animal is drinking')
    }
}

class Frog extends Animal{
    constructor(legs, isFurry, power){
        super()
        this.legs = legs
        this.isFurry = isFurry;
         //overiding props
        this.color = 'green';
        this.blood = false
        this.power = power

    }
    //overiding method
    eat() {
        console.log('the frog is eating')
    }
    drink() {
        console.log('the frog is drinking')
    }
    
}

class SuperPower{   
    use_laser_vision(){
        return 'I have a great vision'
    }

    be_invisible(){
        return 'I can be disappear'
    }
}

class Bat extends Animal{
    
}

class Chimpanzee extends Animal{
    
}

class Fox extends Animal{
    
}

class Chicken extends Animal{
    
}

var power = new SuperPower
// console.log(power.use_laser_vision())

var frog = new Frog( 2, false, power);
var chicken = new Chicken
console.log(frog.power.use_laser_vision())
console.log(frog)
console.log(chicken.color)