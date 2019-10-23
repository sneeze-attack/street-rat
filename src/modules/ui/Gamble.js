import config from '../../index';

export default class Gamble extends Phaser.GameObjects.Group {
  // Intended for use only in GamblingScene

	// Gamble requires scene which is usually 'this'
	constructor(scene) {
    // add background image
    let backgroundImage = scene.add.image(0, 0, 'japan_background').setOrigin(0, 0);
    // add black box
    let createBox = scene.add.rectangle(((config.scale.width * 16) / 128), ((config.scale.height * 16) / 128), ((config.scale.width * 96) / 128), ((config.scale.height * 96) / 128), 0x000000).setOrigin(0, 0);
    // options
    let optionsCog = scene.add.sprite(((config.scale.width * 122) / 128), ((config.scale.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive();

    // back button
		let backTextBox = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 100) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
		let backButton = scene.add.text(((config.scale.width * 24) / 128), ((config.scale.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);
		// game choices -- chance (roulette) or skill (poker using skill checks)
		let rouletteBox = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 21) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
		let rouletteText = scene.add.text(((config.scale.width * 21) / 128), ((config.scale.height * 22) / 128), 'Roulette').setColor('#FFFFFF').setInteractive().setFontSize(32);

    super(scene);
    this.optionsCog = optionsCog;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
		this.rouletteBox = rouletteBox;
		this.rouletteText = rouletteText;
	}

}
