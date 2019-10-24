import config from '../../index';

export default class Roulette extends Phaser.GameObjects.Group {
  // Intended for use only in RouletteScene

	// Roulette requires scene which is usually 'this'
	// gamblingSkillLevel = game.self.gamblingScore
	constructor(scene, gamblingSkillLevel) {
    // add black box
    let createBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setInteractive().setDepth(1);
    // options
    let optionsCog = scene.add.sprite(((config.scale.width * 122) / 128), ((config.scale.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive().setDepth(1).setDepth(1);

		let backTextBox = scene.add.rectangle(((config.scale.width * 2) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
		let backButton = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1).setFontFamily('"DejaVu Sans Mono"');

		let doubleZeroButton = scene.add.text(((config.scale.width * 2) / 128), ((config.scale.height * 1) / 128), ' 00 ').setColor('#FFFFFF').setBackgroundColor('#008000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(49).setDepth(1);
		let zeroButton = scene.add.text(((config.scale.width * 2) / 128), ((config.scale.height * 10.9) / 128), '  0 ').setColor('#FFFFFF').setBackgroundColor('#008000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(49).setDepth(1);

		let threeButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 1.3) / 128), '  3 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twoButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 7.7) / 128), '  2 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let oneButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 14.1) / 128), '  1 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let sixButton = scene.add.text(((config.scale.width * 20.3) / 128), ((config.scale.height * 1.3) / 128), '  6 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let fiveButton = scene.add.text(((config.scale.width * 20.3) / 128), ((config.scale.height * 7.7) / 128), '  5 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let fourButton = scene.add.text(((config.scale.width * 20.3) / 128), ((config.scale.height * 14.1) / 128), '  4 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let nineButton = scene.add.text(((config.scale.width * 27.6) / 128), ((config.scale.height * 1.3) / 128), '  9 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let eightButton = scene.add.text(((config.scale.width * 27.6) / 128), ((config.scale.height * 7.7) / 128), '  8 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let sevenButton = scene.add.text(((config.scale.width * 27.6) / 128), ((config.scale.height * 14.1) / 128), '  7 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let twelveButton = scene.add.text(((config.scale.width * 34.9) / 128), ((config.scale.height * 1.3) / 128), ' 12 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let elevenButton = scene.add.text(((config.scale.width * 34.9) / 128), ((config.scale.height * 7.7) / 128), ' 11 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let tenButton = scene.add.text(((config.scale.width * 34.9) / 128), ((config.scale.height * 14.1) / 128), ' 10 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let fifteenButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 1.3) / 128), ' 15 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let fourteenButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 7.7) / 128), ' 14 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let thirteenButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 14.1) / 128), ' 13 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let eighteenButton = scene.add.text(((config.scale.width * 49.5) / 128), ((config.scale.height * 1.3) / 128), ' 18 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let seventeenButton = scene.add.text(((config.scale.width * 49.5) / 128), ((config.scale.height * 7.7) / 128), ' 17 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let sixteenButton = scene.add.text(((config.scale.width * 49.5) / 128), ((config.scale.height * 14.1) / 128), ' 16 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let twentyoneButton = scene.add.text(((config.scale.width * 56.8) / 128), ((config.scale.height * 1.3) / 128), ' 21 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentyButton = scene.add.text(((config.scale.width * 56.8) / 128), ((config.scale.height * 7.7) / 128), ' 20 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let nineteenButton = scene.add.text(((config.scale.width * 56.8) / 128), ((config.scale.height * 14.1) / 128), ' 19 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let twentyfourButton = scene.add.text(((config.scale.width * 64.1) / 128), ((config.scale.height * 1.3) / 128), ' 24 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentythreeButton = scene.add.text(((config.scale.width * 64.1) / 128), ((config.scale.height * 7.7) / 128), ' 23 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentytwoButton = scene.add.text(((config.scale.width * 64.1) / 128), ((config.scale.height * 14.1) / 128), ' 22 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let twentysevenButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 1.3) / 128), ' 27 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentysixButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 7.7) / 128), ' 26 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentyfiveButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 14.1) / 128), ' 25 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let thirtyButton = scene.add.text(((config.scale.width * 78.7) / 128), ((config.scale.height * 1.3) / 128), ' 30 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentynineButton = scene.add.text(((config.scale.width * 78.7) / 128), ((config.scale.height * 7.7) / 128), ' 29 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let twentyeightButton = scene.add.text(((config.scale.width * 78.7) / 128), ((config.scale.height * 14.1) / 128), ' 28 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let thirtythreeButton = scene.add.text(((config.scale.width * 86) / 128), ((config.scale.height * 1.3) / 128), ' 33 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let thirtytwoButton = scene.add.text(((config.scale.width * 86) / 128), ((config.scale.height * 7.7) / 128), ' 32 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let thirtyoneButton = scene.add.text(((config.scale.width * 86) / 128), ((config.scale.height * 14.1) / 128), ' 31 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let thirtysixButton = scene.add.text(((config.scale.width * 93.3) / 128), ((config.scale.height * 1.3) / 128), ' 36 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let thirtyfiveButton = scene.add.text(((config.scale.width * 93.3) / 128), ((config.scale.height * 7.7) / 128), ' 35 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let thirtyfourButton = scene.add.text(((config.scale.width * 93.3) / 128), ((config.scale.height * 14.1) / 128), ' 34 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let topTwoToOneButton = scene.add.text(((config.scale.width * 100.7) / 128), ((config.scale.height * 1.3) / 128), ' 2:1 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let middleTwoToOneButton = scene.add.text(((config.scale.width * 100.7) / 128), ((config.scale.height * 7.7) / 128), ' 2:1 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let bottomTwoToOneButton = scene.add.text(((config.scale.width * 100.7) / 128), ((config.scale.height * 14.1) / 128), ' 2:1 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let firstTwelveButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 20.5) / 128), '     1st 12     ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let secondTwelveButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 20.5) / 128), '     2nd 12     ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let thirdTwelveButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 20.5) / 128), '     3rd 12     ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let oneToEighteenButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 26.9) / 128), ' 1 to 18 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let evenButton = scene.add.text(((config.scale.width * 29.4) / 128), ((config.scale.height * 26.9) / 128), ' EVEN  ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let redButton = scene.add.text(((config.scale.width * 42) / 128), ((config.scale.height * 26.9) / 128), '   RED  ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let blackButton = scene.add.text(((config.scale.width * 58) / 128), ((config.scale.height * 26.9) / 128), ' BLACK  ').setColor('#FFFFFF').setBackgroundColor('#000000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let oddButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 26.9) / 128), '  ODD  ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
		let nineteenToThirtysixButton = scene.add.text(((config.scale.width * 84.1) / 128), ((config.scale.height * 26.9) / 128), ' 19 to 36').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

		let placeBetBoxBorder = scene.add.rectangle(((config.scale.width * 6) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 35) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(1);
		let placeBetBox = scene.add.rectangle(((config.scale.width * 6.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 34) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(1);
		let placeBetText = scene.add.text(((config.scale.width * 7) / 128), ((config.scale.height * 46.9) / 128), 'Place bet').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(1);

		let playerCreditsText = scene.add.text(((config.scale.width * 82) / 128), ((config.scale.height * 116) / 128), 'Credits: ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(1);

		// bet amounts
		// 1, 5, 25, 50, 100, 500

		let oneCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
		let oneCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let oneCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 46.9) / 128), '1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let fiveCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
		let fiveCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let fiveCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 61.9) / 128), '5').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let twentyfiveCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
		let twentyfiveCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let twentyfiveCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 76.9) / 128), '25').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let fiftyCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
		let fiftyCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let fiftyCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 46.9) / 128), '50').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let hundredCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
		let hundredCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let hundredCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 61.9) / 128), '100').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let fivehundredCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
		let fivehundredCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let fivehundredCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 76.9) / 128), '500').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);


		super(scene);
    this.optionsCog = optionsCog;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
		this.placeBetBoxBorder = placeBetBoxBorder;
		this.placeBetBox = placeBetBox;
		this.placeBetText = placeBetText;
		this.playerCreditsText = playerCreditsText;
		this.oneCreditBoxBorder = oneCreditBoxBorder;
		this.oneCreditBox = oneCreditBox;
		this.oneCreditText = oneCreditText;
		this.fiveCreditBoxBorder = fiveCreditBoxBorder;
		this.fiveCreditBox = fiveCreditBox;
		this.fiveCreditText = fiveCreditText;
		this.twentyfiveCreditBoxBorder = twentyfiveCreditBoxBorder;
		this.twentyfiveCreditBox = twentyfiveCreditBox;
		this.twentyfiveCreditText = twentyfiveCreditText;
		this.fiftyCreditBoxBorder = fiftyCreditBoxBorder;
		this.fiftyCreditBox = fiftyCreditBox;
		this.fiftyCreditText = fiftyCreditText;
		this.hundredCreditBoxBorder = hundredCreditBoxBorder;
		this.hundredCreditBox = hundredCreditBox;
		this.hundredCreditText = hundredCreditText;
		this.fivehundredCreditBoxBorder = fivehundredCreditBoxBorder;
		this.fivehundredCreditBox = fivehundredCreditBox;
		this.fivehundredCreditText = fivehundredCreditText;
	}

	pickBetAmount() {
		this.placeBetBoxBorder.setDepth(0);
		this.placeBetBox.setDepth(0);
		this.placeBetText.setDepth(0);
		this.oneCreditBoxBorder.setDepth(2);
		this.oneCreditBox.setDepth(2);
		this.oneCreditText.setDepth(2);
		this.fiveCreditBoxBorder.setDepth(2);
		this.fiveCreditBox.setDepth(2);
		this.fiveCreditText.setDepth(2);
		this.twentyfiveCreditBoxBorder.setDepth(2);
		this.twentyfiveCreditBox.setDepth(2);
		this.twentyfiveCreditText.setDepth(2);
		this.fiftyCreditBoxBorder.setDepth(2);
		this.fiftyCreditBox.setDepth(2);
		this.fiftyCreditText.setDepth(2);
		this.hundredCreditBoxBorder.setDepth(2);
		this.hundredCreditBox.setDepth(2);
		this.hundredCreditText.setDepth(2);
		this.fivehundredCreditBoxBorder.setDepth(2);
		this.fivehundredCreditBox.setDepth(2);
		this.fivehundredCreditText.setDepth(2);
	}

}
