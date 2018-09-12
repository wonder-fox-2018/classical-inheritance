"use strict"
class Binatang {
    constructor(jenisMakanan, penutupTubuh){
        this.jenisMakanan = jenisMakanan
        this.penutupTubuh = penutupTubuh
    }

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

class Badak extends Binatang{
    constructor(jenisMakanan, penutupTubuh, skill){
        super(jenisMakanan, penutupTubuh, skill)
        this.name='Badak'
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



let badak = new Badak('Daun', 'kulit tebal', 'menyeruduk' )
let cacing = new Binatang('Humus', 'kulit berlendir', 'mengorek tanah')
console.log(badak.teleportasi())

console.log(badak)