const { bumps } = bumpCounter();

function bumpCounter() {
	var counter = 0;

	function addBump() {
		counter += 1;
	};

	function getBumps() {
		return counter;
	};

	return {
    	addBump,
    	getBumps
  	};
};

const { combo } = createAnimal();

function createAnimal(animalType) {

	function createcombination(deadlyDevice) {
		return {
			animalType,
			deadlyDevice
		};
	};

	return createcombination
};

var sharkCreator = createAnimal("Shark");

var sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam');

var sharkWithFrickinCannon = createAnimal('Shark')('Cannon');