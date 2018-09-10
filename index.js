"use strict"

class Animals {
    constructor(){
      this._num_legs = 4
      this._respiratory = 'Lung'
    }

    get respiratory(){
        return this._respiratory
    }
}
//-----------------------------------

class Sapi extends Animals{

    speak(){
        return 'moooo'
    }
}
class Anjing extends Animals{
    speak(){
        return 'guk guk'
    }
}
class Cheetah extends Animals{

}
class Ular extends Animals {
    constructor(){
        super()
        this._num_legs = null
    }
}
class Spider extends Animals {
    constructor(superPower){
        super()
        this._num_legs = 8
        this._superPower = superPower
    }

    get superPower(){
        return this._superPower
    }
}
//----------------------------------
class SuperPower {
    constructor(){
        
    }
    run(){
        return 'fast'
    }
    venom(){
        return 'deadlyvenom'
    }
    web(){
        return 'web'
    }
}

var superPower = new SuperPower()

var tarantula = new Spider(superPower)
var bulldog = new Anjing()
console.log(tarantula.superPower.web())
console.log(bulldog.speak())
console.log(bulldog.respiratory)