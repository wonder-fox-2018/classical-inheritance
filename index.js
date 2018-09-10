"use strict"
class Binatang {
  constructor() {
    this.num_legs = 4 // ssign
    this.suara = null
    this.mata = 2
  }

  speak(){
    return this.suara
  }

  look(){
    return this.mata
  }
}

class Frog extends Binatang{
  constructor() {
      super()
      this.suara = "fffrrrrrrrooooggg"
  }
}
class Chicken extends Binatang {
  constructor() {
    super()
    this.num_legs = 2 // reassign
    this.suara = "mmmmmuuuuuukkkkkmmmmiiiinnnn"
    this.superpower = new SuperPower()
  }

}

class Fox extends Binatang {
  constructor() {
    super()
    this.num_legs = 2

  }
}
class SuperPower {

  use_laser_vision(){
    return " punya kekuatan lebih"
  }

  be_invisible(){

  }
}
// let frog = new Frog()
// let superpower = new SuperPower()
let chicken = new Chicken()
console.log(chicken.superpower.use_laser_vision())
// let fox = new Fox()
// console.log(frog)
// console.log(chicken)
// console.log(fox.speak())
