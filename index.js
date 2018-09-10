"use strict"
class Binatang {
    constructor(jenisMakanan, penutupTubuh, skill){
        this.jenisMakanan = jenisMakanan
        this.penutupTubuh = penutupTubuh
        this.superPower = skill
    }
   
}

class Badak extends Binatang{
    constructor(jenisMakanan, penutupTubuh, skill){
        super(jenisMakanan, penutupTubuh, skill)
    }
}

// class Onta extends Binatang{
//     constructor(jenisMakanan, penutupTubuh, skill){
//         super(jenisMakanan, penutupTubuh, skill)
//     }
// }

class KuraKura extends Binatang{
    constructor(jenisMakanan, penutupTubuh, skill){
        super(jenisMakanan, penutupTubuh, skill)
    }
}

class Ikan extends Binatang{
    constructor(jenisMakanan, penutupTubuh, skill){
        super(jenisMakanan, penutupTubuh, skill)
    }
}

class Cacing extends Binatang{
    constructor(jenisMakanan, penutupTubuh, skill){
        super(jenisMakanan, penutupTubuh, skill)
    }
}

class SuperPower{
    teleportasi(){
        console.log ('Berpindah tempat dalam sekejap!')
    }
    kemampuanPenyembuh(){
        console.log ('Pulihkan kesakitan diri sendiri')
    }
    manipulasiWaktu(){
        console.log ('Melambatkan waktu untuk menjauh dari predator')
    }
}

let badak = new Binatang('Daun', 'kulit tebal', 'menyeruduk' )
// const Onta = new Binatang('Daun', 'berbulu', 'menahan haus' )
// console.log(Ikan.SuperPower.kemampuanPenyembuh())
//console.log(badak.superPower.teleportasi())

console.log(badak)