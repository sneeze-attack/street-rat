import Phaser from 'phaser';
import game from '../index';
import japanBackgroundImg from '../assets/backgrounds/japan_1366_768.jpg';


export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image('japan_background', japanBackgroundImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // start menu screen and title
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);
    this.add.text(((this.config.width * 6) / 128), ((this.config.height * 10) / 128), 'Street Rat').setColor('#FFFFFF').setFontSize(128).setStroke('#000000', 16).setOrigin(0, 0);

    // start game button
    const startTextBox = this.add.rectangle(((this.config.width * 8) / 128), ((this.config.height * 61) / 128), ((this.config.width * 30) / 128), ((this.config.height * 13) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const startText = this.add.text(((this.config.width * 14) / 128), ((this.config.height * 62) / 128), 'Start').setColor('#FFFFFF').setFontSize(64).setInteractive();

    // start button logic
    startText.on('pointerup', () => {
      game.gameState.changeScene('CharGenScene', 'StartScene');
    });

    startTextBox.on('pointerup', () => {
      game.gameState.changeScene('CharGenScene', 'StartScene');
    });

    // options button
    const optionsTextBox = this.add.rectangle(((this.config.width * 8) / 128), ((this.config.height * 78) / 128), ((this.config.width * 30) / 128), ((this.config.height * 13) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const optionsText = this.add.text(((this.config.width * 10) / 128), ((this.config.height * 79) / 128), 'Options').setColor('#FFFFFF').setFontSize(64).setInteractive();

    // options button logic
    optionsText.on('pointerup', () => {
      game.gameState.changeScene('OptionsScene', 'StartScene');
    });

    optionsTextBox.on('pointerup', () => {
      game.gameState.changeScene('OptionsScene', 'StartScene');
    });
  }

  update() {
    // change scene logic
    if (game.gameState.nextScene !== 'StartScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
