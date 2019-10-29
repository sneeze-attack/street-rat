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

    let result;

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

    function straightUpSelection() {
      ui.payout = 35;
      ui.betType = 'Straight-up';
      ui.typeChosen();
      ui.straightUpBet();
    }

    ui.straightUpBetBoxBorder.on('pointerup', function () {
      straightUpSelection.call(this);
    });
    ui.straightUpBetBox.on('pointerup', function () {
      straightUpSelection.call(this);
    });
    ui.straightUpBetText.on('pointerup', function () {
      straightUpSelection.call(this);
    });

    ui.oneButton.on('pointerup', function () {
      ui.addPick(1);
    });
    ui.twoButton.on('pointerup', function () {
      ui.addPick(2);
    });
    ui.threeButton.on('pointerup', function () {
      ui.addPick(3);
    });
    ui.fourButton.on('pointerup', function () {
      ui.addPick(4);
    });
    ui.fiveButton.on('pointerup', function () {
      ui.addPick(5);
    });
    ui.sixButton.on('pointerup', function () {
      ui.addPick(6);
    });
    ui.sevenButton.on('pointerup', function () {
      ui.addPick(7);
    });
    ui.eightButton.on('pointerup', function () {
      ui.addPick(8);
    });
    ui.nineButton.on('pointerup', function () {
      ui.addPick(9);
    });
    ui.tenButton.on('pointerup', function () {
      ui.addPick(10);
    });
    ui.elevenButton.on('pointerup', function () {
      ui.addPick(11);
    });
    ui.twelveButton.on('pointerup', function () {
      ui.addPick(12);
    });
    ui.thirteenButton.on('pointerup', function () {
      ui.addPick(13);
    });
    ui.fourteenButton.on('pointerup', function () {
      ui.addPick(14);
    });
    ui.fifteenButton.on('pointerup', function () {
      ui.addPick(15);
    });
    ui.sixteenButton.on('pointerup', function () {
      ui.addPick(16);
    });
    ui.seventeenButton.on('pointerup', function () {
      ui.addPick(17);
    });
    ui.eighteenButton.on('pointerup', function () {
      ui.addPick(18);
    });
    ui.nineteenButton.on('pointerup', function () {
      ui.addPick(19);
    });
    ui.twentyButton.on('pointerup', function () {
      ui.addPick(20);
    });
    ui.twentyoneButton.on('pointerup', function () {
      ui.addPick(21);
    });
    ui.twentytwoButton.on('pointerup', function () {
      ui.addPick(22);
    });
    ui.twentythreeButton.on('pointerup', function () {
      ui.addPick(23);
    });
    ui.twentyfourButton.on('pointerup', function () {
      ui.addPick(24);
    });
    ui.twentyfiveButton.on('pointerup', function () {
      ui.addPick(25);
    });
    ui.twentysixButton.on('pointerup', function () {
      ui.addPick(26);
    });
    ui.twentysevenButton.on('pointerup', function () {
      ui.addPick(27);
    });
    ui.twentyeightButton.on('pointerup', function () {
      ui.addPick(28);
    });
    ui.twentynineButton.on('pointerup', function () {
      ui.addPick(29);
    });
    ui.thirtyButton.on('pointerup', function () {
      ui.addPick(30);
    });
    ui.thirtyoneButton.on('pointerup', function () {
      ui.addPick(31);
    });
    ui.thirtytwoButton.on('pointerup', function () {
      ui.addPick(32);
    });
    ui.thirtythreeButton.on('pointerup', function () {
      ui.addPick(33);
    });
    ui.thirtyfourButton.on('pointerup', function () {
      ui.addPick(34);
    });
    ui.thirtyfiveButton.on('pointerup', function () {
      ui.addPick(35);
    });
    ui.thirtysixButton.on('pointerup', function () {
      ui.addPick(36);
    });
    ui.zeroButton.on('pointerup', function () {
      ui.addPick(0);
    });
    ui.doubleZeroButton.on('pointerup', function () {
      ui.addPick(37);
    });

    function confirmBet() {
      if (ui.picks[0] && ui.betType === 'Straight-up') {
        result = ui.spinTheWheel();
        ui.showSpinResults(result);
      };
    }

    ui.confirmBetBox.on('pointerup', function () {
      confirmBet.call(this);
    });
    ui.confirmBetBoxBorder.on('pointerup', function () {
      confirmBet.call(this);
    });
    ui.confirmBetText.on('pointerup', function () {
      confirmBet.call(this);
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
