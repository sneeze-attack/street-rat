import Phaser from 'phaser';
import game from '../index';
import config from '../index';
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

    //options screen background
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    //black options text box
    let optionsBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    //close button
    let closeTextBox = this.add.rectangle(((this.config.width * 58) / 128), ((this.config.height * 98) / 128), ((this.config.width * 14) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let closeText = this.add.text(((this.config.width * 60) / 128), ((this.config.height * 100) / 128), 'Close').setColor('#FFFFFF').setInteractive().setFontSize(32);

    //back button logic
    closeTextBox.on('pointerup', function() {
      game.gameState.nextScene = game.gameState.previousScene;
      game.gameState.previousScene = 'OptionsScene';
    });
    closeText.on('pointerup', function() {
      game.gameState.nextScene = game.gameState.previousScene;
      game.gameState.previousScene = 'OptionsScene';
    });
  }


  update () {

    //change scene logic
    if (game.gameState.nextScene === 'StartScene' || game.gameState.nextScene === 'GameScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
