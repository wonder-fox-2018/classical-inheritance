"use strict"
class Animal {
  constructor(classification, num_legs, food_type) {
    this.classification = classification
    this.numLegs = num_legs
    this.foodType = food_type
  }

}

class Lion extends Animal{
  constructor (classification, num_legs, food_type, habitate) {
    super(classification, num_legs, food_type)
    this.habitate = habitate
    this.superPower = new SuperPower()
  }
}

class Eagle extends Animal{
  constructor (classification, num_legs, food_type, has_wings) {
    super(classification, num_legs, food_type)
    this.hasWings = has_wings
    this.superPower = new SuperPower()
  }
}

class Shark extends Animal{
  constructor (classification, num_legs, food_type, speed) {
    super(classification, num_legs, food_type)
    this.speed = speed
    this.superPower = new SuperPower()
  }
}

class SuperPower {
  superStrength(){
    console.log('Argghhhh... Boommmm!!')
  }

  fireBreather () {
    console.log('Fireeeeeee.....!!')
  }

  superIQ () {
    console.log('hmmph... too easy..');
    
  }
}

const lion = new Lion('mammal', 4, 'carnivore', 'africa')
const eagle = new Eagle('aves', 2, 'carnivore', true)
const shark = new Shark('fish', 0, 'carnivore', '75 Km/h')
console.log(lion);
console.log(eagle);
console.log(shark);

lion.superPower.superStrength();
eagle.superPower.superIQ();
shark.superPower.fireBreather();

