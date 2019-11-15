/* global Phaser
no-undef: off */
import { config } from '../../index';
import * as roll from '../utils/Roll';

export default class Poker extends Phaser.GameObjects.Group {
  // Intended for use only in PokerScene

  // Poker requires scene which is usually 'this'
  // gsgs is game.self.gamblingScore
  constructor(scene, gsgs) {
    // add black box (background)
    scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setInteractive().setDepth(1);

    // back button
    const backTextBox = scene.add.rectangle(((config.scale.width * 2) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    const backButton = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"').setDepth(1);

    const playBoxBorder = scene.add.rectangle(((config.scale.width * 6) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(1);
    const playBox = scene.add.rectangle(((config.scale.width * 6.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(1);
    const playText = scene.add.text(((config.scale.width * 7) / 128), ((config.scale.height * 46.9) / 128), 'Play cards').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(1);

    const playAgainBoxBorder = scene.add.rectangle(((config.scale.width * 6) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
    const playAgainBox = scene.add.rectangle(((config.scale.width * 6.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 38) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
    const playAgainText = scene.add.text(((config.scale.width * 7) / 128), ((config.scale.height * 46.9) / 128), 'Play again').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    // message pop-up box
    const messageBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 6.9) / 128), ((config.scale.width * 99) / 128), ((config.scale.height * 21) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(1).setInteractive();
    const messageBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 7) / 128), ((config.scale.width * 98) / 128), ((config.scale.height * 20.8) / 128), 0x000000).setOrigin(0, 0).setDepth(1).setInteractive();
    const messageTextLineOne = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 6.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const messageTextLineTwo = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 13.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const messageTextLineThree = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 20.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const playerCreditsText = scene.add.text(((config.scale.width * 82) / 128), ((config.scale.height * 116) / 128), 'Credits: ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(1);
    const currentBetText = scene.add.text(((config.scale.width * 29) / 128), ((config.scale.height * 116) / 128), 'Bet Amount: ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(1);

    // card actions
    const foldBoxBorder = scene.add.rectangle(((config.scale.width * 16) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 21) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const foldBox = scene.add.rectangle(((config.scale.width * 16.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const foldText = scene.add.text(((config.scale.width * 17) / 128), ((config.scale.height * 46.9) / 128), 'Fold').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const showBoxBorder = scene.add.rectangle(((config.scale.width * 16) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 21) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const showBox = scene.add.rectangle(((config.scale.width * 16.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const showText = scene.add.text(((config.scale.width * 17) / 128), ((config.scale.height * 46.9) / 128), 'Show').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const callBoxBorder = scene.add.rectangle(((config.scale.width * 41) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 21) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const callBox = scene.add.rectangle(((config.scale.width * 41.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const callText = scene.add.text(((config.scale.width * 42) / 128), ((config.scale.height * 46.9) / 128), 'Call').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const raiseBoxBorder = scene.add.rectangle(((config.scale.width * 66) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 21) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const raiseBox = scene.add.rectangle(((config.scale.width * 66.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const raiseText = scene.add.text(((config.scale.width * 67) / 128), ((config.scale.height * 46.9) / 128), 'Raise').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const allInBoxBorder = scene.add.rectangle(((config.scale.width * 41) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 24) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const allInBox = scene.add.rectangle(((config.scale.width * 41.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 23) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const allInText = scene.add.text(((config.scale.width * 42) / 128), ((config.scale.height * 46.9) / 128), 'All In').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    // bet amounts
    // 1, 2, 4, 8, 16
    const oneCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const oneCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const oneCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 46.9) / 128), '1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);
    const twoCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const twoCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const twoCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 61.9) / 128), '2').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);
    const fourCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const fourCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const fourCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 76.9) / 128), '4').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);
    const eightCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const eightCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const eightCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 46.9) / 128), '8').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);
    const sixteenCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const sixteenCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const sixteenCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 61.9) / 128), '16').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    super(scene);
    this.showBoxBorder = showBoxBorder;
    this.showBox = showBox;
    this.showText = showText;
    this.allInBoxBorder = allInBoxBorder;
    this.allInBox = allInBox;
    this.allInText = allInText;
    this.foldBoxBorder = foldBoxBorder;
    this.foldBox = foldBox;
    this.foldText = foldText;
    this.raiseBoxBorder = raiseBoxBorder;
    this.raiseBox = raiseBox;
    this.raiseText = raiseText;
    this.callBoxBorder = callBoxBorder;
    this.callBox = callBox;
    this.callText = callText;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.playBoxBorder = playBoxBorder;
    this.playText = playText;
    this.playBox = playBox;
    this.playAgainBoxBorder = playAgainBoxBorder;
    this.playAgainBox = playAgainBox;
    this.playAgainText = playAgainText;
    this.messageBoxBorder = messageBoxBorder;
    this.messageBox = messageBox;
    this.messageTextLineOne = messageTextLineOne;
    this.messageTextLineTwo = messageTextLineTwo;
    this.messageTextLineThree = messageTextLineThree;
    this.playerCreditsText = playerCreditsText;
    this.currentBetText = currentBetText;
    this.oneCreditBox = oneCreditBox;
    this.oneCreditBoxBorder = oneCreditBoxBorder;
    this.oneCreditText = oneCreditText;
    this.twoCreditBox = twoCreditBox;
    this.twoCreditBoxBorder = twoCreditBoxBorder;
    this.twoCreditText = twoCreditText;
    this.fourCreditBox = fourCreditBox;
    this.fourCreditBoxBorder = fourCreditBoxBorder;
    this.fourCreditText = fourCreditText;
    this.eightCreditBox = eightCreditBox;
    this.eightCreditBoxBorder = eightCreditBoxBorder;
    this.eightCreditText = eightCreditText;
    this.sixteenCreditBox = sixteenCreditBox;
    this.sixteenCreditBoxBorder = sixteenCreditBoxBorder;
    this.sixteenCreditText = sixteenCreditText;
    this.opponent1 = 0;
    this.opponent1roll = 0;
    this.opponent1diff = 0;
    this.opponent1Folded = false;
    this.opponent2 = 0;
    this.opponent2roll = 0;
    this.opponent2diff = 0;
    this.opponent2Folded = false;
    this.opponent3 = 0;
    this.opponent3roll = 0;
    this.opponent3diff = 0;
    this.opponent3Folded = false;
    this.opponent4 = 0;
    this.opponent4roll = 0;
    this.opponent4diff = 0;
    this.opponent4Folded = false;
    this.opponent5 = 0;
    this.opponent5roll = 0;
    this.opponent5diff = 0;
    this.opponent5Folded = false;
    this.opponent6 = 0;
    this.opponent6roll = 0;
    this.opponent6diff = 0;
    this.opponent6Folded = false;
    this.opponent7 = 0;
    this.opponent7roll = 0;
    this.opponent7diff = 0;
    this.opponent7Folded = false;
    this.opponent8 = 0;
    this.opponent8roll = 0;
    this.opponent8diff = 0;
    this.opponent8Folded = false;
    this.opponent9 = 0;
    this.opponent9roll = 0;
    this.opponent9diff = 0;
    this.opponent9Folded = false;
    this.opponentsRemaining = 0;
    this.playerRoll = 0;
    this.playerDiff = 0;
    this.playerGamblingScore = gsgs;
    this.betAmount = 0;
    this.potAmount = 0;
    this.currentRound = 0;
  }

  setScores() {
    this.opponent1 = roll.dice();
    this.opponent2 = roll.dice();
    this.opponent3 = roll.dice();
    this.opponent4 = roll.dice();
    this.opponent5 = roll.dice();
    this.opponent6 = roll.dice();
    this.opponent7 = roll.dice();
    this.opponent8 = roll.dice();
    this.opponent9 = roll.dice();
  }

  setBetAmount(amount) {
    this.currentRound = 1;
    this.betAmount = amount;
    this.messageTextLineOne.setText('');
    this.oneCreditBoxBorder.setDepth(0);
    this.oneCreditBox.setDepth(0);
    this.oneCreditText.setDepth(0);
    this.twoCreditBoxBorder.setDepth(0);
    this.twoCreditBox.setDepth(0);
    this.twoCreditText.setDepth(0);
    this.fourCreditBox.setDepth(0);
    this.fourCreditBoxBorder.setDepth(0);
    this.fourCreditText.setDepth(0);
    this.eightCreditBox.setDepth(0);
    this.eightCreditBoxBorder.setDepth(0);
    this.eightCreditText.setDepth(0);
    this.sixteenCreditBox.setDepth(0);
    this.sixteenCreditBoxBorder.setDepth(0);
    this.sixteenCreditText.setDepth(0);
    this.currentBetText.setText(`Bet Amount: ${this.betAmount}`);
  }

  opponentTurn() {
    this.opponentsRemaining = 0;
    if (this.opponent1Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent1roll = roll.dice();
      if (this.opponent1roll <= this.opponent1) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent1diff += this.opponent1 - this.opponent1roll;
      } else {
        // fail
        this.opponent1Folded = true;
        this.opponent1diff = 0;
      }
    }
    if (this.opponent2Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent2roll = roll.dice();
      if (this.opponent2roll <= this.opponent2) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent2diff += this.opponent2 - this.opponent2roll;
      } else {
        // fail
        this.opponent2Folded = true;
        this.opponent2diff = 0;
      }
    }
    if (this.opponent3Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent3roll = roll.dice();
      if (this.opponent3roll <= this.opponent3) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent3diff += this.opponent3 - this.opponent3roll;
      } else {
        // fail
        this.opponent3Folded = true;
        this.opponent3diff = 0;
      }
    }
    if (this.opponent4Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent4roll = roll.dice();
      if (this.opponent4roll <= this.opponent4) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent4diff += this.opponent4 - this.opponent4roll;
      } else {
        // fail
        this.opponent4Folded = true;
        this.opponent4diff = 0;
      }
    }
    if (this.opponent5Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent5roll = roll.dice();
      if (this.opponent5roll <= this.opponent5) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent5diff += this.opponent5 - this.opponent5roll;
      } else {
        // fail
        this.opponent5Folded = true;
        this.opponent5diff = 0;
      }
    }
    if (this.opponent6Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent6roll = roll.dice();
      if (this.opponent6roll <= this.opponent6) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent6diff += this.opponent6 - this.opponent6roll;
      } else {
        // fail
        this.opponent6Folded = true;
        this.opponent6diff = 0;
      }
    }
    if (this.opponent7Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent7roll = roll.dice();
      if (this.opponent7roll <= this.opponent7) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent7diff += this.opponent7 - this.opponent7roll;
      } else {
        // fail
        this.opponent7Folded = true;
        this.opponent7diff = 0;
      }
    }
    if (this.opponent8Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent8roll = roll.dice();
      if (this.opponent8roll <= this.opponent8) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent8diff += this.opponent8 - this.opponent8roll;
      } else {
        // fail
        this.opponent8Folded = true;
        this.opponent8diff = 0;
      }
    }
    if (this.opponent9Folded === false) {
      this.potAmount += this.betAmount;
      this.opponent9roll = roll.dice();
      if (this.opponent9roll <= this.opponent9) {
        // pass
        this.opponentsRemaining += 1;
        this.opponent9diff += this.opponent9 - this.opponent9roll;
      } else {
        // fail
        this.opponent9Folded = true;
        this.opponent9diff = 0;
      }
    }
  }

  // gs is game.self.gamblingScore
  // gc is game.self.credits
  roundOne(gs, gc) {
    this.potAmount += this.betAmount;
    this.playerRoll = roll.dice();
    this.playerDiff = 0;
    if (this.playerRoll <= gs) {
      // success, stay in the round
      // call, raise, fold
      // show current pot amount..show remaining opponent count
      this.opponentTurn();
      this.playerDiff += gs - this.playerRoll;
      if (this.playerDiff > 8) {
        this.messageTextLineOne.setText('You are dealt a remarkable hand');
      } else if (this.playerDiff > 5) {
        this.messageTextLineOne.setText('You are dealt a good hand');
      } else if (this.playerDiff > 2) {
        this.messageTextLineOne.setText('You are dealt an acceptable hand');
      } else {
        this.messageTextLineOne.setText('You are dealt an awful hand');
      }
      this.messageTextLineTwo.setText(`Pot amount: ${this.potAmount}`);
      this.messageTextLineThree.setText(`Opponents remaining: ${this.opponentsRemaining}`);

      // show options..call..raise..fold..all-in
      if (gc >= this.betAmount) {
        this.callBoxBorder.setDepth(2);
        this.callBox.setDepth(2);
        this.callText.setDepth(2);
      }
      if (gc >= (this.betAmount * 2)) {
        this.raiseBoxBorder.setDepth(2);
        this.raiseBox.setDepth(2);
        this.raiseText.setDepth(2);
      }
      // only allow all-in if cannot call
      if (gc < this.betAmount) {
        this.allInBoxBorder.setDepth(2);
        this.allInBox.setDepth(2);
        this.allInText.setDepth(2);
      }
      this.foldBoxBorder.setDepth(2);
      this.foldBox.setDepth(2);
      this.foldText.setDepth(2);
    } else {
      // failure, display loss message
      this.messageTextLineOne.setText('You are dealt out in the first round');
      this.playAgainBoxBorder.setDepth(2);
      this.playAgainBox.setDepth(2);
      this.playAgainText.setDepth(2);
    }
  }

  // gs is game.self.gamblingScore
  // gc is game.self.credits
  roundTwo(gs, gc) {
    this.potAmount += this.betAmount;
    this.playerRoll = roll.dice();
    let thisDiff;
    if (this.playerRoll <= gs) {
      // success, stay in the round
      // call, raise, fold
      // show current pot amount..show remaining opponent count
      this.opponentTurn();
      thisDiff = gs - this.playerRoll;
      this.playerDiff += gs - this.playerRoll;
      if (thisDiff > 8) {
        this.messageTextLineOne.setText('You greatly improve your odds in the second round');
      } else if (thisDiff > 5) {
        this.messageTextLineOne.setText('You improve your odds in the second round');
      } else if (thisDiff > 2) {
        this.messageTextLineOne.setText('You improve your odds a little in the second round');
      } else {
        this.messageTextLineOne.setText("You don't improve your odds much in the second round");
      }
      this.messageTextLineTwo.setText(`Pot amount: ${this.potAmount}`);
      this.messageTextLineThree.setText(`Opponents remaining: ${this.opponentsRemaining}`);
      // show options..call..raise..fold..all-in
      if (gc >= this.betAmount) {
        this.callBoxBorder.setDepth(2);
        this.callBox.setDepth(2);
        this.callText.setDepth(2);
      }
      if (gc >= (this.betAmount * 2)) {
        this.raiseBoxBorder.setDepth(2);
        this.raiseBox.setDepth(2);
        this.raiseText.setDepth(2);
      }
      // only allow all-in if cannot call
      if (gc < this.betAmount) {
        this.allInBoxBorder.setDepth(2);
        this.allInBox.setDepth(2);
        this.allInText.setDepth(2);
      }
      this.foldBoxBorder.setDepth(2);
      this.foldBox.setDepth(2);
      this.foldText.setDepth(2);
    } else {
      // fail
      this.messageTextLineOne.setText('You are dealt out in the second round');
      this.playAgainBoxBorder.setDepth(2);
      this.playAgainBox.setDepth(2);
      this.playAgainText.setDepth(2);
    }
  }

  // gs is game.self.gamblingScore
  // gc is game.self.credits
  roundThree(gs, gc) {
    this.potAmount += this.betAmount;
    this.playerRoll = roll.dice();
    let thisDiff;
    if (this.playerRoll <= gs) {
      // success, stay in the round
      // call, raise, fold
      // show current pot amount..show remaining opponent count
      this.opponentTurn();
      thisDiff = gs - this.playerRoll;
      this.playerDiff += gs - this.playerRoll;
      if (thisDiff > 8) {
        this.messageTextLineOne.setText('You greatly improve your odds in the third round');
      } else if (thisDiff > 5) {
        this.messageTextLineOne.setText('You improve your odds in the third round');
      } else if (thisDiff > 2) {
        this.messageTextLineOne.setText('You improve your odds a little in the third round');
      } else {
        this.messageTextLineOne.setText("You don't improve your odds much in the third round");
      }
      this.messageTextLineTwo.setText(`Pot amount: ${this.potAmount}`);
      this.messageTextLineThree.setText(`Opponents remaining: ${this.opponentsRemaining}`);
      // show options..call..raise..fold..all-in
      if (gc >= this.betAmount) {
        this.callBoxBorder.setDepth(2);
        this.callBox.setDepth(2);
        this.callText.setDepth(2);
      }
      if (gc >= (this.betAmount * 2)) {
        this.raiseBoxBorder.setDepth(2);
        this.raiseBox.setDepth(2);
        this.raiseText.setDepth(2);
      }
      // only allow all-in if cannot call
      if (gc < this.betAmount) {
        this.allInBoxBorder.setDepth(2);
        this.allInBox.setDepth(2);
        this.allInText.setDepth(2);
      }
      this.foldBoxBorder.setDepth(2);
      this.foldBox.setDepth(2);
      this.foldText.setDepth(2);
    } else {
      // fail
      this.messageTextLineOne.setText('You are dealt out in the third round');
      this.playAgainBoxBorder.setDepth(2);
      this.playAgainBox.setDepth(2);
      this.playAgainText.setDepth(2);
    }
  }

  // gs is game.self.gamblingScore
  roundFour(gs) {
    this.potAmount += this.betAmount;
    this.playerRoll = roll.dice();
    let thisDiff;
    if (this.playerRoll <= gs) {
      // success, stay in the round
      // show/end
      // show current pot amount..show remaining opponent count
      this.opponentTurn();
      thisDiff = gs - this.playerRoll;
      this.playerDiff += gs - this.playerRoll;
      if (thisDiff > 8) {
        this.messageTextLineOne.setText('You greatly improve your odds in the last round');
      } else if (thisDiff > 5) {
        this.messageTextLineOne.setText('You improve your odds in the last round');
      } else if (thisDiff > 2) {
        this.messageTextLineOne.setText('You improve your odds a little in the last round');
      } else {
        this.messageTextLineOne.setText("You don't improve your odds much in the last round");
      }
      this.messageTextLineTwo.setText(`Pot amount: ${this.potAmount}`);
      this.messageTextLineThree.setText(`Opponents remaining: ${this.opponentsRemaining}`);
      // show options..show/end
      this.showBoxBorder.setDepth(2);
      this.showBox.setDepth(2);
      this.showText.setDepth(2);
    } else {
      // fail
      this.messageTextLineOne.setText('You are dealt out in the last round');
      this.playAgainBoxBorder.setDepth(2);
      this.playAgainBox.setDepth(2);
      this.playAgainText.setDepth(2);
    }
  }


  resetVariables() {
    this.playerDiff = 0;
    this.potAmount = 0;
    this.opponent1Folded = false;
    this.opponent2Folded = false;
    this.opponent3Folded = false;
    this.opponent4Folded = false;
    this.opponent5Folded = false;
    this.opponent6Folded = false;
    this.opponent7Folded = false;
    this.opponent8Folded = false;
    this.opponent9Folded = false;
    this.opponent1diff = 0;
    this.opponent2diff = 0;
    this.opponent3diff = 0;
    this.opponent4diff = 0;
    this.opponent5diff = 0;
    this.opponent6diff = 0;
    this.opponent7diff = 0;
    this.opponent8diff = 0;
    this.opponent9diff = 0;
    this.opponent1roll = 0;
    this.opponent2roll = 0;
    this.opponent3roll = 0;
    this.opponent4roll = 0;
    this.opponent5roll = 0;
    this.opponent6roll = 0;
    this.opponent7roll = 0;
    this.opponent8roll = 0;
    this.opponent9roll = 0;
    this.opponentsRemaining = 0;
    this.setScores();
    this.playAgainBoxBorder.setDepth(0);
    this.playAgainBox.setDepth(0);
    this.playAgainText.setDepth(0);
    this.currentBetText.setText('Bet Amount:');
    this.currentRound = 0;
  }

  showBetAmounts(creds) {
    this.messageTextLineOne.setText('Choose starting bet amount');
    this.playBox.setDepth(0);
    this.playText.setDepth(0);
    this.playBoxBorder.setDepth(0);
    if (creds >= 1) {
      this.oneCreditBoxBorder.setDepth(2);
      this.oneCreditBox.setDepth(2);
      this.oneCreditText.setDepth(2);
    }
    if (creds >= 2) {
      this.twoCreditBoxBorder.setDepth(2);
      this.twoCreditBox.setDepth(2);
      this.twoCreditText.setDepth(2);
    }
    if (creds >= 4) {
      this.fourCreditBox.setDepth(2);
      this.fourCreditBoxBorder.setDepth(2);
      this.fourCreditText.setDepth(2);
    }
    if (creds >= 8) {
      this.eightCreditBox.setDepth(2);
      this.eightCreditBoxBorder.setDepth(2);
      this.eightCreditText.setDepth(2);
    }
    if (creds >= 16) {
      this.sixteenCreditBox.setDepth(2);
      this.sixteenCreditBoxBorder.setDepth(2);
      this.sixteenCreditText.setDepth(2);
    }
  }

  showMessageBox() {
    this.messageBoxBorder.setDepth(2);
    this.messageBox.setDepth(2);
    this.messageTextLineOne.setDepth(2);
    this.messageTextLineTwo.setDepth(2);
    this.messageTextLineThree.setDepth(2);
  }

  fold() {
    this.messageTextLineOne.setText('You fold.');
    this.messageTextLineTwo.setText('');
    this.messageTextLineThree.setText('');
    this.foldBoxBorder.setDepth(0);
    this.foldBox.setDepth(0);
    this.foldText.setDepth(0);
    this.raiseBoxBorder.setDepth(0);
    this.raiseBox.setDepth(0);
    this.raiseText.setDepth(0);
    this.callBoxBorder.setDepth(0);
    this.callBox.setDepth(0);
    this.callText.setDepth(0);
    this.playAgainBoxBorder.setDepth(2);
    this.playAgainBox.setDepth(2);
    this.playAgainText.setDepth(2);
  }
}
