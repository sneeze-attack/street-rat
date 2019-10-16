import config from '../index';

export default class RollResults extends Phaser.GameObjects.Group {
	// RollResults requires scene which is usually 'this'
	// statOrSkill should be text of what is rolled against, example 'Pandhandling' or 'Strength'
	// playerNumber is the skill/stat level rolled against, example 'game.self.panhandeScore' or 'game.self.strength'
	// reason is the short one or two word explanation of why there is a roll at all.
	// reason cont. -- if obvious such as rolling againt panhandling because panhandling action was chosen
	// reason cont. -- then use 'Basic Roll', elsewise use whatever makes sense
	// reason example -- player's SP is below 0 and need to roll against Will then
	// reason example -- use 'SP too low' as reason
	constructor(scene, statOrSkill, playerNumber, reason) {

    // add gray shade to entire screen
    let resultsShadeBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setDepth(0).setAlpha(0.5);
    // add bordered results box
    let resultsBoxBorder = scene.add.rectangle(((config.scale.width * 30) / 128), ((config.scale.height * 14) / 128), ((config.scale.width * 68) / 128), ((config.scale.height * 98) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
    let resultsBox = scene.add.rectangle(((config.scale.width * 30.25) / 128), ((config.scale.height * 14.5) / 128), ((config.scale.width * 67.5) / 128), ((config.scale.height * 97) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
    // add Title of roll type
		let phx;
		// center title based on name
		if (statOrSkill === 'Panhandling') {
			phx = 42;
		} else if (statOrSkill === 'Will') {
			phx = 47;
		} else {
			phx = 32;
		};
		let rollTitle = scene.add.text(((config.scale.width * phx) / 128), ((config.scale.height * 17) / 128), 'Roll Against ' + statOrSkill).setColor('#0033FF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
		let rollReason = scene.add.text(((config.scale.width * 54.5) / 128), ((config.scale.height * 26.5) / 128), '(' + reason + ')').setColor('#A9A9A9').setFontFamily('"DejaVu Sans Mono"').setFontSize(24).setDepth(0);


		// add dice images
		let defaultOne = 'dice_one';
		let defaultTwo = 'dice_one';
		let defaultThree = 'dice_one';

		let diceOne = scene.add.sprite(((config.scale.width * 50) / 128), ((config.scale.height * 40) / 128), defaultOne).setOrigin(0, 0);
		let diceTwo = scene.add.sprite(((config.scale.width * 60) / 128), ((config.scale.height * 40) / 128), defaultOne).setOrigin(0, 0);
		let diceThree = scene.add.sprite(((config.scale.width * 70) / 128), ((config.scale.height * 40) / 128), defaultOne).setOrigin(0, 0);

		let scoreOffsetText;
		if (playerNumber >= 10) {
			scoreOffsetText = playerNumber;
		} else {
			scoreOffsetText = ' ' + playerNumber;
		}
		let scoreText = scene.add.text(((config.scale.width * 40) / 128), ((config.scale.height * 57) / 128), 'You').setColor('#33FF00').setFontFamily('"DejaVu Sans Mono"').setFontSize(40).setDepth(0);
		let scoreNumber = scene.add.text(((config.scale.width * 38) / 128), ((config.scale.height * 70) / 128), scoreOffsetText).setColor('#33FF00').setFontFamily('"DejaVu Sans Mono"').setFontSize(80).setDepth(0);

		let vsText = scene.add.text(((config.scale.width * 58.5) / 128), ((config.scale.height * 63) / 128), 'vs').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(80).setDepth(0);

		let rollText = scene.add.text(((config.scale.width * 80) / 128), ((config.scale.height * 57) / 128), 'Total').setColor('#A00000').setFontFamily('"DejaVu Sans Mono"').setFontSize(40).setDepth(0);
		let rollTotalText = scene.add.text(((config.scale.width * 80) / 128), ((config.scale.height * 70) / 128), '0').setColor('#A00000').setFontFamily('"DejaVu Sans Mono"').setFontSize(80).setDepth(0);

		let clickToContinueText = scene.add.text(((config.scale.width * 55.5) / 128), ((config.scale.height * 107) / 128), 'click to continue').setColor('#A9A9A9').setFontFamily('"DejaVu Sans Mono"').setFontSize(16).setDepth(0);

		let successOrFailure = 'Success';
		let successOrFailureText = scene.add.text(((config.scale.width * 52) / 128), ((config.scale.height * 93.5) / 128), successOrFailure).setColor('#A9A9A9').setFontFamily('"DejaVu Sans Mono"').setFontSize(56).setDepth(0);

		let firstLine = new Phaser.Geom.Line(((config.scale.width * 30) / 128), ((config.scale.height * 34) / 128), ((config.scale.width * 98) / 128), ((config.scale.height * 34) / 128));
    let lineFirst = scene.add.graphics({ lineStyle: { width: 4, color: 0xffffff } }).setDepth(0);
    lineFirst.strokeLineShape(firstLine);

		let secondLine = new Phaser.Geom.Line(((config.scale.width * 30) / 128), ((config.scale.height * 90) / 128), ((config.scale.width * 98) / 128), ((config.scale.height * 90) / 128));
    let lineSecond = scene.add.graphics({ lineStyle: { width: 4, color: 0xffffff } }).setDepth(0);
    lineSecond.strokeLineShape(secondLine);

		// this allows "click to continue" functionality to be targeted against this object versus all the objects it covers
		let masterBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setDepth(0).setAlpha(0.01).setInteractive();

    super(scene);

		this.masterBox = masterBox;
		this.playerNumber = playerNumber;
    this.resultsShadeBox = resultsShadeBox;
    this.resultsBoxBorder = resultsBoxBorder;
    this.resultsBox = resultsBox;
    this.rollTitle = rollTitle;
		this.rollReason = rollReason;
		this.dieOne = diceOne;
		this.dieTwo = diceTwo;
		this.dieThree = diceThree;
		this.dieOneImage = 'dice_one';
		this.dieTwoImage = 'dice_one';
		this.dieThreeImage = 'dice_one';
		this.scoreNumber = scoreNumber;
		this.scoreText = scoreText;
		this.vsText = vsText;
		this.diceTotal = 0;
		this.rollTotalText = rollTotalText;
		this.rollText = rollText;
		this.clickToContinueText = clickToContinueText;
		this.successOrFailureText = successOrFailureText;
		this.topLine = lineFirst;
		this.bottomLine = lineSecond;
		this.successOrFailure = null;

	}

	rollTheDice() {
		let resultOne = (Math.floor((Math.random() * 6) + 1));
		let resultTwo = (Math.floor((Math.random() * 6) + 1));
		let resultThree = (Math.floor((Math.random() * 6) + 1));

		this.diceTotal = resultOne + resultTwo + resultThree;
		if (this.diceTotal <= this.playerNumber) {
			this.successOrFailure = 'Success';
			this.successOrFailureText.setColor('#33FF00');

		} else {
			this.successOrFailure = 'Failure';
			this.successOrFailureText.setColor('#A00000');
		};

		this.successOrFailureText.setText(this.successOrFailure);

		if (resultOne === 1) {
			this.dieOneImage = 'dice_one';
		} else if (resultOne === 2) {
			this.dieOneImage = 'dice_two';
		} else if (resultOne === 3) {
			this.dieOneImage = 'dice_three';
		} else if (resultOne === 4) {
			this.dieOneImage = 'dice_four';
		} else if (resultOne === 5) {
			this.dieOneImage = 'dice_five';
		} else {
			this.dieOneImage = 'dice_six';
		};
		if (resultTwo === 1) {
			this.dieTwoImage = 'dice_one';
		} else if (resultTwo === 2) {
			this.dieTwoImage = 'dice_two';
		} else if (resultTwo === 3) {
			this.dieTwoImage = 'dice_three';
		} else if (resultTwo === 4) {
			this.dieTwoImage = 'dice_four';
		} else if (resultTwo === 5) {
			this.dieTwoImage = 'dice_five';
		} else {
			this.dieTwoImage = 'dice_six';
		};
		if (resultThree === 1) {
			this.dieThreeImage = 'dice_one';
		} else if (resultThree === 2) {
			this.dieThreeImage = 'dice_two';
		} else if (resultThree === 3) {
			this.dieThreeImage = 'dice_three';
		} else if (resultThree === 4) {
			this.dieThreeImage = 'dice_four';
		} else if (resultThree === 5) {
			this.dieThreeImage = 'dice_five';
		} else {
			this.dieThreeImage = 'dice_six';
		};


		this.dieOne.setTexture(this.dieOneImage);
		this.dieTwo.setTexture(this.dieTwoImage);
		this.dieThree.setTexture(this.dieThreeImage);

		this.rollTotalText.setText(this.diceTotal);
	}

	showRollResults() {
		this.rollTheDice();
		this.resultsShadeBox.setDepth(3);
		this.resultsBoxBorder.setDepth(4);
		this.resultsBox.setDepth(5);
		this.topLine.setDepth(6);
		this.bottomLine.setDepth(6);
		this.rollTitle.setDepth(7);
		this.rollReason.setDepth(7);
		this.dieOne.setDepth(8);
		this.dieTwo.setDepth(8);
		this.dieThree.setDepth(8);
		this.scoreNumber.setDepth(8);
		this.scoreText.setDepth(8);
		this.vsText.setDepth(8);
		this.rollTotalText.setDepth(8);
		this.rollText.setDepth(8);
		this.clickToContinueText.setDepth(8);
		this.successOrFailureText.setDepth(8);
		this.masterBox.setDepth(9);
	}

	showRollResultsModDepth(number) {
		this.rollTheDice();
		let modifyNumber = number + 7;
		this.resultsShadeBox.setAlpha(0);
		this.resultsShadeBox.setDepth(3 + modifyNumber);
		this.resultsBoxBorder.setDepth(4 + modifyNumber);
		this.resultsBox.setDepth(5 + modifyNumber);
		this.topLine.setDepth(6 + modifyNumber);
		this.bottomLine.setDepth(6 + modifyNumber);
		this.rollTitle.setDepth(7 + modifyNumber);
		this.rollReason.setDepth(7 + modifyNumber);
		this.dieOne.setDepth(8 + modifyNumber);
		this.dieTwo.setDepth(8 + modifyNumber);
		this.dieThree.setDepth(8 + modifyNumber);
		this.scoreNumber.setDepth(8 + modifyNumber);
		this.scoreText.setDepth(8 + modifyNumber);
		this.vsText.setDepth(8 + modifyNumber);
		this.rollTotalText.setDepth(8 + modifyNumber);
		this.rollText.setDepth(8 + modifyNumber);
		this.clickToContinueText.setDepth(8 + modifyNumber);
		this.successOrFailureText.setDepth(8 + modifyNumber);
		this.masterBox.setDepth(9 + modifyNumber);
	}

	hideRollResults() {
		this.resultsShadeBox.setDepth(0);
		this.resultsBoxBorder.setDepth(0);
		this.resultsBox.setDepth(0);
		this.topLine.setDepth(0);
		this.bottomLine.setDepth(0);
		this.rollTitle.setDepth(0);
		this.rollReason.setDepth(0);
		this.dieOne.setDepth(0);
		this.dieTwo.setDepth(0);
		this.dieThree.setDepth(0);
		this.scoreNumber.setDepth(0);
		this.scoreText.setDepth(0);
		this.vsText.setDepth(0);
		this.rollTotalText.setDepth(0);
		this.rollText.setDepth(0);
		this.clickToContinueText.setDepth(0);
		this.successOrFailureText.setDepth(0);
		this.masterBox.setDepth(0);
	}

}
