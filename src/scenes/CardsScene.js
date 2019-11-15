import Phaser from 'phaser';
import Cards from '../modules/ui/Cards';
import game from '../index';
import japanBackgroundImg from '../assets/backgrounds/japan_1366_768.jpg';
import cogImg from '../assets/icons/48x48/cog_white.png';

export default class CardsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CardsScene' });
  }

  preload() {
    this.load.image('japan_background', japanBackgroundImg);
    this.load.image('cog', cogImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Cards(this, game.self.gamblingScore);

    ui.setScores();
    ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
    ui.messageTextLineOne.setText('Play a skill-based game of cards with 9 other players');

    ui.backButton.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'CardsScene');
    });
    ui.backTextBox.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'CardsScene');
    });

    ui.playText.on('pointerup', () => {
      ui.showBetAmounts(game.self.credits);
    });
    ui.playBox.on('pointerup', () => {
      ui.showBetAmounts(game.self.credits);
    });
    ui.playBoxBorder.on('pointerup', () => {
      ui.showBetAmounts(game.self.credits);
    });

    function creditsUpdate() {
      game.self.credits -= ui.betAmount;
      ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
    }

    ui.oneCreditBox.on('pointerup', () => {
      ui.setBetAmount(1);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.oneCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(1);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.oneCreditText.on('pointerup', () => {
      ui.setBetAmount(1);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.twoCreditBox.on('pointerup', () => {
      ui.setBetAmount(2);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.twoCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(2);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.twoCreditText.on('pointerup', () => {
      ui.setBetAmount(2);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.fourCreditBox.on('pointerup', () => {
      ui.setBetAmount(4);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.fourCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(4);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.fourCreditText.on('pointerup', () => {
      ui.setBetAmount(4);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.eightCreditBox.on('pointerup', () => {
      ui.setBetAmount(8);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.eightCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(8);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.eightCreditText.on('pointerup', () => {
      ui.setBetAmount(8);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.sixteenCreditBox.on('pointerup', () => {
      ui.setBetAmount(16);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.sixteenCreditBoxBorder.on('pointerup', () => {
      ui.setBetAmount(16);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });
    ui.sixteenCreditText.on('pointerup', () => {
      ui.setBetAmount(16);
      creditsUpdate.call(this);
      ui.roundOne(game.self.gamblingScore, game.self.credits);
    });

    function playAgain() {
      ui.resetVariables();
      ui.showBetAmounts(game.self.credits);
    }

    ui.playAgainBoxBorder.on('pointerup', () => {
      playAgain.call(this);
    });
    ui.playAgainBox.on('pointerup', () => {
      playAgain.call(this);
    });
    ui.playAgainText.on('pointerup', () => {
      playAgain.call(this);
    });

    ui.foldBoxBorder.on('pointerup', () => {
      ui.fold();
    });
    ui.foldBox.on('pointerup', () => {
      ui.fold();
    });
    ui.foldText.on('pointerup', () => {
      ui.fold();
    });

    function noOpponentsLeft() {
      // hide options, print win message, increase credits, and show play again button
      ui.callBoxBorder.setDepth(0);
      ui.callBox.setDepth(0);
      ui.callText.setDepth(0);
      ui.raiseBoxBorder.setDepth(0);
      ui.raiseBox.setDepth(0);
      ui.raiseText.setDepth(0);
      ui.allInBoxBorder.setDepth(0);
      ui.allInBox.setDepth(0);
      ui.allInText.setDepth(0);
      ui.foldBoxBorder.setDepth(0);
      ui.foldBox.setDepth(0);
      ui.foldText.setDepth(0);
      ui.showBoxBorder.setDepth(0);
      ui.showBox.setDepth(0);
      ui.showText.setDepth(0);
      ui.playAgainBoxBorder.setDepth(2);
      ui.playAgainBox.setDepth(2);
      ui.playAgainText.setDepth(2);
      ui.messageTextLineOne.setText('All opponents are out');
      ui.messageTextLineTwo.setText('');
      ui.messageTextLineThree.setText(`You win ${ui.potAmount} credits`);
      game.self.credits += ui.potAmount;
    }

    function callAction() {
      ui.currentRound += 1;
      ui.foldBoxBorder.setDepth(0);
      ui.foldBox.setDepth(0);
      ui.foldText.setDepth(0);
      ui.raiseBoxBorder.setDepth(0);
      ui.raiseBox.setDepth(0);
      ui.raiseText.setDepth(0);
      ui.callBoxBorder.setDepth(0);
      ui.callBox.setDepth(0);
      ui.callText.setDepth(0);
      game.self.credits -= ui.betAmount;
      ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      if (ui.currentRound === 2) {
        ui.roundTwo(game.self.gamblingScore, game.self.credits);
        if ((ui.opponent1Folded === true) && (ui.opponent2Folded === true)
        && (ui.opponent3Folded === true) && (ui.opponent4Folded === true)
        && (ui.opponent5Folded === true) && (ui.opponent6Folded === true)
        && (ui.opponent7Folded === true) && (ui.opponent8Folded === true)
        && (ui.opponent9Folded === true)) {
          noOpponentsLeft.call(this);
        }
      } else if (ui.currentRound === 3) {
        ui.roundThree(game.self.gamblingScore, game.self.credits);
        if ((ui.opponent1Folded === true) && (ui.opponent2Folded === true)
        && (ui.opponent3Folded === true) && (ui.opponent4Folded === true)
        && (ui.opponent5Folded === true) && (ui.opponent6Folded === true)
        && (ui.opponent7Folded === true) && (ui.opponent8Folded === true)
        && (ui.opponent9Folded === true)) {
          noOpponentsLeft.call(this);
        }
      } else {
        ui.roundFour(game.self.gamblingScore);
        if ((ui.opponent1Folded === true) && (ui.opponent2Folded === true)
        && (ui.opponent3Folded === true) && (ui.opponent4Folded === true)
        && (ui.opponent5Folded === true) && (ui.opponent6Folded === true)
        && (ui.opponent7Folded === true) && (ui.opponent8Folded === true)
        && (ui.opponent9Folded === true)) {
          noOpponentsLeft.call(this);
        }
      }
    }

    ui.callBoxBorder.on('pointerup', () => {
      callAction.call(this);
    });
    ui.callBox.on('pointerup', () => {
      callAction.call(this);
    });
    ui.callText.on('pointerup', () => {
      callAction.call(this);
    });

    function raise() {
      ui.currentRound += 1;
      ui.foldBoxBorder.setDepth(0);
      ui.foldBox.setDepth(0);
      ui.foldText.setDepth(0);
      ui.raiseBoxBorder.setDepth(0);
      ui.raiseBox.setDepth(0);
      ui.raiseText.setDepth(0);
      ui.callBoxBorder.setDepth(0);
      ui.callBox.setDepth(0);
      ui.callText.setDepth(0);
      game.self.credits -= (ui.betAmount * 2);
      ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      ui.betAmount *= 2;
      ui.currentBetText.setText(`Bet Amount: ${ui.betAmount}`);
      if (ui.currentRound === 2) {
        ui.roundTwo(game.self.gamblingScore, game.self.credits);
        if ((ui.opponent1Folded === true) && (ui.opponent2Folded === true)
        && (ui.opponent3Folded === true) && (ui.opponent4Folded === true)
        && (ui.opponent5Folded === true) && (ui.opponent6Folded === true)
        && (ui.opponent7Folded === true) && (ui.opponent8Folded === true)
        && (ui.opponent9Folded === true)) {
          noOpponentsLeft.call(this);
        }
      } else if (ui.currentRound === 3) {
        ui.roundThree(game.self.gamblingScore, game.self.credits);
        if ((ui.opponent1Folded === true) && (ui.opponent2Folded === true)
        && (ui.opponent3Folded === true) && (ui.opponent4Folded === true)
        && (ui.opponent5Folded === true) && (ui.opponent6Folded === true)
        && (ui.opponent7Folded === true) && (ui.opponent8Folded === true)
        && (ui.opponent9Folded === true)) {
          noOpponentsLeft.call(this);
        }
      } else {
        ui.roundFour(game.self.gamblingScore);
        if ((ui.opponent1Folded === true) && (ui.opponent2Folded === true)
        && (ui.opponent3Folded === true) && (ui.opponent4Folded === true)
        && (ui.opponent5Folded === true) && (ui.opponent6Folded === true)
        && (ui.opponent7Folded === true) && (ui.opponent8Folded === true)
        && (ui.opponent9Folded === true)) {
          noOpponentsLeft.call(this);
        }
      }
    }

    ui.raiseBoxBorder.on('pointerup', () => {
      raise.call(this);
    });
    ui.raiseBox.on('pointerup', () => {
      raise.call(this);
    });
    ui.raiseText.on('pointerup', () => {
      raise.call(this);
    });

    function allIn() {
      ui.foldBoxBorder.setDepth(0);
      ui.foldBox.setDepth(0);
      ui.foldText.setDepth(0);
      ui.allInBoxBorder.setDepth(0);
      ui.allInBox.setDepth(0);
      ui.allInText.setDepth(0);
      if ((ui.playerDiff > ui.opponent1diff)
      && (ui.playerDiff > ui.opponent2diff)
      && (ui.playerDiff > ui.opponent3diff)
      && (ui.playerDiff > ui.opponent4diff)
      && (ui.playerDiff > ui.opponent5diff)
      && (ui.playerDiff > ui.opponent6diff)
      && (ui.playerDiff > ui.opponent7diff)
      && (ui.playerDiff > ui.opponent8diff)
      && (ui.playerDiff > ui.opponent9diff)) {
        ui.messageTextLineOne.setText(`You win a total of ${ui.potAmount} credits`);
        ui.messageTextLineTwo.setText('');
        ui.messageTextLineThree.setText('');
        game.self.credits += ui.potAmount;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else {
        ui.messageTextLineOne.setText('Your hand loses against your opponent');
        ui.messageTextLineTwo.setText('');
        ui.messageTextLineThree.setText('');
      }
      ui.playAgainBoxBorder.setDepth(2);
      ui.playAgainBox.setDepth(2);
      ui.playAgainText.setDepth(2);
    }

    ui.allInBoxBorder.on('pointerup', () => {
      allIn.call(this);
    });
    ui.allInBox.on('pointerup', () => {
      allIn.call(this);
    });
    ui.allInText.on('pointerup', () => {
      allIn.call(this);
    });

    function showAction() {
      ui.showBoxBorder.setDepth(0);
      ui.showBox.setDepth(0);
      ui.showText.setDepth(0);
      if ((ui.playerDiff > ui.opponent1diff)
      && (ui.playerDiff > ui.opponent2diff)
      && (ui.playerDiff > ui.opponent3diff)
      && (ui.playerDiff > ui.opponent4diff)
      && (ui.playerDiff > ui.opponent5diff)
      && (ui.playerDiff > ui.opponent6diff)
      && (ui.playerDiff > ui.opponent7diff)
      && (ui.playerDiff > ui.opponent8diff)
      && (ui.playerDiff > ui.opponent9diff)) {
        ui.messageTextLineOne.setText(`You win a total of ${ui.potAmount} credits`);
        ui.messageTextLineTwo.setText('');
        ui.messageTextLineThree.setText('');
        game.self.credits += ui.potAmount;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else {
        ui.messageTextLineOne.setText('You score lower than your opponent');
        ui.messageTextLineTwo.setText('');
        ui.messageTextLineThree.setText('');
      }
      ui.playAgainBoxBorder.setDepth(2);
      ui.playAgainBox.setDepth(2);
      ui.playAgainText.setDepth(2);
    }

    ui.showBoxBorder.on('pointerup', () => {
      showAction.call(this);
    });
    ui.showBox.on('pointerup', () => {
      showAction.call(this);
    });
    ui.showText.on('pointerup', () => {
      showAction.call(this);
    });
  }

  update() {
    if (game.self.gameOver === true) {
      game.gameState.changeScene('GameOverScene', 'CardsScene');
    }

    // scene change logic
    if (game.gameState.nextScene !== 'CardsScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
