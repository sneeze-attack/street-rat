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
    const playText = scene.add.text(((config.scale.width * 7) / 128), ((config.scale.height * 46.9) / 128), 'Play Poker').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(1);

    // message pop-up box
    const messageBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 6.9) / 128), ((config.scale.width * 99) / 128), ((config.scale.height * 21) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(1).setInteractive();
    const messageBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 7) / 128), ((config.scale.width * 98) / 128), ((config.scale.height * 20.8) / 128), 0x000000).setOrigin(0, 0).setDepth(1).setInteractive();
    const messageTextLineOne = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 6.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const messageTextLineTwo = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 13.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const messageTextLineThree = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 20.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const playerCreditsText = scene.add.text(((config.scale.width * 82) / 128), ((config.scale.height * 116) / 128), 'Credits: ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(1);
    const currentBetText = scene.add.text(((config.scale.width * 29) / 128), ((config.scale.height * 116) / 128), 'Bet Amount: ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(1);

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

    const betAmount = 0;

    super(scene);
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.playBoxBorder = playBoxBorder;
    this.playText = playText;
    this.playBox = playBox;
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
    this.opponent1Folded = false;
    this.opponent2 = 0;
    this.opponent2roll = 0;
    this.opponent2Folded = false;
    this.opponent3 = 0;
    this.opponent3roll = 0;
    this.opponent3Folded = false;
    this.opponent4 = 0;
    this.opponent4roll = 0;
    this.opponent4Folded = false;
    this.opponent5 = 0;
    this.opponent5roll = 0;
    this.opponent5Folded = false;
    this.opponent6 = 0;
    this.opponent6roll = 0;
    this.opponent6Folded = false;
    this.opponent7 = 0;
    this.opponent7roll = 0;
    this.opponent7Folded = false;
    this.opponent8 = 0;
    this.opponent8roll = 0;
    this.opponent8Folded = false;
    this.opponent9 = 0;
    this.opponent9roll = 0;
    this.opponent9Folded = false;
    this.opponentsRemaining = 0;
    this.playerRoll = 0;
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

  // gsgs is game.self.gamblingScore
  roundOne(gsgs) {
    this.playerRoll = roll.dice();
    // TO DO CONTINUE FROM HERE

  }

  showBetAmounts() {
    this.messageTextLineOne.setText('Choose starting bet amount')
    this.playBox.setDepth(0);
    this.playText.setDepth(0);
    this.playBoxBorder.setDepth(0);
    this.oneCreditBoxBorder.setDepth(2);
    this.oneCreditBox.setDepth(2);
    this.oneCreditText.setDepth(2);
    this.twoCreditBoxBorder.setDepth(2);
    this.twoCreditBox.setDepth(2);
    this.twoCreditText.setDepth(2);
    this.fourCreditBox.setDepth(2);
    this.fourCreditBoxBorder.setDepth(2);
    this.fourCreditText.setDepth(2);
    this.eightCreditBox.setDepth(2);
    this.eightCreditBoxBorder.setDepth(2);
    this.eightCreditText.setDepth(2);
    this.sixteenCreditBox.setDepth(2);
    this.sixteenCreditBoxBorder.setDepth(2);
    this.sixteenCreditText.setDepth(2);
  }

  showMessageBox() {
    this.messageBoxBorder.setDepth(2);
    this.messageBox.setDepth(2);
    this.messageTextLineOne.setDepth(2);
    this.messageTextLineTwo.setDepth(2);
    this.messageTextLineThree.setDepth(2);
  }
}
