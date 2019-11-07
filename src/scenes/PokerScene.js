import Phaser from 'phaser';
import Poker from '../modules/ui/Poker';
import game from '../index';
import japanBackgroundImg from '../assets/backgrounds/japan_1366_768.jpg';
import cogImg from '../assets/icons/48x48/cog_white.png';

export default class PokerScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PokerScene' });
  }

  preload() {
    this.load.image('japan_background', japanBackgroundImg);
    this.load.image('cog', cogImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Poker(this, game.self.gamblingScore);

    ui.setScores();
    ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
    ui.messageTextLineOne.setText('Play a skill-based game of Poker with 9 other players')

    ui.backButton.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'PokerScene');
    });
    ui.backTextBox.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'PokerScene');
    });

    ui.playText.on('pointerup', () => {
      ui.showBetAmounts();
    });
    ui.playBox.on('pointerup', () => {
      ui.showBetAmounts();
    });
    ui.playBoxBorder.on('pointerup', () => {
      ui.showBetAmounts();
    });

    ui.oneCreditBox.on('pointerup', () => {
      ui.setBetAmount(1);
    });
    ui.oneCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(1);
    });
    ui.oneCreditText.on('pointerup', () => {
      ui.setBetAmount(1);
    });
    ui.twoCreditBox.on('pointerup', () => {
      ui.setBetAmount(2);
    });
    ui.twoCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(2);
    });
    ui.twoCreditText.on('pointerup', () => {
      ui.setBetAmount(2);
    });
    ui.fourCreditBox.on('pointerup', () => {
      ui.setBetAmount(4);
    });
    ui.fourCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(4);
    });
    ui.fourCreditText.on('pointerup', () => {
      ui.setBetAmount(4);
    });
    ui.eightCreditBox.on('pointerup', () => {
      ui.setBetAmount(8);
    });
    ui.eightCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(8);
    });
    ui.eightCreditText.on('pointerup', () => {
      ui.setBetAmount(8);
    });
    ui.sixteenCreditBox.on('pointerup', () => {
      ui.setBetAmount(16);
    });
    ui.sixteenCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(16);
    });
    ui.sixteenCreditText.on('pointerup', () => {
      ui.setBetAmount(16);
    });


    console.log('1:' + ui.opponent1);
    console.log('2:' + ui.opponent2);
    console.log('3:' + ui.opponent3);
    console.log('4:' + ui.opponent4);
    console.log('5:' + ui.opponent5);
    console.log('6:' + ui.opponent6);
    console.log('7:' + ui.opponent7);
    console.log('8:' + ui.opponent8);
    console.log('9:' + ui.opponent9);


  }

  update() {
    if (game.self.gameOver === true) {
      game.gameState.changeScene('GameOverScene', 'PokerScene');
    }

    // scene change logic
    if (game.gameState.nextScene !== 'PokerScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
