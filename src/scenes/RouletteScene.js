import Phaser from 'phaser';
import Roulette from '../modules/ui/Roulette';
import game from '../index';
import cog_img from '../assets/icons/48x48/cog_white.png';

export class RouletteScene extends Phaser.Scene {
  constructor() {
    super({ key: 'RouletteScene' });
  }

  preload() {
    this.load.image('cog', cog_img);
  }

  create() {

    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    let ui = new Roulette(this, game.self.gambleScore);

    ui.playerCreditsText.setText('Credits: ' + game.self.credits);

    ui.optionsCog.on('pointerup', function () {
      game.gameState.changeScene('OptionsScene', 'RouletteScene');
    });
    ui.backButton.on('pointerup', function () {
      game.gameState.changeScene('GamblingScene', 'RouletteScene');
    });
    ui.backTextBox.on('pointerup', function () {
      game.gameState.changeScene('GamblingScene', 'RouletteScene');
    });

    ui.placeBetBoxBorder.on('pointerup', function () {
      ui.pickBetAmount();
    });
    ui.placeBetBox.on('pointerup', function () {
      ui.pickBetAmount();
    });
    ui.placeBetText.on('pointerup', function () {
      ui.pickBetAmount();
    });
  }

  update() {

    if (game.self.gameOver === true) {
      game.gameState.changeScene('GameOverScene', 'GameScene');
    }

    // scene change logic
    if (game.gameState.nextScene !== 'RouletteScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
