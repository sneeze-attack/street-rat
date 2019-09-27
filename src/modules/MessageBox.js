export default class MessageBox {
	constructor() {
    this.lineOneText = 'Test Text: Line 1';
    this.lineTwoText = 'Test Text: Line 2';
    this.lineThreeText = 'Test Text: Line 3';
    this.lineFourText = 'Test Text: Line 4';
    this.lineFiveText = 'Test Text: Line 5';
    this.lineSixText = 'Test Text: Line 6';
    this.lineSevenText = 'Test Text: Line 7';
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
