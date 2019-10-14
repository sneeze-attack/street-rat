import config from '../index';

export default class RollResults extends Phaser.GameObjects.Group {
	// RollResults requires scene which is usually 'this'
	// statOrSkill should be text of what is rolled against, example 'Pandhandling' or 'Strength'
	// playerNumber is the skill/stat level rolled against, example 'game.self.panhandeScore' or 'game.self.strength'
	constructor(scene, statOrSkill, playerNumber) {

    // add gray shade to entire screen
    let resultsShadeBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setDepth(0).setAlpha(0.5).setInteractive();
    // add bordered results box
    let resultsBoxBorder = scene.add.rectangle(((config.scale.width * 30) / 128), ((config.scale.height * 20) / 128), ((config.scale.width * 68) / 128), ((config.scale.height * 92) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
    let resultsBox = scene.add.rectangle(((config.scale.width * 30.25) / 128), ((config.scale.height * 20.5) / 128), ((config.scale.width * 67.5) / 128), ((config.scale.height * 91) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    // add Title of roll type
		let phx;
		// center title based on name
		if (statOrSkill === 'Panhandling') {
			phx = 42;
		} else {
			phx = 32;
		}
		let rollTitle = scene.add.text(((config.scale.width * phx) / 128), ((config.scale.height * 22.5) / 128), 'Roll Against ' + statOrSkill).setColor('#0033FF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
		// add dice images
		let defaultOne = 'dice_one';
		let defaultTwo = 'dice_one';
		let defaultThree = 'dice_one';

		let diceOne = scene.add.sprite(((config.scale.width * 50) / 128), ((config.scale.height * 40) / 128), defaultOne).setOrigin(0, 0).setInteractive();
		let diceTwo = scene.add.sprite(((config.scale.width * 60) / 128), ((config.scale.height * 40) / 128), defaultOne).setOrigin(0, 0).setInteractive();
		let diceThree = scene.add.sprite(((config.scale.width * 70) / 128), ((config.scale.height * 40) / 128), defaultOne).setOrigin(0, 0).setInteractive();

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

    super(scene);


    this.resultsShadeBox = resultsShadeBox;
    this.resultsBoxBorder = resultsBoxBorder;
    this.resultsBox = resultsBox;
    this.rollTitle = rollTitle;
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

    //scene.add.existing(this);

	}

	rollTheDice() {
		let resultOne = (Math.floor((Math.random() * 6) + 1));
		let resultTwo = (Math.floor((Math.random() * 6) + 1));
		let resultThree = (Math.floor((Math.random() * 6) + 1));

		this.diceTotal = resultOne + resultTwo + resultThree;

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

}