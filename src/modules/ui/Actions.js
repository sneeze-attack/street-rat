import config from '../../index';

export default class Actions extends Phaser.GameObjects.Group {
  // Intended for use only in ActionsScene

	// Actions requires scene which is usually 'this'
	constructor(scene) {

    // add background image
    let backgroundImage = scene.add.image(0, 0, 'japan_background').setOrigin(0, 0).setDepth(1).setInteractive();
    // add black box
    let createBox = scene.add.rectangle(((config.scale.width * 16) / 128), ((config.scale.height * 16) / 128), ((config.scale.width * 96) / 128), ((config.scale.height * 96) / 128), 0x000000).setOrigin(0, 0).setDepth(1);
    // options
    let optionsCog = scene.add.sprite(((config.scale.width * 122) / 128), ((config.scale.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive().setDepth(1);
    // back button
    let backTextBox = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 100) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let backButton = scene.add.text(((config.scale.width * 24) / 128), ((config.scale.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);

    // actions
    let gamblingButton = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 21) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let gamblingText = scene.add.text(((config.scale.width * 22.5) / 128), ((config.scale.height * 22.5) / 128), 'Gamble').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);

    let panhandlingButton = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 33) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let panhandlingText = scene.add.text(((config.scale.width * 20) / 128), ((config.scale.height * 34.5) / 128), 'Panhandle').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);


    super(scene);
    this.optionsCog = optionsCog;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.gamblingButton = gamblingButton;
    this.gamblingText = gamblingText;
    this.panhandlingButton = panhandlingButton;
    this.panhandlingText = panhandlingText;
	}


}
