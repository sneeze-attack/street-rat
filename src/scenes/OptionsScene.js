import Phaser from 'phaser';
import config from '../index';
import gameState from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';


export class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'OptionsScene' });
  }

  preload () {
    this.load.image('japan_background', japan_background_img);
  }

  create () {

    //needs comment
    this.config = this.sys.game.config;
    this.globals = { gameState };

    //options screen background
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    //black options text box
    let optionsBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    //close button
    let closeTextBox = this.add.rectangle(((this.config.width * 58) / 128), ((this.config.height * 98) / 128), ((this.config.width * 14) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let closeText = this.add.text(((this.config.width * 60) / 128), ((this.config.height * 100) / 128), 'Close').setColor('#FFFFFF').setInteractive().setFontSize(32);

    //back button logic
    closeTextBox.on('pointerup', function() {
      gameState.nextScene = gameState.previousScene;
      gameState.previousScene = 'OptionsScene';
    });
    closeText.on('pointerup', function() {
      gameState.nextScene = gameState.previousScene;
      gameState.previousScene = 'OptionsScene';
    });
  }


  update () {

    //change scene logic
    if (gameState.nextScene === 'StartScene') {
      this.scene.stop(gameState.previousScene);
      this.scene.start(gameState.nextScene);
    };

  }

}
