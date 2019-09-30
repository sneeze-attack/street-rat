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
}
