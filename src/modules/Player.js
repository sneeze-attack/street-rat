export default class Player {
	constructor() {
		this.name = null;
		this.gender = null;
		this.portrait = null;
		this.strength = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.constitution = 10;
		this.points = 100;
		this.hp = 10;
		this.will = 10;
		this.perception = 10;
		this.fp = 10;
		this.fpMax = 10;
		this.carry = 20;
		this.speed = 5;
		this.move = 5;
		this.credits = 0;
		this.dodge = 8;

		this.lastAction = '';

		// use 24h clock, will add option to change to 12h clock later
		// start game at 8am
		this.hour = 8;
    this.day = 1;
		// set to 10 - allows resting for long periods to recover more sleep stat
		// sleep for at least 6 hours, get +2 to sleep stat
		// 8 hours = (8 + 2) = 10 sleep stat or a full nights rest
		this.sleep = 10;
		this.statusEffects = [];
		// tracks whether has been told of Tiredness status effect in game.messageBox
		this.tiredWarned = false;

		// Fatigue
		// tracks whether has been told of Fatigued status effect in game.messageBox
		this.fatiguedWarned = false;
		this.fatiguedStrLoss = 0;
		this.fatiguedMoveLoss = 0;
		this.fatiguedDodgeLoss = 0;

		//skills

		// level of Panhandle skill
		this.panhandle = 0;
		// Effective score of Panhandle skill
		this.panhandleScore = 6;

	}

	addStatusEffect(status) {
		let index = this.statusEffects.findIndex(x => x==status);
		// if status does not already exist in list, add it
		if (index === -1) {
			this.statusEffects.push(status);
		};
	}

	updateTime(hoursSpent) {
    this.hour = this.hour + hoursSpent;
		// if over 24 hours, proceed to next day
    if (this.hour >= 24) {
      this.hour = this.hour - 24;
      this.day++
    };
		// multiply by 0.625 - this allows 16 hours of awake before tired
		// 16 * 0.625 = 10 = total sleep stat
		this.sleep = this.sleep - (hoursSpent * 0.625);
	}

	calculateDodge() {
		// dodge = speed + 3, rounded down
		this.dodge = Math.floor(this.speed + 3);
	}

	playerRest(hoursSpent) {
		// advance time
		this.hour = this.hour + hoursSpent;
		// if over 24 hours, proceed to next day
		if (this.hour >= 24) {
			this.hour = this.hour - 24;
			this.day++
		};

		// if player sleeps 6 consecutive hours or more, +2 bonus
		// this equates to a full 8 hours sleep giving + 10 sleep stat
		if (hoursSpent >= 6) {
			this.sleep = this.sleep + hoursSpent + 2;
		} else {
			this.sleep = this.sleep + hoursSpent;
		};

		// Oversleeping does nothing
		if (this.sleep > 10) {
			this.sleep = 10;
		};



		if (this.sleep > 0) {
			let index = this.statusEffects.findIndex(x => x=='Tired');
			// remove Tired status effect if found in statusEffects list
			if (index >= 0) {
					let removeIt = this.statusEffects.splice(index,1);
					// Allow displaying Tired warning message again
					this.tiredWarned = false;
			};
			// do not exceed player's max FP
			if (this.fp < this.fpMax) {
				// recover FP if sleeping and not tired, 1 per hour
				this.fp += hoursSpent;
				if (this.fp > this.fpMax) {
					this.fp = this.fpMax;
				}
				this.isPlayerFatigued();
			};
		};
	}



	isPlayerTired() {
		// if sleep stat is equal to or less than 0, add Tired status effect
		// if sleep stat is greater than 0, remove Tired status effect
		if (this.sleep <= 0) {
			this.addStatusEffect('Tired');
			// Every 4 extra hours the player is awake, lose 1 FP, cumulative
			// example, first 1-3 hours of being Tired, lose nothing
			// next 4-7 hours of no sleep, lose 1 FP per turn, and so on
			let cumulativeTired = Math.ceil(this.sleep * 0.25);
			this.fp += cumulativeTired;
			this.isPlayerFatigued();
		} else if (this.sleep > 0) {
			let index = this.statusEffects.findIndex(x => x=='Tired');
			// remove Tired status effect if found in statusEffects list
			if (index >= 0) {
					let removeIt = this.statusEffects.splice(index,1);
					// Allow displaying Tired warning message again
					this.tiredWarned = false;
			};
		};
	}

	isPlayerFatigued() {

		//First check and see if the player is already fatigued
		let checkifFatigued = this.statusEffects.findIndex(x => x=='Fatigued');
		if (checkifFatigued >= 0) {
			// if fatigued, check to see if it can be removed
			if (this.fp >= (this.fpMax / 3)) {
				// remove Fatigued status effect
				let removeIt = this.statusEffects.splice(checkifFatigued,1);
				// Allow displaying Fatigued warning message again
				this.fatiguedWarned = false;

				// When fatigued status effect is removed, regain lost stats
				this.strength = this.strength + this.fatiguedStrLoss;
				this.move = this.move + this.fatiguedMoveLoss;
				this.dodge = this.dodge + this.fatiguedDodgeLoss;

				this.fatiguedStrLoss = 0;
				this.fatiguedMoveLoss = 0;
				this.fatiguedDodgeLoss = 0;
			};
		// if not fatigued, check to see if player should be
		// if less than 1/3 of total FP is left, obtain Fatigued status effect
		} else if (this.fp < (this.fpMax / 3)) {
			this.addStatusEffect('Fatigued');
			// When fatigued, halve strength, move, and dodge. May add INT, PER,
			// and/or Will later
			this.fatiguedStrLoss = Math.floor(this.strength / 2);
			this.fatiguedMoveLoss = Math.floor(this.move / 2);
			this.fatiguedDodgeLoss = Math.floor(this.dodge / 2);

			this.strength = this.strength - this.fatiguedStrLoss;
			this.move = this.move - this.fatiguedMoveLoss;
			this.dodge = this.dodge - this.fatiguedDodgeLoss;
		};

	}

	calculatePanhandleScore() {
		if (this.panhandle === 0) {
			this.panhandleScore = this.intelligence + this.panhandle - 4;
		} else {
			this.panhandleScore = this.intelligence + this.panhandle - 1;
		};
	}

}
