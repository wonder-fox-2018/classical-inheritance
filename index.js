"use strict"
class Animal{
    constructor(){
        this.blood='merah'
        this.mata='punya mata'
        this.berkembangBiak='bisa'
        this.SuperPower=new SuperPower()
    }
}
class SuperPower{
    use_laser_vision(){
        return "Tembak pake Laser,,, ciuuu,,ciuuu"
    }
    be_invisible(){
        return "tidak kelihatan! booom Auwwww"
    }
}
class BerkakiDua extends Animal{
    constructor(kaki,jenisDarah){
        super()
        this.kaki=kaki
        this.isWarmBloode=jenisDarah
    }
}
class BerkakiEmpat extends Animal{
    constructor(kaki,jenisDarah){
        super()
        this.kaki=kaki
        this.isWarmBloode=jenisDarah
    }
}
var fox=new BerkakiEmpat(4,"panas")
console.log(fox)
console.log(fox.SuperPower.use_laser_vision())
var ayam = new BerkakiDua(2,'dingin')
console.log(ayam.SuperPower.use_laser_vision())
