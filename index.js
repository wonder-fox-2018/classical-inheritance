"use strict"

class Animal {
	constructor() {
		this.is_vertebrate = 'yes';
		this.is_warm_blooded = 'yes';
	}

	breath() {
		console.log('Fyuuuh!');
	}

	doIdioticThings() {
		console.log('Pardon me..');
	}
}

class SuperPower {
	useLaserVision() {
		console.log('Cyclops reborn!');
	}

	beInvisible() {
		console.log("It's not a prank, mate. I'm really invisible now.");
	}

	callRobin() {
		console.log('Wait, where is batman?');
	}

	detectGhostlyActivity() {
		console.log("I wish I'd neven seen that");
	}
}

class Crocodile extends Animal {
	constructor() {
		super();
		this.superPower = new SuperPower();
	}

	suddenlyJumpAtPeople() {
		console.log('That is definitely my food!');
	}
}

class Bat extends Animal {
	constructor() {
		super();
		this.superPower = new SuperPower();
	}

	detectPreyInDarkness() {
		console.log('Come closer, food.')
	}
}

class Dog extends Animal {
	constructor(breed) {
		super();
		this.breed = breed;
		this.superPower = new SuperPower();
	}

	suddenlyBarkAtPeople() {
		console.log("Listen, listen, I'm barking at you for absolutely no reason");
	}
}

class Cat extends Animal {
	constructor(breed) {
		super();
		this.breed = breed;
		this.superPower = new SuperPower();
	}

	suddenlyFreeze() {
		console.log('Orzzz...');
	}
}


// TEST CASES

var crocodile = new Crocodile();
// Checks if Crocodile inherits attribute from Animal Class
console.log('Vertabrate?', crocodile.is_vertebrate);
console.log('Warm Blooded?', crocodile.is_warm_blooded);
crocodile.breath();
//Checks if Crocodile can use it's own method even if it already inherits Animal methods
crocodile.suddenlyJumpAtPeople();


var cat = new Cat('Scottish Fold');
// Checks if Cat can add another attribute apart from the Animal Class inheritance
console.log(cat.breed);
// Composition. Checks if Cat can use the instance of SuperPower Class as it's own constructor attribute
cat.superPower.useLaserVision();