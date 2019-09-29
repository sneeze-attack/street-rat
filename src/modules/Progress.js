// time system

// use 24h clock, will add option to change to 12h clock later
export default class Progress {
	constructor() {
    //start game at 8am
    this.hour = 8;
    this.day = 1;
	}
  updateTime(hoursSpent) {
    this.hour = this.hour + hoursSpent;
    if (this.hour >= 24) {
      this.hour = this.hour - 24;
      this.day++
    };
  }
}
