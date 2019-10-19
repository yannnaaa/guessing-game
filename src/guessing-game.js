class GuessingGame {
    constructor(min, max) {
	this.min = min;
	this.max = max;
        this.result = 0;
    }

    setRange(min, max) {
	this.min = min;
	this.max = max;
    }

    guess() {
        this.result = this.min + Math.ceil((this.max-this.min)/2);
	console.log(this.result);
	return this.result;
    }

    lower() {
	this.max = this.result;
    }

    greater() {
	this.min = this.result;
    }
}

module.exports = GuessingGame;
