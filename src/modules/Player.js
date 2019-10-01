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
		this.carry = 20;
		this.speed = 5;
		this.move = 5;
		this.credits = 0;
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
			// recover FP if sleeping and not tired, 1 per hour
			this.fp += 1;
		};
	}

	isPlayerTired() {
		// if sleep stat is equal to or less than 0, add Tired status effect
		// if sleep stat is greater than 0, remove Tired status effect
		if (this.sleep <= 0) {
			this.addStatusEffect('Tired');
			// Every 4 extra hours the player is awake, lose 1 FP, cumulative
			// example, first 1-3 hours of being Tired, lose nothing
			// next 4-7 hours of no sleep, lose 2 FP per turn, and so on
			let cumulativeTired = Math.ceil(this.sleep * 0.25);
			this.fp += cumulativeTired;
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

}
