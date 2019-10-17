import Phaser from 'phaser';
import Gamble from '../modules/Gamble';
import game from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import cog_img from '../assets/icons/48x48/cog_white.png';

export class GamblingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GamblingScene' });
  }

  preload() {
    this.load.image('japan_background', japan_background_img);
    this.load.image('cog', cog_img);
  }

  create() {

    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    let ui = new Gamble(this, game.self.gambleScore);

    ui.optionsCog.on('pointerup', function () {
      game.gameState.changeScene('OptionsScene', 'GamblingScene');
    });
    ui.backButton.on('pointerup', function () {
      game.gameState.changeScene('ActionsScene', 'GamblingScene');
    });
    ui.backTextBox.on('pointerup', function () {
      game.gameState.changeScene('ActionsScene', 'GamblingScene');
    });
  }

  update() {

    if (game.self.gameOver === true) {
      game.gameState.changeScene('GameOverScene', 'GameScene');
    }

    // scene change logic
    if (game.gameState.nextScene !== 'GamblingScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
