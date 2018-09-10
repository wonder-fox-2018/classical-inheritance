"use strict"

class Animal {
    constructor(name,type,leg,blood){
        this.name = name
        this.type = type
        this.leg = leg
        this.blood_type = blood
    }
}

class Crocodile extends Animal {
    stealth(){
        return 'crocodile stealth attack!'
    }
}

class Cow extends Animal {
    moo(){
        return 'cow goes mooooooo...'
    }
    milk(){
        return 'cow produce milk...'
    }
}

class Jellyfish extends Animal {
    constructor(name,type,leg,blood,tentacles){
        super(name,type,leg,blood);
        this.tentacles = tentacles
    }
    sting(){
        return 'watch out, the sting is painful!'
    }
}

var crocodile = new Crocodile('Big Croc','Reptile','4','Cold Blooded')
console.log(crocodile)
var cow = new Cow('Cow','Mamals','4','Warm Blooded')
console.log(cow)
var jellyfish = new Jellyfish('Jellyfish','Invertebrata','0','Blood?','15')
console.log(jellyfish)
