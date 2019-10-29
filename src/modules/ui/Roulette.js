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

		let oneCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let oneCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let oneCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 46.9) / 128), '1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let fiveCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let fiveCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let fiveCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 61.9) / 128), '5').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let twentyfiveCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let twentyfiveCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let twentyfiveCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 76.9) / 128), '25').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let fiftyCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let fiftyCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let fiftyCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 46.9) / 128), '50').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let hundredCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let hundredCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let hundredCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 61.9) / 128), '100').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let fivehundredCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let fivehundredCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let fivehundredCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 76.9) / 128), '500').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

		let betAmount = 0;
		let betType = null;
		//let creditsTally = 0;
		let payout = 1;

		// bet types
		//
		// inside bets - left column
		//
		// straight up bet, 35 to 1, any single number
		let straightUpBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 36.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let straightUpBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 37) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let straightUpBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 36.9) / 128), 'Straight-Up: 35 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// split bet, 17 to 1, any two adjacent numbers
		let splitBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let splitBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let splitBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 46.9) / 128), 'Split: 17 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// street bet, 11 to 1, any three numbers in a row or 0 1 2, 0 00 2, 00 2 3
		let streetBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 56.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let streetBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 57) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let streetBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 56.9) / 128), 'Street: 11 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// corner bet, 8 to 1, any 4 numbers whose corners touch
		let cornerBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 66.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let cornerBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 67) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let cornerBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 66.9) / 128), 'Corner: 8 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// sucker bet, 6 to 1, 0 00 1 2 3
		let suckerBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let suckerBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let suckerBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 76.9) / 128), 'Sucker: 6 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// line bet, 5 to 1, two adjacent rows of numbers (6 total numbers)
		let lineBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 86.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let lineBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 87) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let lineBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 86.9) / 128), 'Line: 5 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		//
		// outside bets - right column
		//
		// column bet, 2 to 1, horizontal column of numbers not including 0 00
		let columnBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 36.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let columnBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 37) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let columnBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 36.9) / 128), 'Column: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// dozen bet, 2 to 1, 1-12 or 13-24 or 25-36
		let dozenBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let dozenBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let dozenBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 46.9) / 128), 'Dozen: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// color bet, 2 to 1, red or black
		let colorBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 56.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let colorBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 57) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let colorBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 56.9) / 128), 'Color: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// even/odd bet, 2 to 1
		let evenOddBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 66.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let evenOddBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 67) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let evenOddBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 66.9) / 128), 'Even/Odd: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		// low/high bet, 2 to 1, 1-18 or 19-36
		let lowHighBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let lowHighBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let lowHighBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 76.9) / 128), 'Low/High: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);

		// message pop-up box
		let messageBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 36.9) / 128), ((config.scale.width * 60) / 128), ((config.scale.height * 14) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let messageBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 37) / 128), ((config.scale.width * 59) / 128), ((config.scale.height * 13.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let messageTextLineOne = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 36.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		let messageTextLineTwo = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 43.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);

		let confirmBetBoxBorder = scene.add.rectangle(((config.scale.width * 43) / 128), ((config.scale.height * 113.9) / 128), ((config.scale.width * 32) / 128), ((config.scale.height * 11) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
		let confirmBetBox = scene.add.rectangle(((config.scale.width * 43.5) / 128), ((config.scale.height * 114) / 128), ((config.scale.width * 31) / 128), ((config.scale.height * 10.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
		let confirmBetText = scene.add.text(((config.scale.width * 44) / 128), ((config.scale.height * 113.9) / 128), 'Confirm Bet').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);

		let picksText = scene.add.text(((config.scale.width * 94) / 128), ((config.scale.height * 33.9) / 128), 'Picks').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(2);
		let picksBoxBorder = scene.add.rectangle(((config.scale.width * 93) / 128), ((config.scale.height * 43.9) / 128), ((config.scale.width * 32) / 128), ((config.scale.height * 51) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(2).setInteractive();
		let picksBox = scene.add.rectangle(((config.scale.width * 93.5) / 128), ((config.scale.height * 44) / 128), ((config.scale.width * 31) / 128), ((config.scale.height * 50.8) / 128), 0x000000).setOrigin(0, 0).setDepth(2).setInteractive();
		let picksListLineOne = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 44.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
		let picksListLineTwo = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 52.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);

		let payoutText = scene.add.text(((config.scale.width * 93.5) / 128), ((config.scale.height * 96.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
		let clickToContinueText = scene.add.text(((config.scale.width * 55.5) / 128), ((config.scale.height * 107) / 128), 'click to continue').setColor('#A9A9A9').setFontFamily('"DejaVu Sans Mono"').setFontSize(16).setDepth(0);

		// Results box
    let resultsShadeBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setDepth(0).setAlpha(0.5).setInteractive();
		let resultsBoxBorder = scene.add.rectangle(((config.scale.width * 30) / 128), ((config.scale.height * 14) / 128), ((config.scale.width * 68) / 128), ((config.scale.height * 98) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
    let resultsBox = scene.add.rectangle(((config.scale.width * 30.25) / 128), ((config.scale.height * 14.5) / 128), ((config.scale.width * 67.5) / 128), ((config.scale.height * 97) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
		let rollTitle = scene.add.text(((config.scale.width * 42) / 128), ((config.scale.height * 17) / 128), 'Roulette Results').setColor('#0033FF').setFontFamily('"DejaVu Sans Mono"').setFontSize(50).setDepth(0);
		let scoreText = scene.add.text(((config.scale.width * 43) / 128), ((config.scale.height * 37) / 128), 'The winning number is: ').setColor('#33FF00').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
		let scoreNumber = scene.add.text(((config.scale.width * 57) / 128), ((config.scale.height * 50) / 128), '').setColor('#33FF00').setFontFamily('"DejaVu Sans Mono"').setFontSize(80).setDepth(0);
		let yourBetType = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 73) / 128), 'Your bet type:').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
		let yourNumbers = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 80) / 128), 'Your numbers:').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
		let yourPayout = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 87) / 128), 'Your payout:').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
		let yourMessage = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 95) / 128), '         Lose').setColor('#A00000').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(0);

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
		this.betAmount = betAmount;
		//this.creditsTally = creditsTally;
		this.doubleZeroButton = doubleZeroButton;
		this.zeroButton = zeroButton;
		this.oneButton = oneButton;
		this.twoButton = twoButton;
		this.threeButton = threeButton;
		this.fourButton = fourButton;
		this.fiveButton = fiveButton;
		this.sixButton = sixButton;
		this.sevenButton = sevenButton;
		this.eightButton = eightButton;
		this.nineButton = nineButton;
		this.tenButton = tenButton;
		this.elevenButton = elevenButton;
		this.twelveButton = twelveButton;
		this.thirteenButton = thirteenButton;
		this.fourteenButton = fourteenButton;
		this.fifteenButton = fifteenButton;
		this.sixteenButton = sixteenButton;
		this.seventeenButton = seventeenButton;
		this.eighteenButton = eighteenButton;
		this.nineteenButton = nineteenButton;
		this.twentyButton = twentyButton;
		this.twentyoneButton = twentyoneButton;
		this.twentytwoButton = twentytwoButton;
		this.twentythreeButton = twentythreeButton;
		this.twentyfourButton = twentyfourButton;
		this.twentyfiveButton = twentyfiveButton;
		this.twentysixButton = twentysixButton;
		this.twentysevenButton = twentysevenButton;
		this.twentyeightButton = twentyeightButton;
		this.twentynineButton = twentynineButton;
		this.thirtyButton = thirtyButton;
		this.thirtyoneButton = thirtyoneButton;
		this.thirtytwoButton = thirtytwoButton;
		this.thirtythreeButton = thirtythreeButton;
		this.thirtyfourButton = thirtyfourButton;
		this.thirtyfiveButton = thirtyfiveButton;
		this.thirtysixButton = thirtysixButton;
		this.payout = payout;
		this.straightUpBetBoxBorder = straightUpBetBoxBorder;
		this.straightUpBetBox = straightUpBetBox;
		this.straightUpBetText = straightUpBetText;
		this.splitBetBoxBorder = splitBetBoxBorder;
		this.splitBetBox = splitBetBox;
		this.splitBetText = splitBetText;
		this.streetBetBoxBorder = streetBetBoxBorder;
		this.streetBetBox = streetBetBox;
		this.streetBetText = streetBetText;
		this.cornerBetBoxBorder = cornerBetBoxBorder;
		this.cornerBetBox = cornerBetBox;
		this.cornerBetText = cornerBetText;
		this.suckerBetBoxBorder = suckerBetBoxBorder;
		this.suckerBetBox = suckerBetBox;
		this.suckerBetText = suckerBetText;
		this.lineBetBoxBorder = lineBetBoxBorder;
		this.lineBetBox = lineBetBox;
		this.lineBetText = lineBetText;
		this.columnBetBoxBorder = columnBetBoxBorder;
		this.columnBetBox = columnBetBox;
		this.columnBetText = columnBetText;
		this.dozenBetBoxBorder = dozenBetBoxBorder;
		this.dozenBetBox = dozenBetBox;
		this.dozenBetText = dozenBetText;
		this.colorBetBoxBorder = colorBetBoxBorder;
		this.colorBetBox = colorBetBox;
		this.colorBetText = colorBetText;
		this.evenOddBetBoxBorder = evenOddBetBoxBorder;
		this.evenOddBetBox = evenOddBetBox;
		this.evenOddBetText = evenOddBetText;
		this.lowHighBetBoxBorder = lowHighBetBoxBorder;
		this.lowHighBetBox = lowHighBetBox;
		this.lowHighBetText = lowHighBetText;
		this.messageBoxBorder = messageBoxBorder;
		this.messageBox = messageBox;
		this.messageTextLineOne = messageTextLineOne;
		this.messageTextLineTwo = messageTextLineTwo;
		this.picks = [];
		this.confirmBetBoxBorder = confirmBetBoxBorder;
		this.confirmBetBox = confirmBetBox;
		this.confirmBetText = confirmBetText;
		this.picksBoxBorder = picksBoxBorder;
		this.picksBox = picksBox;
		this.picksText = picksText;
		this.picksListLineOne = picksListLineOne;
		this.picksListLineTwo = picksListLineTwo;
		this.payoutText = payoutText;
		this.betType = betType;
		this.resultsShadeBox = resultsShadeBox;
		this.resultsBoxBorder = resultsBoxBorder;
		this.resultsBox = resultsBox;
		this.rollTitle = rollTitle;
		this.scoreText = scoreText;
		this.scoreNumber = scoreNumber;
		this.yourBetType = yourBetType;
		this.yourNumbers = yourNumbers;
		this.yourPayout = yourPayout;
		this.yourMessage = yourMessage;
		this.clickToContinueText = clickToContinueText;
	}

	pickBetAmount(gsc) {
		this.placeBetBoxBorder.setDepth(0);
		this.placeBetBox.setDepth(0);
		this.placeBetText.setDepth(0);
		if (gsc >= 1) {
			this.oneCreditBoxBorder.setDepth(2);
			this.oneCreditBox.setDepth(2);
			this.oneCreditText.setDepth(2);
		};
		if (gsc >= 10) {
			this.fiveCreditBoxBorder.setDepth(2);
			this.fiveCreditBox.setDepth(2);
			this.fiveCreditText.setDepth(2);
		};
		if (gsc >= 25) {
			this.twentyfiveCreditBoxBorder.setDepth(2);
			this.twentyfiveCreditBox.setDepth(2);
			this.twentyfiveCreditText.setDepth(2);
		};
		if (gsc >= 50) {
			this.fiftyCreditBoxBorder.setDepth(2);
			this.fiftyCreditBox.setDepth(2);
			this.fiftyCreditText.setDepth(2);
		};
		if (gsc >= 100) {
			this.hundredCreditBoxBorder.setDepth(2);
			this.hundredCreditBox.setDepth(2);
			this.hundredCreditText.setDepth(2);
		};
		if (gsc >= 500) {
			this.fivehundredCreditBoxBorder.setDepth(2);
			this.fivehundredCreditBox.setDepth(2);
			this.fivehundredCreditText.setDepth(2);
		};

	}

	pickBetType() {
		this.oneCreditBoxBorder.setDepth(0);
		this.oneCreditBox.setDepth(0);
		this.oneCreditText.setDepth(0);
		this.fiveCreditBoxBorder.setDepth(0);
		this.fiveCreditBox.setDepth(0);
		this.fiveCreditText.setDepth(0);
		this.twentyfiveCreditBoxBorder.setDepth(0);
		this.twentyfiveCreditBox.setDepth(0);
		this.twentyfiveCreditText.setDepth(0);
		this.fiftyCreditBoxBorder.setDepth(0);
		this.fiftyCreditBox.setDepth(0);
		this.fiftyCreditText.setDepth(0);
		this.hundredCreditBoxBorder.setDepth(0);
		this.hundredCreditBox.setDepth(0);
		this.hundredCreditText.setDepth(0);
		this.fivehundredCreditBoxBorder.setDepth(0);
		this.fivehundredCreditBox.setDepth(0);
		this.fivehundredCreditText.setDepth(0);
		this.straightUpBetBoxBorder.setDepth(2);
		this.straightUpBetBox.setDepth(2);
		this.straightUpBetText.setDepth(2);
		this.splitBetBoxBorder.setDepth(2);
		this.splitBetBox.setDepth(2);
		this.splitBetText.setDepth(2);
		this.streetBetBoxBorder.setDepth(2);
		this.streetBetBox.setDepth(2);
		this.streetBetText.setDepth(2);
		this.cornerBetBoxBorder.setDepth(2);
		this.cornerBetBox.setDepth(2);
		this.cornerBetText.setDepth(2);
		this.suckerBetBoxBorder.setDepth(2);
		this.suckerBetBox.setDepth(2);
		this.suckerBetText.setDepth(2);
		this.lineBetBoxBorder.setDepth(2);
		this.lineBetBox.setDepth(2);
		this.lineBetText.setDepth(2);
		this.columnBetBoxBorder.setDepth(2);
		this.columnBetBox.setDepth(2);
		this.columnBetText.setDepth(2);
		this.dozenBetBoxBorder.setDepth(2);
		this.dozenBetBox.setDepth(2);
		this.dozenBetText.setDepth(2);
		this.colorBetBoxBorder.setDepth(2);
		this.colorBetBox.setDepth(2);
		this.colorBetText.setDepth(2);
		this.evenOddBetBoxBorder.setDepth(2);
		this.evenOddBetBox.setDepth(2);
		this.evenOddBetText.setDepth(2);
		this.lowHighBetBoxBorder.setDepth(2);
		this.lowHighBetBox.setDepth(2);
		this.lowHighBetText.setDepth(2);
	}

	typeChosen() {
		this.straightUpBetBoxBorder.setDepth(0);
		this.straightUpBetBox.setDepth(0);
		this.straightUpBetText.setDepth(0);
		this.splitBetBoxBorder.setDepth(0);
		this.splitBetBox.setDepth(0);
		this.splitBetText.setDepth(0);
		this.streetBetBoxBorder.setDepth(0);
		this.streetBetBox.setDepth(0);
		this.streetBetText.setDepth(0);
		this.cornerBetBoxBorder.setDepth(0);
		this.cornerBetBox.setDepth(0);
		this.cornerBetText.setDepth(0);
		this.suckerBetBoxBorder.setDepth(0);
		this.suckerBetBox.setDepth(0);
		this.suckerBetText.setDepth(0);
		this.lineBetBoxBorder.setDepth(0);
		this.lineBetBox.setDepth(0);
		this.lineBetText.setDepth(0);
		this.columnBetBoxBorder.setDepth(0);
		this.columnBetBox.setDepth(0);
		this.columnBetText.setDepth(0);
		this.dozenBetBoxBorder.setDepth(0);
		this.dozenBetBox.setDepth(0);
		this.dozenBetText.setDepth(0);
		this.colorBetBoxBorder.setDepth(0);
		this.colorBetBox.setDepth(0);
		this.colorBetText.setDepth(0);
		this.evenOddBetBoxBorder.setDepth(0);
		this.evenOddBetBox.setDepth(0);
		this.evenOddBetText.setDepth(0);
		this.lowHighBetBoxBorder.setDepth(0);
		this.lowHighBetBox.setDepth(0);
		this.lowHighBetText.setDepth(0);
		this.messageBoxBorder.setDepth(2);
		this.messageBox.setDepth(2);
		this.messageTextLineOne.setDepth(2);
		this.messageTextLineTwo.setDepth(2);
		this.confirmBetBox.setDepth(2);
		this.confirmBetBoxBorder.setDepth(2);
		this.confirmBetText.setDepth(2);
		this.picksListLineOne.setDepth(3);
		this.payoutText.setText('Payout: ' + this.payout + ' to 1');
		this.payoutText.setDepth(2);
		this.clearPicks();
		this.picksListLineOne.setText(this.picks[0]);
		this.picksListLineTwo.setText(this.picks[1]);
	}

	addPick(pick) {
		this.picks.unshift(pick);
		this.updatePicks();
	}

	clearPicks() {
		this.picks = [];
	}

	updatePicks() {
		if (this.picks[0] === 37) {
				this.picksListLineOne.setText('00');
		} else {
				this.picksListLineOne.setText(this.picks[0]);
		};
		if (this.picks[1] === 37) {
				this.picksListLineTwo.setText('00');
		} else {
				this.picksListLineTwo.setText(this.picks[1]);
		};
	}

	spinTheWheel() {
		let result = (Math.floor(Math.random() * 38));
		return result;
	}

	showSpinResults(result) {
		let resultText;
		if (this.score === 37) {
			resultText = '00';
		} else {
			resultText = result;
		};
		// check to see if player wins or loses
		let checkifResultMatches;
		let amount;
		let chosenPicks;
		if (this.betType === 'Straight-Up') {
			// only use last chosen number
			chosenPicks = this.picks[0];
			if (chosenPicks === result) {
				amount = this.betAmount * this.payout;
				this.yourMessage.setText('You win ' + amount + ' credits!');
				this.yourMessage.setColor('#33FF00');
			} else {
				amount = this.betAmount * -1;
				this.yourMessage.setText('         Lose');
				this.yourMessage.setColor('#A00000');
			};
		};

		this.scoreNumber.setText(resultText);
		this.yourBetType.setText('Your bet type: ' + this.betType);
		this.yourNumbers.setText('Your numbers:  ' + this.picks[0]);
		this.yourPayout.setText('Your payout:   ' + this.payout + ' to 1')
		this.resultsShadeBox.setDepth(4);
		this.resultsBoxBorder.setDepth(4);
		this.resultsBox.setDepth(4);
		this.rollTitle.setDepth(4);
		this.scoreText.setDepth(4);
		this.scoreNumber.setDepth(4);
		this.yourBetType.setDepth(4);
		this.yourNumbers.setDepth(4);
		this.yourPayout.setDepth(4);
		this.yourMessage.setDepth(4);
		this.clickToContinueText.setDepth(5);
		return amount;
	}

 straightUpBet() {
	 this.messageTextLineOne.setText('Click on any number');
	 this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
 }

	resetScene() {
		this.resultsShadeBox.setDepth(0);
		this.resultsBoxBorder.setDepth(0);
		this.resultsBox.setDepth(0);
		this.rollTitle.setDepth(0);
		this.scoreText.setDepth(0);
		this.scoreNumber.setDepth(0);
		this.yourBetType.setDepth(0);
		this.yourNumbers.setDepth(0);
		this.yourPayout.setDepth(0);
		this.yourMessage.setDepth(0);
		this.clickToContinueText.setDepth(0);
		this.messageBoxBorder.setDepth(0);
		this.messageBox.setDepth(0);
		this.messageTextLineOne.setDepth(0);
		this.messageTextLineTwo.setDepth(0);
		this.confirmBetBox.setDepth(0);
		this.confirmBetBoxBorder.setDepth(0);
		this.confirmBetText.setDepth(0);
		this.picksListLineOne.setDepth(0);
		this.payoutText.setDepth(0);
		this.placeBetBoxBorder.setDepth(2);
		this.placeBetBox.setDepth(2);
		this.placeBetText.setDepth(2);
	}

}
