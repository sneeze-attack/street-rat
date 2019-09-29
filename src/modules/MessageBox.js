export default class MessageBox {
	constructor() {
    this.lineOneText = '';
    this.lineTwoText = '';
    this.lineThreeText = '';
    this.lineFourText = '';
    this.lineFiveText = '';
    this.lineSixText = '';
    this.lineSevenText = '';
	}
  updateBox(alert) {
    this.lineSevenText = this.lineSixText;
    this.lineSixText = this.lineFiveText;
    this.lineFiveText = this.lineFourText;
    this.lineFourText = this.lineThreeText;
    this.lineThreeText = this.lineTwoText;
    this.lineTwoText = this.lineOneText;
    this.lineOneText = alert;
    this.lineOne.setText(this.lineOneText);
    this.lineTwo.setText(this.lineTwoText);
    this.lineThree.setText(this.lineThreeText);
    this.lineFour.setText(this.lineFourText);
    this.lineFive.setText(this.lineFiveText);
    this.lineSix.setText(this.lineSixText);
    this.lineSeven.setText(this.lineSevenText);
  }
}
