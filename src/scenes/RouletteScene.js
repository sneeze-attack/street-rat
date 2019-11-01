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

    function inArray(array, value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == value) return true;
      }
      return false;
    }

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

    // street bet button code
    function streetSelection() {
      ui.payout = 11;
      ui.betType = 'Street';
      ui.typeChosen();
      ui.streetBet();
    }
    ui.streetBetBox.on('pointerup', () => {
      streetSelection.call(this);
    });
    ui.streetBetBoxBorder.on('pointerup', () => {
      streetSelection.call(this);
    });
    ui.streetBetText.on('pointerup', () => {
      streetSelection.call(this);
    });

    // corner bet button code
    function cornerSelection() {
      ui.payout = 8;
      ui.betType = 'Corner';
      ui.typeChosen();
      ui.cornerBet();
    }
    ui.cornerBetBox.on('pointerup', () => {
      cornerSelection.call(this);
    });
    ui.cornerBetBoxBorder.on('pointerup', () => {
      cornerSelection.call(this);
    });
    ui.cornerBetText.on('pointerup', () => {
      cornerSelection.call(this);
    });

    // sucker bet button code
    function suckerSelection() {
      ui.payout = 6;
      ui.betType = 'Sucker';
      ui.typeChosen();
      ui.suckerBet();
    }
    ui.suckerBetBox.on('pointerup', () => {
      suckerSelection.call(this);
    });
    ui.suckerBetBoxBorder.on('pointerup', () => {
      suckerSelection.call(this);
    });
    ui.suckerBetText.on('pointerup', () => {
      suckerSelection.call(this);
    });

    // line bet button code
    function lineSelection() {
      ui.payout = 5;
      ui.betType = 'Line';
      ui.typeChosen();
      ui.lineBet();
    }
    ui.lineBetBox.on('pointerup', () => {
      lineSelection.call(this);
    });
    ui.lineBetBoxBorder.on('pointerup', () => {
      lineSelection.call(this);
    });
    ui.lineBetText.on('pointerup', () => {
      lineSelection.call(this);
    });

    // row bet button code
    function rowSelection() {
      ui.payout = 2;
      ui.betType = 'Row';
      ui.typeChosen();
      ui.rowBet();
    }
    ui.rowBetBox.on('pointerup', () => {
      rowSelection.call(this);
    });
    ui.rowBetBoxBorder.on('pointerup', () => {
      rowSelection.call(this);
    });
    ui.rowBetText.on('pointerup', () => {
      rowSelection.call(this);
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
    ui.topTwoToOneButton.on('pointerup', () => {
      ui.addPick(36);
      ui.addPick(33);
      ui.addPick(30);
      ui.addPick(27);
      ui.addPick(24);
      ui.addPick(21);
      ui.addPick(18);
      ui.addPick(15);
      ui.addPick(12);
      ui.addPick(9);
      ui.addPick(6);
      ui.addPick(3);
    });
    ui.middleTwoToOneButton.on('pointerup', () => {
      ui.addPick(35);
      ui.addPick(32);
      ui.addPick(29);
      ui.addPick(26);
      ui.addPick(23);
      ui.addPick(20);
      ui.addPick(17);
      ui.addPick(14);
      ui.addPick(11);
      ui.addPick(8);
      ui.addPick(5);
      ui.addPick(2);
    });
    ui.bottomTwoToOneButton.on('pointerup', () => {
      ui.addPick(34);
      ui.addPick(31);
      ui.addPick(28);
      ui.addPick(25);
      ui.addPick(22);
      ui.addPick(19);
      ui.addPick(16);
      ui.addPick(13);
      ui.addPick(10);
      ui.addPick(7);
      ui.addPick(4);
      ui.addPick(1);
    });

    function confirmBet() {
      let net;
      ui.lastThreePicks = [];
      ui.lastThreePicks.push(ui.picks[0]);
      ui.lastThreePicks.push(ui.picks[1]);
      ui.lastThreePicks.push(ui.picks[2]);
      ui.lastFourPicks = [];
      ui.lastFourPicks.push(ui.picks[0]);
      ui.lastFourPicks.push(ui.picks[1]);
      ui.lastFourPicks.push(ui.picks[2]);
      ui.lastFourPicks.push(ui.picks[3]);
      ui.suckerPicks = [];
      ui.suckerPicks.push(ui.picks[0]);
      ui.suckerPicks.push(ui.picks[1]);
      ui.suckerPicks.push(ui.picks[2]);
      ui.suckerPicks.push(ui.picks[3]);
      ui.suckerPicks.push(ui.picks[4]);
      ui.linePicks = [];
      ui.linePicks.push(ui.picks[0]);
      ui.linePicks.push(ui.picks[1]);
      ui.linePicks.push(ui.picks[2]);
      ui.linePicks.push(ui.picks[3]);
      ui.linePicks.push(ui.picks[4]);
      ui.linePicks.push(ui.picks[5]);
      ui.rowPicks = [];
      ui.rowPicks.push(ui.picks[0]);
      ui.rowPicks.push(ui.picks[1]);
      ui.rowPicks.push(ui.picks[2]);
      ui.rowPicks.push(ui.picks[3]);
      ui.rowPicks.push(ui.picks[4]);
      ui.rowPicks.push(ui.picks[5]);
      ui.rowPicks.push(ui.picks[6]);
      ui.rowPicks.push(ui.picks[7]);
      ui.rowPicks.push(ui.picks[8]);
      ui.rowPicks.push(ui.picks[9]);
      ui.rowPicks.push(ui.picks[10]);
      ui.rowPicks.push(ui.picks[11]);
      if (ui.picks[0] && ui.betType === 'Straight-Up') {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Split'
        && ((ui.picks[0] === 0
          && (ui.picks[1] === 1 || ui.picks[1] === 37 || ui.picks[1] === 2)
        ) || (ui.picks[0] === 37
          && (ui.picks[1] === 0 || ui.picks[1] === 2 || ui.picks[1] === 3)
        ) || (ui.picks[0] === 1
          && (ui.picks[1] === 0 || ui.picks[1] === 2 || ui.picks[1] === 4)
        ) || (ui.picks[0] === 2
          && (ui.picks[1] === 0 || ui.picks[1] === 1 || ui.picks[1] === 37 || ui.picks[1] === 3 || ui.picks[1] === 5)
        ) || (ui.picks[0] === 3
          && (ui.picks[1] === 37 || ui.picks[1] === 2 || ui.picks[1] === 6)
        ) || (ui.picks[0] === 4
          && (ui.picks[1] === 1 || ui.picks[1] === 5 || ui.picks[1] === 7)
        ) || (ui.picks[0] === 5
          && (ui.picks[1] === 2 || ui.picks[1] === 4 || ui.picks[1] === 6 || ui.picks[1] === 8)
        ) || (ui.picks[0] === 6
          && (ui.picks[1] === 3 || ui.picks[1] === 5 || ui.picks[1] === 9)
        ) || (ui.picks[0] === 7
          && (ui.picks[1] === 4 || ui.picks[1] === 8 || ui.picks[1] === 10)
        ) || (ui.picks[0] === 8
          && (ui.picks[1] === 5 || ui.picks[1] === 7 || ui.picks[1] === 9 || ui.picks[1] === 11)
        ) || (ui.picks[0] === 9
          && (ui.picks[1] === 6 || ui.picks[1] === 8 || ui.picks[1] === 12)
        ) || (ui.picks[0] === 10
          && (ui.picks[1] === 7 || ui.picks[1] === 11 || ui.picks[1] === 13)
        ) || (ui.picks[0] === 11
          && (ui.picks[1] === 8 || ui.picks[1] === 10 || ui.picks[1] === 12 || ui.picks[1] === 14)
        ) || (ui.picks[0] === 12
          && (ui.picks[1] === 9 || ui.picks[1] === 11 || ui.picks[1] === 15)
        ) || (ui.picks[0] === 13
          && (ui.picks[1] === 10 || ui.picks[1] === 14 || ui.picks[1] === 16)
        ) || (ui.picks[0] === 14
          && (ui.picks[1] === 11 || ui.picks[1] === 13 || ui.picks[1] === 15 || ui.picks[1] === 17)
        ) || (ui.picks[0] === 15
          && (ui.picks[1] === 12 || ui.picks[1] === 14 || ui.picks[1] === 18)
        ) || (ui.picks[0] === 16
          && (ui.picks[1] === 13 || ui.picks[1] === 17 || ui.picks[1] === 19)
        ) || (ui.picks[0] === 17
          && (ui.picks[1] === 14 || ui.picks[1] === 16 || ui.picks[1] === 18 || ui.picks[1] === 20)
        ) || (ui.picks[0] === 18
          && (ui.picks[1] === 15 || ui.picks[1] === 17 || ui.picks[1] === 21)
        ) || (ui.picks[0] === 19
          && (ui.picks[1] === 16 || ui.picks[1] === 20 || ui.picks[1] === 22)
        ) || (ui.picks[0] === 20
          && (ui.picks[1] === 17 || ui.picks[1] === 19 || ui.picks[1] === 21 || ui.picks[1] === 23)
        ) || (ui.picks[0] === 21
          && (ui.picks[1] === 18 || ui.picks[1] === 20 || ui.picks[1] === 24)
        ) || (ui.picks[0] === 22
          && (ui.picks[1] === 19 || ui.picks[1] === 23 || ui.picks[1] === 25)
        ) || (ui.picks[0] === 23
          && (ui.picks[1] === 20 || ui.picks[1] === 22 || ui.picks[1] === 24 || ui.picks[1] === 26)
        ) || (ui.picks[0] === 24
          && (ui.picks[1] === 21 || ui.picks[1] === 23 || ui.picks[1] === 27)
        ) || (ui.picks[0] === 25
          && (ui.picks[1] === 22 || ui.picks[1] === 26 || ui.picks[1] === 28)
        ) || (ui.picks[0] === 26
          && (ui.picks[1] === 23 || ui.picks[1] === 25 || ui.picks[1] === 27 || ui.picks[1] === 29)
        ) || (ui.picks[0] === 27
          && (ui.picks[1] === 24 || ui.picks[1] === 26 || ui.picks[1] === 30)
        ) || (ui.picks[0] === 28
          && (ui.picks[1] === 25 || ui.picks[1] === 29 || ui.picks[1] === 31)
        ) || (ui.picks[0] === 29
          && (ui.picks[1] === 26 || ui.picks[1] === 28 || ui.picks[1] === 30 || ui.picks[1] === 32)
        ) || (ui.picks[0] === 30
          && (ui.picks[1] === 27 || ui.picks[1] === 29 || ui.picks[1] === 33)
        ) || (ui.picks[0] === 31
          && (ui.picks[1] === 28 || ui.picks[1] === 32 || ui.picks[1] === 34)
        ) || (ui.picks[0] === 32
          && (ui.picks[1] === 29 || ui.picks[1] === 31 || ui.picks[1] === 33 || ui.picks[1] === 35)
        ) || (ui.picks[0] === 33
          && (ui.picks[1] === 30 || ui.picks[1] === 32 || ui.picks[1] === 36)
        ) || (ui.picks[0] === 34
          && (ui.picks[1] === 31 || ui.picks[1] === 35)
        ) || (ui.picks[0] === 35
          && (ui.picks[1] === 32 || ui.picks[1] === 34 || ui.picks[1] === 36)
        ) || (ui.picks[0] === 36
          && (ui.picks[1] === 33 || ui.picks[1] === 35)
        ))
      ) {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Street'
      && (((inArray(ui.lastThreePicks, 0) === true)
        && (inArray(ui.lastThreePicks, 1) === true)
        && (inArray(ui.lastThreePicks, 2) === true))
      || ((inArray(ui.lastThreePicks, 0) === true)
        && (inArray(ui.lastThreePicks, 37) === true)
        && (inArray(ui.lastThreePicks, 2) === true))
      || ((inArray(ui.lastThreePicks, 37) === true)
        && (inArray(ui.lastThreePicks, 3) === true)
        && (inArray(ui.lastThreePicks, 2) === true))
      || ((inArray(ui.lastThreePicks, 1) === true)
        && (inArray(ui.lastThreePicks, 2) === true)
        && (inArray(ui.lastThreePicks, 3) === true))
      || ((inArray(ui.lastThreePicks, 4) === true)
        && (inArray(ui.lastThreePicks, 5) === true)
        && (inArray(ui.lastThreePicks, 6) === true))
      || ((inArray(ui.lastThreePicks, 7) === true)
        && (inArray(ui.lastThreePicks, 8) === true)
        && (inArray(ui.lastThreePicks, 9) === true))
      || ((inArray(ui.lastThreePicks, 10) === true)
        && (inArray(ui.lastThreePicks, 11) === true)
        && (inArray(ui.lastThreePicks, 12) === true))
      || ((inArray(ui.lastThreePicks, 13) === true)
        && (inArray(ui.lastThreePicks, 14) === true)
        && (inArray(ui.lastThreePicks, 15) === true))
      || ((inArray(ui.lastThreePicks, 16) === true)
        && (inArray(ui.lastThreePicks, 17) === true)
        && (inArray(ui.lastThreePicks, 18) === true))
      || ((inArray(ui.lastThreePicks, 19) === true)
        && (inArray(ui.lastThreePicks, 20) === true)
        && (inArray(ui.lastThreePicks, 21) === true))
      || ((inArray(ui.lastThreePicks, 22) === true)
        && (inArray(ui.lastThreePicks, 23) === true)
        && (inArray(ui.lastThreePicks, 24) === true))
      || ((inArray(ui.lastThreePicks, 25) === true)
        && (inArray(ui.lastThreePicks, 26) === true)
        && (inArray(ui.lastThreePicks, 27) === true))
      || ((inArray(ui.lastThreePicks, 28) === true)
        && (inArray(ui.lastThreePicks, 29) === true)
        && (inArray(ui.lastThreePicks, 30) === true))
      || ((inArray(ui.lastThreePicks, 31) === true)
        && (inArray(ui.lastThreePicks, 32) === true)
        && (inArray(ui.lastThreePicks, 33) === true))
      || ((inArray(ui.lastThreePicks, 34) === true)
        && (inArray(ui.lastThreePicks, 35) === true)
        && (inArray(ui.lastThreePicks, 36) === true)))) {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Corner'
      && (((inArray(ui.lastFourPicks, 1) === true)
        && (inArray(ui.lastFourPicks, 2) === true)
        && (inArray(ui.lastFourPicks, 5) === true)
        && (inArray(ui.lastFourPicks, 4) === true))
      || ((inArray(ui.lastFourPicks, 2) === true)
        && (inArray(ui.lastFourPicks, 3) === true)
        && (inArray(ui.lastFourPicks, 6) === true)
        && (inArray(ui.lastFourPicks, 5) === true))
      || ((inArray(ui.lastFourPicks, 4) === true)
        && (inArray(ui.lastFourPicks, 7) === true)
        && (inArray(ui.lastFourPicks, 8) === true)
        && (inArray(ui.lastFourPicks, 5) === true))
      || ((inArray(ui.lastFourPicks, 5) === true)
        && (inArray(ui.lastFourPicks, 8) === true)
        && (inArray(ui.lastFourPicks, 9) === true)
        && (inArray(ui.lastFourPicks, 6) === true))
      || ((inArray(ui.lastFourPicks, 7) === true)
        && (inArray(ui.lastFourPicks, 10) === true)
        && (inArray(ui.lastFourPicks, 11) === true)
        && (inArray(ui.lastFourPicks, 8) === true))
      || ((inArray(ui.lastFourPicks, 8) === true)
        && (inArray(ui.lastFourPicks, 11) === true)
        && (inArray(ui.lastFourPicks, 12) === true)
        && (inArray(ui.lastFourPicks, 9) === true))
      || ((inArray(ui.lastFourPicks, 10) === true)
        && (inArray(ui.lastFourPicks, 11) === true)
        && (inArray(ui.lastFourPicks, 14) === true)
        && (inArray(ui.lastFourPicks, 13) === true))
      || ((inArray(ui.lastFourPicks, 11) === true)
        && (inArray(ui.lastFourPicks, 12) === true)
        && (inArray(ui.lastFourPicks, 15) === true)
        && (inArray(ui.lastFourPicks, 14) === true))
      || ((inArray(ui.lastFourPicks, 13) === true)
        && (inArray(ui.lastFourPicks, 14) === true)
        && (inArray(ui.lastFourPicks, 17) === true)
        && (inArray(ui.lastFourPicks, 16) === true))
      || ((inArray(ui.lastFourPicks, 14) === true)
        && (inArray(ui.lastFourPicks, 15) === true)
        && (inArray(ui.lastFourPicks, 18) === true)
        && (inArray(ui.lastFourPicks, 17) === true))
      || ((inArray(ui.lastFourPicks, 16) === true)
        && (inArray(ui.lastFourPicks, 17) === true)
        && (inArray(ui.lastFourPicks, 20) === true)
        && (inArray(ui.lastFourPicks, 19) === true))
      || ((inArray(ui.lastFourPicks, 17) === true)
        && (inArray(ui.lastFourPicks, 18) === true)
        && (inArray(ui.lastFourPicks, 21) === true)
        && (inArray(ui.lastFourPicks, 20) === true))
      || ((inArray(ui.lastFourPicks, 19) === true)
        && (inArray(ui.lastFourPicks, 20) === true)
        && (inArray(ui.lastFourPicks, 23) === true)
        && (inArray(ui.lastFourPicks, 22) === true))
      || ((inArray(ui.lastFourPicks, 20) === true)
        && (inArray(ui.lastFourPicks, 21) === true)
        && (inArray(ui.lastFourPicks, 23) === true)
        && (inArray(ui.lastFourPicks, 24) === true))
      || ((inArray(ui.lastFourPicks, 22) === true)
        && (inArray(ui.lastFourPicks, 23) === true)
        && (inArray(ui.lastFourPicks, 25) === true)
        && (inArray(ui.lastFourPicks, 26) === true))
      || ((inArray(ui.lastFourPicks, 23) === true)
        && (inArray(ui.lastFourPicks, 24) === true)
        && (inArray(ui.lastFourPicks, 26) === true)
        && (inArray(ui.lastFourPicks, 27) === true))
      || ((inArray(ui.lastFourPicks, 25) === true)
        && (inArray(ui.lastFourPicks, 26) === true)
        && (inArray(ui.lastFourPicks, 28) === true)
        && (inArray(ui.lastFourPicks, 29) === true))
      || ((inArray(ui.lastFourPicks, 26) === true)
        && (inArray(ui.lastFourPicks, 27) === true)
        && (inArray(ui.lastFourPicks, 29) === true)
        && (inArray(ui.lastFourPicks, 30) === true))
      || ((inArray(ui.lastFourPicks, 28) === true)
        && (inArray(ui.lastFourPicks, 29) === true)
        && (inArray(ui.lastFourPicks, 31) === true)
        && (inArray(ui.lastFourPicks, 32) === true))
      || ((inArray(ui.lastFourPicks, 29) === true)
        && (inArray(ui.lastFourPicks, 30) === true)
        && (inArray(ui.lastFourPicks, 32) === true)
        && (inArray(ui.lastFourPicks, 33) === true))
      || ((inArray(ui.lastFourPicks, 31) === true)
        && (inArray(ui.lastFourPicks, 32) === true)
        && (inArray(ui.lastFourPicks, 34) === true)
        && (inArray(ui.lastFourPicks, 35) === true))
      || ((inArray(ui.lastFourPicks, 32) === true)
        && (inArray(ui.lastFourPicks, 33) === true)
        && (inArray(ui.lastFourPicks, 35) === true)
        && (inArray(ui.lastFourPicks, 36) === true)))) {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Sucker'
      && (inArray(ui.suckerPicks, 0) === true)
        && (inArray(ui.suckerPicks, 37) === true)
        && (inArray(ui.suckerPicks, 1) === true)
        && (inArray(ui.suckerPicks, 2) === true)
        && (inArray(ui.suckerPicks, 3) === true)) {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Line'
      && (((inArray(ui.linePicks, 1) === true)
        && (inArray(ui.linePicks, 2) === true)
        && (inArray(ui.linePicks, 3) === true)
        && (inArray(ui.linePicks, 4) === true)
        && (inArray(ui.linePicks, 5) === true)
        && (inArray(ui.linePicks, 6) === true))
      || ((inArray(ui.linePicks, 4) === true)
        && (inArray(ui.linePicks, 5) === true)
        && (inArray(ui.linePicks, 6) === true)
        && (inArray(ui.linePicks, 7) === true)
        && (inArray(ui.linePicks, 8) === true)
        && (inArray(ui.linePicks, 9) === true))
      || ((inArray(ui.linePicks, 7) === true)
        && (inArray(ui.linePicks, 8) === true)
        && (inArray(ui.linePicks, 9) === true)
        && (inArray(ui.linePicks, 10) === true)
        && (inArray(ui.linePicks, 11) === true)
        && (inArray(ui.linePicks, 12) === true))
      || ((inArray(ui.linePicks, 10) === true)
        && (inArray(ui.linePicks, 11) === true)
        && (inArray(ui.linePicks, 12) === true)
        && (inArray(ui.linePicks, 13) === true)
        && (inArray(ui.linePicks, 14) === true)
        && (inArray(ui.linePicks, 15) === true))
      || ((inArray(ui.linePicks, 13) === true)
        && (inArray(ui.linePicks, 14) === true)
        && (inArray(ui.linePicks, 15) === true)
        && (inArray(ui.linePicks, 16) === true)
        && (inArray(ui.linePicks, 17) === true)
        && (inArray(ui.linePicks, 18) === true))
      || ((inArray(ui.linePicks, 16) === true)
        && (inArray(ui.linePicks, 17) === true)
        && (inArray(ui.linePicks, 18) === true)
        && (inArray(ui.linePicks, 19) === true)
        && (inArray(ui.linePicks, 20) === true)
        && (inArray(ui.linePicks, 21) === true))
      || ((inArray(ui.linePicks, 19) === true)
        && (inArray(ui.linePicks, 20) === true)
        && (inArray(ui.linePicks, 21) === true)
        && (inArray(ui.linePicks, 22) === true)
        && (inArray(ui.linePicks, 23) === true)
        && (inArray(ui.linePicks, 24) === true))
      || ((inArray(ui.linePicks, 22) === true)
        && (inArray(ui.linePicks, 23) === true)
        && (inArray(ui.linePicks, 24) === true)
        && (inArray(ui.linePicks, 25) === true)
        && (inArray(ui.linePicks, 26) === true)
        && (inArray(ui.linePicks, 27) === true))
      || ((inArray(ui.linePicks, 25) === true)
        && (inArray(ui.linePicks, 26) === true)
        && (inArray(ui.linePicks, 27) === true)
        && (inArray(ui.linePicks, 28) === true)
        && (inArray(ui.linePicks, 29) === true)
        && (inArray(ui.linePicks, 30) === true))
      || ((inArray(ui.linePicks, 28) === true)
        && (inArray(ui.linePicks, 29) === true)
        && (inArray(ui.linePicks, 30) === true)
        && (inArray(ui.linePicks, 31) === true)
        && (inArray(ui.linePicks, 32) === true)
        && (inArray(ui.linePicks, 33) === true))
      || ((inArray(ui.linePicks, 31) === true)
        && (inArray(ui.linePicks, 32) === true)
        && (inArray(ui.linePicks, 33) === true)
        && (inArray(ui.linePicks, 34) === true)
        && (inArray(ui.linePicks, 35) === true)
        && (inArray(ui.linePicks, 36) === true)))) {
        result = ui.spinTheWheel();
        net = ui.showSpinResults(result);
        game.self.credits += net;
        ui.playerCreditsText.setText(`Credits: ${game.self.credits}`);
      } else if (ui.betType === 'Row'
      && (((inArray(ui.rowPicks, 3) === true)
        && (inArray(ui.rowPicks, 6) === true)
        && (inArray(ui.rowPicks, 9) === true)
        && (inArray(ui.rowPicks, 12) === true)
        && (inArray(ui.rowPicks, 15) === true)
        && (inArray(ui.rowPicks, 18) === true)
        && (inArray(ui.rowPicks, 21) === true)
        && (inArray(ui.rowPicks, 24) === true)
        && (inArray(ui.rowPicks, 27) === true)
        && (inArray(ui.rowPicks, 30) === true)
        && (inArray(ui.rowPicks, 33) === true)
        && (inArray(ui.rowPicks, 36) === true))
      || ((inArray(ui.rowPicks, 2) === true)
        && (inArray(ui.rowPicks, 5) === true)
        && (inArray(ui.rowPicks, 8) === true)
        && (inArray(ui.rowPicks, 11) === true)
        && (inArray(ui.rowPicks, 14) === true)
        && (inArray(ui.rowPicks, 17) === true)
        && (inArray(ui.rowPicks, 20) === true)
        && (inArray(ui.rowPicks, 23) === true)
        && (inArray(ui.rowPicks, 26) === true)
        && (inArray(ui.rowPicks, 29) === true)
        && (inArray(ui.rowPicks, 32) === true)
        && (inArray(ui.rowPicks, 35) === true))
      || ((inArray(ui.rowPicks, 1) === true)
        && (inArray(ui.rowPicks, 4) === true)
        && (inArray(ui.rowPicks, 7) === true)
        && (inArray(ui.rowPicks, 10) === true)
        && (inArray(ui.rowPicks, 13) === true)
        && (inArray(ui.rowPicks, 16) === true)
        && (inArray(ui.rowPicks, 19) === true)
        && (inArray(ui.rowPicks, 22) === true)
        && (inArray(ui.rowPicks, 25) === true)
        && (inArray(ui.rowPicks, 28) === true)
        && (inArray(ui.rowPicks, 31) === true)
        && (inArray(ui.rowPicks, 34) === true)))) {
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
