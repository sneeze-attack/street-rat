import config from '../index';

export default class CharGen extends Phaser.GameObjects.Group {
  // Intended for use only in CharGenScene
	// CharGen requires scene which is usually 'this'
	constructor(scene) {

    //add black box
    let createBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0);
    //create stat boxes
    let primaryStatBoxBorder = scene.add.rectangle(((config.scale.width * 19) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 21) / 128), ((config.scale.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0);
    let primaryStatBoxInterior = scene.add.rectangle(((config.scale.width * 19.5) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 24) / 128), 0x000000).setOrigin(0, 0);
    let secondaryStatBoxBorder = scene.add.rectangle(((config.scale.width * 39.5) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 24) / 128), ((config.scale.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0);
    let secondaryStatBoxInterior = scene.add.rectangle(((config.scale.width * 40) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 23) / 128), ((config.scale.height * 24) / 128), 0x000000).setOrigin(0, 0);
    let tertiaryStatBoxBorder = scene.add.rectangle(((config.scale.width * 62) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 28) / 128), ((config.scale.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0);
    let tertiaryStatBoxInterior = scene.add.rectangle(((config.scale.width * 62.5) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 27) / 128), ((config.scale.height * 24) / 128), 0x000000).setOrigin(0, 0);
    //skills boxes
    let skillsBoxBorder = scene.add.rectangle(((config.scale.width * 89) / 128), ((config.scale.height * 12) / 128), ((config.scale.width * 37) / 128), ((config.scale.height * 101) / 128), 0xC0C0C0).setOrigin(0, 0);
    let skillsBoxInterior = scene.add.rectangle(((config.scale.width * 89.5) / 128), ((config.scale.height * 12.5) / 128), ((config.scale.width * 36) / 128), ((config.scale.height * 100) / 128), 0x000000).setOrigin(0, 0);

    // skills - plus and minus
    let panhandlingPlus = scene.add.sprite(((config.scale.width * 116) / 128), ((config.scale.height * 15.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let panhandlingMinus = scene.add.sprite(((config.scale.width * 113) / 128), ((config.scale.height * 15.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    //future concept
    let conceptBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 48) / 128), ((config.scale.width * 86.5) / 128), ((config.scale.height * 65) / 128), 0xC0C0C0).setOrigin(0, 0);
    let conceptBoxInterior = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 48.5) / 128), ((config.scale.width * 85.5) / 128), ((config.scale.height * 64) / 128), 0x000000).setOrigin(0, 0);
    //divider -- points
    let dividerBoxBorder = scene.add.rectangle(((config.scale.width * 19) / 128), ((config.scale.height * 36.75) / 128), ((config.scale.width * 70.5) / 128), ((config.scale.height * 11.5) / 128), 0xC0C0C0).setOrigin(0, 0);
    let dividerBoxInterior = scene.add.rectangle(((config.scale.width * 19.5) / 128), ((config.scale.height * 37.25) / 128), ((config.scale.width * 69.5) / 128), ((config.scale.height * 10.5) / 128), 0x000000).setOrigin(0, 0);

    //buttons
    let backTextBox = scene.add.rectangle(((config.scale.width * 2) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let backButton = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);
    let continueTextBox = scene.add.rectangle(((config.scale.width * 105) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let continueButton = scene.add.text(((config.scale.width * 108) / 128), ((config.scale.height * 116) / 128), 'Continue').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let portrait = scene.add.sprite(((config.scale.width * 3) / 128), ((config.scale.height * 4) / 128), 'placeholder').setOrigin(0, 0);

    super(scene);
    this.panhandlingPlus = panhandlingPlus;
    this.panhandlingMinus = panhandlingMinus;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.continueTextBox = continueTextBox;
    this.continueButton = continueButton;
    this.portrait = portrait;
	}


}
