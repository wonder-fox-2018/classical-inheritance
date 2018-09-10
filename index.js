"use strict"

class Animal{
    constructor(name,num_legs){
        this.name=name;
        this.num_legs=num_legs;
    }
}
class Frog extends Animal{
    constructor(name,num_legs,color){
        super(name,num_legs);
        this.color=color;
        this.superpower=new Superpower(true,false);
    }
    is_warm_blooded(){
        return true;
    }
}

class Bat extends Animal{
    constructor(name,num_legs,color){
        super(name,num_legs);
        this.color=color;
        this.superpower=new Superpower(true,true);
    }
    is_warm_blooded(){
        return false;
    }
}

class Fox extends Animal{
    constructor(name,num_legs,color){
        super(name,num_legs);
        this.color=color;
        this.superpower=new Superpower(true,true);
    }
    is_warm_blooded(){
        return false;
    }
}


class Superpower{
    constructor(userlaser,invisible){
        this.uselaser=userlaser;
        this.invisible=invisible;
    }
    use_laser_vision(){
        return this.uselaser;
    }
    be_invisible(){
        return this.invisible;
    }
}
var flog1= new Frog("frog",4,"blue");
console.log(flog1);
console.log(flog1.superpower.use_laser_vision());