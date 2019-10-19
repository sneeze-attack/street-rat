import config from '../index';

export default class CharGen extends Phaser.GameObjects.Group {
  // Intended for use only in CharGenScene
	// CharGen requires scene which is usually 'this'
	constructor(scene) {
    // add black box
    let createBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0);
    // create stat boxes
    let primaryStatBoxBorder = scene.add.rectangle(((config.scale.width * 19) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 21) / 128), ((config.scale.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0);
    let primaryStatBoxInterior = scene.add.rectangle(((config.scale.width * 19.5) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 24) / 128), 0x000000).setOrigin(0, 0);
    let secondaryStatBoxBorder = scene.add.rectangle(((config.scale.width * 39.5) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 24) / 128), ((config.scale.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0);
    let secondaryStatBoxInterior = scene.add.rectangle(((config.scale.width * 40) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 23) / 128), ((config.scale.height * 24) / 128), 0x000000).setOrigin(0, 0);
    let tertiaryStatBoxBorder = scene.add.rectangle(((config.scale.width * 62) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 28) / 128), ((config.scale.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0);
    let tertiaryStatBoxInterior = scene.add.rectangle(((config.scale.width * 62.5) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 27) / 128), ((config.scale.height * 24) / 128), 0x000000).setOrigin(0, 0);
    // skills boxes
    let skillsBoxBorder = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 37) / 128), ((config.scale.height * 101) / 128), 0xC0C0C0).setOrigin(0, 0);
    let skillsBoxInterior = scene.add.rectangle(((config.scale.width * 89.5) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 36) / 128), ((config.scale.height * 100) / 128), 0x000000).setOrigin(0, 0);

    // skills - plus and minus
		let gamblingPlus = scene.add.sprite(((config.scale.width * 116) / 128), ((config.scale.height * 15.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let gamblingMinus = scene.add.sprite(((config.scale.width * 113) / 128), ((config.scale.height * 15.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
    let panhandlingPlus = scene.add.sprite(((config.scale.width * 116) / 128), ((config.scale.height * 21.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let panhandlingMinus = scene.add.sprite(((config.scale.width * 113) / 128), ((config.scale.height * 21.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    // future concept
    let conceptBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 48) / 128), ((config.scale.width * 86.5) / 128), ((config.scale.height * 65) / 128), 0xC0C0C0).setOrigin(0, 0);
    let conceptBoxInterior = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 48.5) / 128), ((config.scale.width * 85.5) / 128), ((config.scale.height * 64) / 128), 0x000000).setOrigin(0, 0);
    // divider -- points
    let dividerBoxBorder = scene.add.rectangle(((config.scale.width * 19) / 128), ((config.scale.height * 36.75) / 128), ((config.scale.width * 70.5) / 128), ((config.scale.height * 11.5) / 128), 0xC0C0C0).setOrigin(0, 0);
    let dividerBoxInterior = scene.add.rectangle(((config.scale.width * 19.5) / 128), ((config.scale.height * 37.25) / 128), ((config.scale.width * 69.5) / 128), ((config.scale.height * 10.5) / 128), 0x000000).setOrigin(0, 0);
    let backTextBox = scene.add.rectangle(((config.scale.width * 2) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let backButton = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);
    let continueTextBox = scene.add.rectangle(((config.scale.width * 105) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let continueButton = scene.add.text(((config.scale.width * 108) / 128), ((config.scale.height * 116) / 128), 'Continue').setColor('#FFFFFF').setInteractive().setFontSize(32);
    let portrait = scene.add.sprite(((config.scale.width * 3) / 128), ((config.scale.height * 4) / 128), 'placeholder').setOrigin(0, 0);
		let maleSelection = 'male_icon';
    let femaleSelection = 'female_icon';
		let maleButton = scene.add.sprite(((config.scale.width * 6) / 128), ((config.scale.height * 40) / 128), maleSelection).setOrigin(0, 0).setInteractive();
		let femaleButton = scene.add.sprite(((config.scale.width * 11) / 128), ((config.scale.height * 40) / 128), femaleSelection).setOrigin(0, 0).setInteractive();
		let portraitPreviousArrow = scene.add.sprite(((config.scale.width * 3) / 128), ((config.scale.height * 41.25) / 128), 'arrow_left').setOrigin(0, 0).setInteractive();
    let portraitNextArrow = scene.add.sprite(((config.scale.width * 16) / 128), ((config.scale.height * 41) / 128), 'arrow_right').setOrigin(0, 0).setInteractive();
		let strPlus = scene.add.sprite(((config.scale.width * 36) / 128), ((config.scale.height * 13.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let strMinus = scene.add.sprite(((config.scale.width * 33) / 128), ((config.scale.height * 13.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let agiPlus = scene.add.sprite(((config.scale.width * 36) / 128), ((config.scale.height * 19.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
		let agiMinus = scene.add.sprite(((config.scale.width * 33) / 128), ((config.scale.height * 19.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let intPlus = scene.add.sprite(((config.scale.width * 36) / 128), ((config.scale.height * 25.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let intMinus = scene.add.sprite(((config.scale.width * 33) / 128), ((config.scale.height * 25.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let conPlus = scene.add.sprite(((config.scale.width * 36) / 128), ((config.scale.height * 31.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let conMinus = scene.add.sprite(((config.scale.width * 33) / 128), ((config.scale.height * 31.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let hpPlus = scene.add.sprite(((config.scale.width * 59) / 128), ((config.scale.height * 13.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
		let hpMinus = scene.add.sprite(((config.scale.width * 56) / 128), ((config.scale.height * 13.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let spPlus = scene.add.sprite(((config.scale.width * 59) / 128), ((config.scale.height * 19.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
		let spMinus = scene.add.sprite(((config.scale.width * 56) / 128), ((config.scale.height * 19.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let perPlus = scene.add.sprite(((config.scale.width * 59) / 128), ((config.scale.height * 25.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let perMinus = scene.add.sprite(((config.scale.width * 56) / 128), ((config.scale.height * 25.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let willPlus = scene.add.sprite(((config.scale.width * 59) / 128), ((config.scale.height * 31.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let willMinus = scene.add.sprite(((config.scale.width * 56) / 128), ((config.scale.height * 31.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let speedPlus = scene.add.sprite(((config.scale.width * 86) / 128), ((config.scale.height * 19.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
		let speedMinus = scene.add.sprite(((config.scale.width * 83) / 128), ((config.scale.height * 19.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
		let movePlus = scene.add.sprite(((config.scale.width * 86) / 128), ((config.scale.height * 25.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let moveMinus = scene.add.sprite(((config.scale.width * 83) / 128), ((config.scale.height * 25.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

		// integers to track stats with specific thresholds
    let willInteger = 0;
    let perInteger = 0;
    let speedInteger = 0;
    let moveInteger = 0;

    super(scene);
		this.gamblingPlus = gamblingPlus;
    this.gamblingMinus = gamblingMinus;
		this.panhandlingPlus = panhandlingPlus;
    this.panhandlingMinus = panhandlingMinus;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.continueTextBox = continueTextBox;
    this.continueButton = continueButton;
    this.portrait = portrait;
		this.maleButton = maleButton;
		this.femaleButton = femaleButton;
		this.maleSelection = maleSelection;
		this.femaleSelection = femaleSelection;
		this.portraitNextArrow = portraitNextArrow;
		this.portraitPreviousArrow = portraitPreviousArrow;
		this.strPlus = strPlus;
		this.strMinus = strMinus;
		this.agiPlus = agiPlus;
		this.agiMinus = agiMinus;
		this.intPlus = intPlus;
		this.intMinus = intMinus;
		this.conPlus = conPlus;
		this.conMinus = conMinus;
		this.hpPlus = hpPlus;
		this.hpMinus = hpMinus;
		this.spPlus = spPlus;
		this.spMinus = spMinus;
		this.perPlus = perPlus;
		this.perMinus = perMinus;
		this.willPlus = willPlus;
		this.willMinus = willMinus;
		this.speedPlus = speedPlus;
		this.speedMinus = speedMinus;
		this.movePlus = movePlus;
		this.moveMinus = moveMinus;
		this.willInteger = willInteger;
		this.perInteger = perInteger;
		this.speedInteger = speedInteger;
		this.moveInteger = moveInteger;
	}


}
