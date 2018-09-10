"use strict"
class Animal {
  constructor(classification, num_legs, food_type, superPower) {
    this.classification = classification
    this.numLegs = num_legs
    this.foodType = food_type
    this.superPower = superPower
  }

}

class Lion extends Animal{
  constructor (classification, num_legs, food_type, habitate, superPower) {
    super(classification, num_legs, food_type, superPower)
    this.habitate = habitate
  }
}

class Eagle extends Animal{
  constructor (classification, num_legs, food_type, has_wings, superPower) {
    super(classification, num_legs, food_type, superPower)
    this.hasWings = has_wings
  }
}

class Shark extends Animal{
  constructor (classification, num_legs, food_type, speed, superPower) {
    super(classification, num_legs, food_type, superPower)
    this.speed = speed
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
const superPower = new SuperPower()

const lion = new Lion('mammal', 4, 'carnivore', 'africa', superPower)
const eagle = new Eagle('aves', 2, 'carnivore', true, superPower)
const shark = new Shark('fish', 0, 'carnivore', '75 Km/h', superPower)
console.log(lion);
console.log(eagle);
console.log(shark);



lion.superPower.superStrength();
eagle.superPower.superIQ();
shark.superPower.fireBreather();

