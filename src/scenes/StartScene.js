import Phaser from 'phaser';
import game from '../index';
import config from '../index';
import gameState from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';


export class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  };

  preload() {
    this.load.image('japan_background', japan_background_img);
  };

  create() {
    //needs comment
    this.config = this.sys.game.config;
    this.globals = { gameState };

    //start menu screen and title
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);
    let titleText = this.add.text(((this.config.width * 6) / 128), ((this.config.height * 10) / 128), 'Street Rat').setColor('#FFFFFF').setFontSize(128).setStroke('#000000', 16).setOrigin(0, 0);

    //start game button
    let startTextBox = this.add.rectangle(((this.config.width * 8) / 128), ((this.config.height * 61) / 128), ((this.config.width * 30) / 128), ((this.config.height * 13) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let startText = this.add.text(((this.config.width * 14) / 128), ((this.config.height * 62) / 128), 'Start').setColor('#FFFFFF').setFontSize(64).setInteractive();

    //start button logic
    startText.on('pointerup', function() {
      gameState.nextScene = 'CharGenScene';
      gameState.previousScene = 'StartScene';
    });

    startTextBox.on('pointerup', function() {
      gameState.nextScene = 'CharGenScene';
      gameState.previousScene = 'StartScene';
    });

    //options button
    let optionsTextBox = this.add.rectangle(((this.config.width * 8) / 128), ((this.config.height * 78) / 128), ((this.config.width * 30) / 128), ((this.config.height * 13) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let optionsText = this.add.text(((this.config.width * 10) / 128), ((this.config.height * 79) / 128), 'Options').setColor('#FFFFFF').setFontSize(64).setInteractive();

    //options button logic
    optionsText.on('pointerup', function() {
      gameState.nextScene = 'OptionsScene';
      gameState.previousScene = 'StartScene';
    });

    optionsTextBox.on('pointerup', function() {
      gameState.nextScene = 'OptionsScene';
      gameState.previousScene = 'StartScene';
    });
  }

  update() {

    //change scene logic
    if (gameState.nextScene === 'CharGenScene' || gameState.nextScene === 'OptionsScene') {
      this.scene.stop(gameState.previousScene);
      this.scene.start(gameState.nextScene);
    };
  }

}
