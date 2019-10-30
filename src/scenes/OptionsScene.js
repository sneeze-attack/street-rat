import Phaser from 'phaser';
import game from '../index';
import japanBackgroundImg from '../assets/backgrounds/japan_1366_768.jpg';
import checkmarkImg from '../assets/icons/32x32/checkmark_green.png';
import xRedImg from '../assets/icons/32x32/x_red.png';


export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'OptionsScene' });
  }

  preload() {
    this.load.image('japan_background', japanBackgroundImg);
    this.load.image('checkmark', checkmarkImg);
    this.load.image('x_red', xRedImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // options screen background
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    // black options text box
    this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    // close button
    const closeTextBox = this.add.rectangle(((this.config.width * 58) / 128), ((this.config.height * 98) / 128), ((this.config.width * 14) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const closeText = this.add.text(((this.config.width * 60) / 128), ((this.config.height * 100) / 128), 'Close').setColor('#FFFFFF').setInteractive().setFontSize(32);

    // back button logic
    closeTextBox.on('pointerup', () => {
      game.gameState.changeScene(game.gameState.previousScene, 'OptionsScene');
    });
    closeText.on('pointerup', () => {
      game.gameState.changeScene(game.gameState.previousScene, 'OptionsScene');
    });

    // show roll results option
    this.add.text(((this.config.width * 20) / 128), ((this.config.height * 23) / 128), 'Show roll results:').setColor('#FFFFFF').setFontSize(32);
    let rollResultsChoice;
    if (game.gameState.showRollResults === false) {
      rollResultsChoice = 'x_red';
    } else {
      rollResultsChoice = 'checkmark';
    }

    const rollResultsIndicator = this.add.sprite(((this.config.width * 54.5) / 128), ((this.config.height * 22.5) / 128), rollResultsChoice).setOrigin(0, 0).setInteractive();

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

    rollResultsIndicator.on('pointerup', () => {
      rollResultsChoiceSelect.call(this);
    });
  }

  update() {
    // scene change logic
    if (game.gameState.nextScene !== 'OptionsScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
