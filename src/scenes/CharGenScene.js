import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';


export class CharGenScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CharGenScene' });
  }

  preload() {
    this.load.image('japan_background', japan_background_img);
  }

  create() {

    //needs comment
    this.config = this.sys.game.config;
    this.globals = { gameState, self };

    //add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    //add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    //back button
    this.backTextBox = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 100) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    this.backButton = this.add.text(((this.config.width * 24) / 128), ((this.config.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);

  }

  update() {


    //back button logic
    this.backButton.on('pointerup', function () {
      self.shape = null;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });
    this.backTextBox.on('pointerup', function () {
      self.shape = null;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });

    if (gameState.nextScene === 'GameScene' || gameState.nextScene === 'StartScene') {
      this.scene.stop(gameState.previousScene);
      this.scene.start(gameState.nextScene);
    };

  }

}
