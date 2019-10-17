import Phaser from 'phaser';
import game from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import checkmark_img from '../assets/icons/32x32/checkmark_green.png';
import x_red_img from '../assets/icons/32x32/x_red.png';


export class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'OptionsScene' });
  }

  preload () {
    this.load.image('japan_background', japan_background_img);
    this.load.image('checkmark', checkmark_img);
    this.load.image('x_red', x_red_img);
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
      game.gameState.changeScene(game.gameState.previousScene, 'OptionsScene');
    });
    closeText.on('pointerup', function() {
      game.gameState.changeScene(game.gameState.previousScene, 'OptionsScene');
    });

    // show roll results option
    let rollResultsText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 23) / 128), 'Show roll results:').setColor('#FFFFFF').setFontSize(32);
    let rollResultsChoice;
    if (game.gameState.showRollResults === false) {
      rollResultsChoice = 'x_red';
    } else {
      rollResultsChoice = 'checkmark';
    }

    let rollResultsIndicator = this.add.sprite(((this.config.width * 54.5) / 128), ((this.config.height * 22.5) / 128), rollResultsChoice).setOrigin(0, 0).setInteractive();

    function rollResultsChoiceSelect() {
      if (game.gameState.showRollResults === false) {
        rollResultsChoice = 'checkmark';
        rollResultsIndicator.setTexture(rollResultsChoice);
        game.gameState.showRollResults = true;
      } else {
        rollResultsChoice = 'x_red';
        rollResultsIndicator.setTexture(rollResultsChoice);
        game.gameState.showRollResults = false;
      }
    }

    rollResultsIndicator.on('pointerup', function () {
      rollResultsChoiceSelect.call(this);
    });

  }


  update () {

    // scene change logic
    if (game.gameState.nextScene !== 'OptionsScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
