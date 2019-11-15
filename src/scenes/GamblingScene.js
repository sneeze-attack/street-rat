import Phaser from 'phaser';
import Gamble from '../modules/ui/Gamble';
import game from '../index';
import japanBackgroundImg from '../assets/backgrounds/japan_1366_768.jpg';
import cogImg from '../assets/icons/48x48/cog_white.png';

export default class GamblingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GamblingScene' });
  }

  preload() {
    this.load.image('japan_background', japanBackgroundImg);
    this.load.image('cog', cogImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Gamble(this);

    ui.optionsCog.on('pointerup', () => {
      game.gameState.changeScene('OptionsScene', 'GamblingScene');
    });
    ui.backButton.on('pointerup', () => {
      game.gameState.changeScene('ActionsScene', 'GamblingScene');
    });
    ui.backTextBox.on('pointerup', () => {
      game.gameState.changeScene('ActionsScene', 'GamblingScene');
    });

    ui.rouletteBox.on('pointerup', () => {
      game.gameState.changeScene('RouletteScene', 'GamblingScene');
    });
    ui.rouletteText.on('pointerup', () => {
      game.gameState.changeScene('RouletteScene', 'GamblingScene');
    });

    ui.cardsBox.on('pointerup', () => {
      game.gameState.changeScene('CardsScene', 'GamblingScene');
    });
    ui.cardsText.on('pointerup', () => {
      game.gameState.changeScene('CardsScene', 'GamblingScene');
    });
  }

  update() {
    if (game.self.gameOver === true) {
      game.gameState.changeScene('GameOverScene', 'GamblingScene');
    }

    // scene change logic
    if (game.gameState.nextScene !== 'GamblingScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
