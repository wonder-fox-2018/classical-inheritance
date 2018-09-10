"use strict"
class Animal{
    constructor(legs, bloodType, skill){
        this.num_legs = legs
        this.is_warm_blooded = bloodType
        this.superPower = skill
    }
   
}

class Frog extends Animal{

}
class Bat extends Animal{

}
class Chimpnazee extends Animal{

}
class Fox extends Animal{

}
class Chicken extends Animal{

}

class SuperPower{
    use_laser_vision(){
        console.log ('I can See Youuuu~~~!!!!')
    }
    be_invisible(){
        console.log ('Can you find me? hihihihi')
    }
}

const skill = new SuperPower()
const frog = new Frog(4,false, skill)
// console.log(frog)
frog.superPower.be_invisible()


const fox = new Fox(4, true, skill)
fox.superPower.use_laser_vision()
