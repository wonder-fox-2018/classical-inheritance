"use strict"

class Animals {
    constructor(tempatHidup,makanan,legs){
        this.tempatHidup = 'darat',
        this.makanan = 'sayuran',
        this.numLegs = 2,
        this.is_warm_blooded = 'yes'
        this.ilmu = new SuperPower()
    }
}

class Kodok extends Animals {
    constructor(tempatnya,makannya,legs){
        super()
        this.tempatHidup = tempatnya
        this.makanan = makannya
        this.numLegs = legs
        this.is_warm_blooded = 'no'
    }
}

class Kelelawar extends Animals {
    constructor(tempatnya,makannya,legs){
        super()
        this.tempatHidup = tempatnya
    }
}

class Simpanse extends Animals  {
    
    constructor(param){
        super()
        this.numLegs = param
        this.makanan = 'sayur'
        this.is_warm_blooded = 'no'
    }
}

class Rubah extends Animals {
    
}

class Ayam extends Animals {
    
}

class SuperPower {
    
    use_laser_vision(){
        return('ada sinar laser');
        
    }

    be_invisible(){
        return('bisa hilang');
        
    }
}

//buat objek kodok tapi properti tempat , makanan dan leg dirubah tidak mengikuti inheritance
let kodok = new Kodok('darat dan air','ular',4)
console.log(kodok);

//buat objek kelelawar tapi properti tempatnya dirubah tidak mengikuti inheritance
let kelelawar  = new Kelelawar('udara')
console.log(kelelawar);

//rubah properti leg
let simpanse  = new Simpanse(4)
console.log(simpanse);

//dapat proprti turunan / inheritance
let rubah  = new Rubah()
console.log(rubah);

//ayam menggunakan method dari instace class Super Power
let ayam  = new Ayam()
console.log(ayam.ilmu.use_laser_vision());
console.log(ayam.ilmu.be_invisible());







