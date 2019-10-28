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
      ui.pickBetAmount(game.self.credits);
    });
    ui.placeBetBox.on('pointerup', function () {
      ui.pickBetAmount(game.self.credits);
    });
    ui.placeBetText.on('pointerup', function () {
      ui.pickBetAmount(game.self.credits);
    });

    ui.oneCreditBoxBorder.on('pointerup', function () {
      ui.betAmount = 1;
      ui.pickBetType();
    });
    ui.oneCreditBox.on('pointerup', function () {
      ui.betAmount = 1;
      ui.pickBetType();
    });
    ui.oneCreditText.on('pointerup', function () {
      ui.betAmount = 1;
      ui.pickBetType();
    });

    ui.fiveCreditBoxBorder.on('pointerup', function () {
      ui.betAmount = 5;
      ui.pickBetType();
    });
    ui.fiveCreditBox.on('pointerup', function () {
      ui.betAmount = 5;
      ui.pickBetType();
    });
    ui.fiveCreditText.on('pointerup', function () {
      ui.betAmount = 5;
      ui.pickBetType();
    });

    ui.twentyfiveCreditBoxBorder.on('pointerup', function () {
      ui.betAmount = 25;
      ui.pickBetType();
    });
    ui.twentyfiveCreditBox.on('pointerup', function () {
      ui.betAmount = 25;
      ui.pickBetType();
    });
    ui.twentyfiveCreditText.on('pointerup', function () {
      ui.betAmount = 25;
      ui.pickBetType();
    });

    ui.fiftyCreditBoxBorder.on('pointerup', function () {
      ui.betAmount = 50;
      ui.pickBetType();
    });
    ui.fiftyCreditBox.on('pointerup', function () {
      ui.betAmount = 50;
      ui.pickBetType();
    });
    ui.fiftyCreditText.on('pointerup', function () {
      ui.betAmount = 50;
      ui.pickBetType();
    });

    ui.hundredCreditBoxBorder.on('pointerup', function () {
      ui.betAmount = 100;
      ui.pickBetType();
    });
    ui.hundredCreditBox.on('pointerup', function () {
      ui.betAmount = 100;
      ui.pickBetType();
    });
    ui.hundredCreditText.on('pointerup', function () {
      ui.betAmount = 100;
      ui.pickBetType();
    });

    ui.fivehundredCreditBoxBorder.on('pointerup', function () {
      ui.betAmount = 500;
      ui.pickBetType();
    });
    ui.fivehundredCreditBox.on('pointerup', function () {
      ui.betAmount = 500;
      ui.pickBetType();
    });
    ui.fivehundredCreditText.on('pointerup', function () {
      ui.betAmount = 500;
      ui.pickBetType();
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
