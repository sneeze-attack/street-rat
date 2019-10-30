import Phaser from 'phaser';
import Roulette from '../modules/ui/Roulette';
import game from '../index';
import cogImg from '../assets/icons/48x48/cog_white.png';

export default class RouletteScene extends Phaser.Scene {
  constructor() {
    super({ key: 'RouletteScene' });
  }

  preload() {
    this.load.image('cog', cogImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Roulette(this);

    let result;

    ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);

    ui.optionsCog.on('pointerup', () => {
      game.gameState.changeScene('OptionsScene', 'RouletteScene');
    });
    ui.backButton.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'RouletteScene');
    });
    ui.backTextBox.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'RouletteScene');
    });

    ui.placeBetBoxBorder.on('pointerup', () => {
      ui.pickBetAmount(game.self.credits);
    });
    ui.placeBetBox.on('pointerup', () => {
      ui.pickBetAmount(game.self.credits);
    });
    ui.placeBetText.on('pointerup', () => {
      ui.pickBetAmount(game.self.credits);
    });

    ui.oneCreditBoxBorder.on('pointerup', () => {
      ui.betAmount = 1;
      ui.pickBetType();
    });
    ui.oneCreditBox.on('pointerup', () => {
      ui.betAmount = 1;
      ui.pickBetType();
    });
    ui.oneCreditText.on('pointerup', () => {
      ui.betAmount = 1;
      ui.pickBetType();
    });

    ui.fiveCreditBoxBorder.on('pointerup', () => {
      ui.betAmount = 5;
      ui.pickBetType();
    });
    ui.fiveCreditBox.on('pointerup', () => {
      ui.betAmount = 5;
      ui.pickBetType();
    });
    ui.fiveCreditText.on('pointerup', () => {
      ui.betAmount = 5;
      ui.pickBetType();
    });

    ui.twentyfiveCreditBoxBorder.on('pointerup', () => {
      ui.betAmount = 25;
      ui.pickBetType();
    });
    ui.twentyfiveCreditBox.on('pointerup', () => {
      ui.betAmount = 25;
      ui.pickBetType();
    });
    ui.twentyfiveCreditText.on('pointerup', () => {
      ui.betAmount = 25;
      ui.pickBetType();
    });

    ui.fiftyCreditBoxBorder.on('pointerup', () => {
      ui.betAmount = 50;
      ui.pickBetType();
    });
    ui.fiftyCreditBox.on('pointerup', () => {
      ui.betAmount = 50;
      ui.pickBetType();
    });
    ui.fiftyCreditText.on('pointerup', () => {
      ui.betAmount = 50;
      ui.pickBetType();
    });

    ui.hundredCreditBoxBorder.on('pointerup', () => {
      ui.betAmount = 100;
      ui.pickBetType();
    });
    ui.hundredCreditBox.on('pointerup', () => {
      ui.betAmount = 100;
      ui.pickBetType();
    });
    ui.hundredCreditText.on('pointerup', () => {
      ui.betAmount = 100;
      ui.pickBetType();
    });

    ui.fivehundredCreditBoxBorder.on('pointerup', () => {
      ui.betAmount = 500;
      ui.pickBetType();
    });
    ui.fivehundredCreditBox.on('pointerup', () => {
      ui.betAmount = 500;
      ui.pickBetType();
    });
    ui.fivehundredCreditText.on('pointerup', () => {
      ui.betAmount = 500;
      ui.pickBetType();
    });

    // straight-up bet button code
    function straightUpSelection() {
      ui.payout = 35;
      ui.betType = 'Straight-Up';
      ui.typeChosen();
      ui.straightUpBet();
    }
    ui.straightUpBetBoxBorder.on('pointerup', () => {
      straightUpSelection.call(this);
    });
    ui.straightUpBetBox.on('pointerup', () => {
      straightUpSelection.call(this);
    });
    ui.straightUpBetText.on('pointerup', () => {
      straightUpSelection.call(this);
    });

    // split bet button code
    function splitSelection() {
      ui.payout = 17;
      ui.betType = 'Split';
      ui.typeChosen();
      ui.splitBet();
    }
    ui.splitBetBox.on('pointerup', () => {
      splitSelection.call(this);
    });
    ui.splitBetBoxBorder.on('pointerup', () => {
      splitSelection.call(this);
    });
    ui.splitBetText.on('pointerup', () => {
      splitSelection.call(this);
    });

    // Roulette numbers pick code
    ui.oneButton.on('pointerup', () => {
      ui.addPick(1);
    });
    ui.twoButton.on('pointerup', () => {
      ui.addPick(2);
    });
    ui.threeButton.on('pointerup', () => {
      ui.addPick(3);
    });
    ui.fourButton.on('pointerup', () => {
      ui.addPick(4);
    });
    ui.fiveButton.on('pointerup', () => {
      ui.addPick(5);
    });
    ui.sixButton.on('pointerup', () => {
      ui.addPick(6);
    });
    ui.sevenButton.on('pointerup', () => {
      ui.addPick(7);
    });
    ui.eightButton.on('pointerup', () => {
      ui.addPick(8);
    });
    ui.nineButton.on('pointerup', () => {
      ui.addPick(9);
    });
    ui.tenButton.on('pointerup', () => {
      ui.addPick(10);
    });
    ui.elevenButton.on('pointerup', () => {
      ui.addPick(11);
    });
    ui.twelveButton.on('pointerup', () => {
      ui.addPick(12);
    });
    ui.thirteenButton.on('pointerup', () => {
      ui.addPick(13);
    });
    ui.fourteenButton.on('pointerup', () => {
      ui.addPick(14);
    });
    ui.fifteenButton.on('pointerup', () => {
      ui.addPick(15);
    });
    ui.sixteenButton.on('pointerup', () => {
      ui.addPick(16);
    });
    ui.seventeenButton.on('pointerup', () => {
      ui.addPick(17);
    });
    ui.eighteenButton.on('pointerup', () => {
      ui.addPick(18);
    });
    ui.nineteenButton.on('pointerup', () => {
      ui.addPick(19);
    });
    ui.twentyButton.on('pointerup', () => {
      ui.addPick(20);
    });
    ui.twentyoneButton.on('pointerup', () => {
      ui.addPick(21);
    });
    ui.twentytwoButton.on('pointerup', () => {
      ui.addPick(22);
    });
    ui.twentythreeButton.on('pointerup', () => {
      ui.addPick(23);
    });
    ui.twentyfourButton.on('pointerup', () => {
      ui.addPick(24);
    });
    ui.twentyfiveButton.on('pointerup', () => {
      ui.addPick(25);
    });
    ui.twentysixButton.on('pointerup', () => {
      ui.addPick(26);
    });
    ui.twentysevenButton.on('pointerup', () => {
      ui.addPick(27);
    });
    ui.twentyeightButton.on('pointerup', () => {
      ui.addPick(28);
    });
    ui.twentynineButton.on('pointerup', () => {
      ui.addPick(29);
    });
    ui.thirtyButton.on('pointerup', () => {
      ui.addPick(30);
    });
    ui.thirtyoneButton.on('pointerup', () => {
      ui.addPick(31);
    });
    ui.thirtytwoButton.on('pointerup', () => {
      ui.addPick(32);
    });
    ui.thirtythreeButton.on('pointerup', () => {
      ui.addPick(33);
    });
    ui.thirtyfourButton.on('pointerup', () => {
      ui.addPick(34);
    });
    ui.thirtyfiveButton.on('pointerup', () => {
      ui.addPick(35);
    });
    ui.thirtysixButton.on('pointerup', () => {
      ui.addPick(36);
    });
    ui.zeroButton.on('pointerup', () => {
      ui.addPick(0);
    });
    ui.doubleZeroButton.on('pointerup', () => {
      ui.addPick(37);
    });

    function confirmBet() {
      let net;
      if (ui.picks[0] && ui.betType === 'Straight-Up') {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Split'
        && ((ui.picks[0] === 0
          && ((ui.picks[1] === 1 || ui.picks[1] === 37 || ui.picks[1] === 2))
        ) || (ui.picks[0] === 37
          && ((ui.picks[1] === 0 || ui.picks[1] === 2 || ui.picks[1] === 3))
        ) || (ui.picks[0] === 1
          && ((ui.picks[1] === 0 || ui.picks[1] === 2 || ui.picks[1] === 4))
        ) || (ui.picks[0] === 2
          && ((ui.picks[1] === 0 || ui.picks[1] === 1 || ui.picks[1] === 37 || ui.picks[1] === 3 || ui.picks[1] === 5))
        ) || (ui.picks[0] === 3
          && ((ui.picks[1] === 37 || ui.picks[1] === 2 || ui.picks[1] === 6))
        ) || (ui.picks[0] === 4
          && ((ui.picks[1] === 1 || ui.picks[1] === 5 || ui.picks[1] === 7))
        ) || (ui.picks[0] === 5
          && ((ui.picks[1] === 2 || ui.picks[1] === 4 || ui.picks[1] === 6 || ui.picks[1] === 8))
        ) || (ui.picks[0] === 6
          && ((ui.picks[1] === 3 || ui.picks[1] === 5 || ui.picks[1] === 9))
        ) || (ui.picks[0] === 7
          && ((ui.picks[1] === 4 || ui.picks[1] === 8 || ui.picks[1] === 10))
        ) || (ui.picks[0] === 8
          && ((ui.picks[1] === 5 || ui.picks[1] === 7 || ui.picks[1] === 9 || ui.picks[1] === 11))
        ) || (ui.picks[0] === 9
          && ((ui.picks[1] === 6 || ui.picks[1] === 8 || ui.picks[1] === 12))
        ) || (ui.picks[0] === 10
          && ((ui.picks[1] === 7 || ui.picks[1] === 11 || ui.picks[1] === 13))
        ) || (ui.picks[0] === 11
          && ((ui.picks[1] === 8 || ui.picks[1] === 10 || ui.picks[1] === 12 || ui.picks[1] === 14))
        ) || (ui.picks[0] === 12
          && ((ui.picks[1] === 9 || ui.picks[1] === 11 || ui.picks[1] === 15))
        ) || (ui.picks[0] === 13
          && ((ui.picks[1] === 10 || ui.picks[1] === 14 || ui.picks[1] === 16))
        ) || (ui.picks[0] === 14
          && ((ui.picks[1] === 11 || ui.picks[1] === 13 || ui.picks[1] === 15 || ui.picks[1] === 17))
        ) || (ui.picks[0] === 15
          && ((ui.picks[1] === 12 || ui.picks[1] === 14 || ui.picks[1] === 18))
        ) || (ui.picks[0] === 16
          && ((ui.picks[1] === 13 || ui.picks[1] === 17 || ui.picks[1] === 19))
        ) || (ui.picks[0] === 17
          && ((ui.picks[1] === 14 || ui.picks[1] === 16 || ui.picks[1] === 18 || ui.picks[1] === 20))
        ) || (ui.picks[0] === 18
          && ((ui.picks[1] === 15 || ui.picks[1] === 17 || ui.picks[1] === 21))
        ) || (ui.picks[0] === 19
          && ((ui.picks[1] === 16 || ui.picks[1] === 20 || ui.picks[1] === 22))
        ) || (ui.picks[0] === 20
          && ((ui.picks[1] === 17 || ui.picks[1] === 19 || ui.picks[1] === 21 || ui.picks[1] === 23))
        ) || (ui.picks[0] === 21
          && ((ui.picks[1] === 18 || ui.picks[1] === 20 || ui.picks[1] === 24))
        ) || (ui.picks[0] === 22
          && ((ui.picks[1] === 19 || ui.picks[1] === 23 || ui.picks[1] === 25))
        ) || (ui.picks[0] === 23
          && ((ui.picks[1] === 20 || ui.picks[1] === 22 || ui.picks[1] === 24 || ui.picks[1] === 26))
        ) || (ui.picks[0] === 24
          && ((ui.picks[1] === 21 || ui.picks[1] === 23 || ui.picks[1] === 27))
        ) || (ui.picks[0] === 25
          && ((ui.picks[1] === 22 || ui.picks[1] === 26 || ui.picks[1] === 28))
        ) || (ui.picks[0] === 26
          && ((ui.picks[1] === 23 || ui.picks[1] === 25 || ui.picks[1] === 27 || ui.picks[1] === 29))
        ) || (ui.picks[0] === 27
          && ((ui.picks[1] === 24 || ui.picks[1] === 26 || ui.picks[1] === 30))
        ) || (ui.picks[0] === 28
          && ((ui.picks[1] === 25 || ui.picks[1] === 29 || ui.picks[1] === 31))
        ) || (ui.picks[0] === 29
          && ((ui.picks[1] === 26 || ui.picks[1] === 28 || ui.picks[1] === 30 || ui.picks[1] === 32))
        ) || (ui.picks[0] === 30
          && ((ui.picks[1] === 27 || ui.picks[1] === 29 || ui.picks[1] === 33))
        ) || (ui.picks[0] === 31
          && ((ui.picks[1] === 28 || ui.picks[1] === 32 || ui.picks[1] === 34))
        ) || (ui.picks[0] === 32
          && ((ui.picks[1] === 29 || ui.picks[1] === 31 || ui.picks[1] === 33 || ui.picks[1] === 35))
        ) || (ui.picks[0] === 33
          && ((ui.picks[1] === 30 || ui.picks[1] === 32 || ui.picks[1] === 36))
        ) || (ui.picks[0] === 34
          && ((ui.picks[1] === 31 || ui.picks[1] === 35))
        ) || (ui.picks[0] === 35
          && ((ui.picks[1] === 32 || ui.picks[1] === 34 || ui.picks[1] === 36))
        ) || (ui.picks[0] === 36
          && ((ui.picks[1] === 33 || ui.picks[1] === 35))
        ))
      ) {
        // console.log('OK!');
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      }
    }

    ui.confirmBetBox.on('pointerup', () => {
      confirmBet.call(this);
    });
    ui.confirmBetBoxBorder.on('pointerup', () => {
      confirmBet.call(this);
    });
    ui.confirmBetText.on('pointerup', () => {
      confirmBet.call(this);
    });

    // click to continue code
    ui.resultsShadeBox.on('pointerup', () => {
      ui.resetScene();
    });
    ui.resultsBoxBorder.on('pointerup', () => {
      ui.resetScene();
    });
    ui.resultsBox.on('pointerup', () => {
      ui.resetScene();
    });
    ui.rollTitle.on('pointerup', () => {
      ui.resetScene();
    });
    ui.scoreText.on('pointerup', () => {
      ui.resetScene();
    });
    ui.scoreNumber.on('pointerup', () => {
      ui.resetScene();
    });
    ui.yourBetType.on('pointerup', () => {
      ui.resetScene();
    });
    ui.yourNumbers.on('pointerup', () => {
      ui.resetScene();
    });
    ui.yourPayout.on('pointerup', () => {
      ui.resetScene();
    });
    ui.yourMessage.on('pointerup', () => {
      ui.resetScene();
    });
    ui.clickToContinueText.on('pointerup', () => {
      ui.resetScene();
    });
  }

  update() {
    if (game.self.gameOver === true) {
      game.gameState.changeScene('GameOverScene', 'RouletteScene');
    }

    // scene change logic
    if (game.gameState.nextScene !== 'RouletteScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
