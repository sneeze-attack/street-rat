/* global Phaser
no-undef: off */
import { config } from '../../index';

export default class Roulette extends Phaser.GameObjects.Group {
  // Intended for use only in RouletteScene

  // Roulette requires scene which is usually 'this'
  // gamblingSkillLevel = game.self.gamblingScore
  constructor(scene) {
    // add black box
    scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setInteractive().setDepth(1);
    // options
    const optionsCog = scene.add.sprite(((config.scale.width * 122) / 128), ((config.scale.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive().setDepth(1).setDepth(1);

    const backTextBox = scene.add.rectangle(((config.scale.width * 2) / 128), ((config.scale.height * 115) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    const backButton = scene.add.text(((config.scale.width * 8) / 128), ((config.scale.height * 116) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1).setFontFamily('"DejaVu Sans Mono"');

    const doubleZeroButton = scene.add.text(((config.scale.width * 2) / 128), ((config.scale.height * 1) / 128), ' 00 ').setColor('#FFFFFF').setBackgroundColor('#008000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(49).setDepth(1);
    const zeroButton = scene.add.text(((config.scale.width * 2) / 128), ((config.scale.height * 10.9) / 128), '  0 ').setColor('#FFFFFF').setBackgroundColor('#008000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(49).setDepth(1);

    const threeButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 1.3) / 128), '  3 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twoButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 7.7) / 128), '  2 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const oneButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 14.1) / 128), '  1 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const sixButton = scene.add.text(((config.scale.width * 20.3) / 128), ((config.scale.height * 1.3) / 128), '  6 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const fiveButton = scene.add.text(((config.scale.width * 20.3) / 128), ((config.scale.height * 7.7) / 128), '  5 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const fourButton = scene.add.text(((config.scale.width * 20.3) / 128), ((config.scale.height * 14.1) / 128), '  4 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const nineButton = scene.add.text(((config.scale.width * 27.6) / 128), ((config.scale.height * 1.3) / 128), '  9 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const eightButton = scene.add.text(((config.scale.width * 27.6) / 128), ((config.scale.height * 7.7) / 128), '  8 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const sevenButton = scene.add.text(((config.scale.width * 27.6) / 128), ((config.scale.height * 14.1) / 128), '  7 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const twelveButton = scene.add.text(((config.scale.width * 34.9) / 128), ((config.scale.height * 1.3) / 128), ' 12 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const elevenButton = scene.add.text(((config.scale.width * 34.9) / 128), ((config.scale.height * 7.7) / 128), ' 11 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const tenButton = scene.add.text(((config.scale.width * 34.9) / 128), ((config.scale.height * 14.1) / 128), ' 10 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const fifteenButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 1.3) / 128), ' 15 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const fourteenButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 7.7) / 128), ' 14 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const thirteenButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 14.1) / 128), ' 13 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const eighteenButton = scene.add.text(((config.scale.width * 49.5) / 128), ((config.scale.height * 1.3) / 128), ' 18 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const seventeenButton = scene.add.text(((config.scale.width * 49.5) / 128), ((config.scale.height * 7.7) / 128), ' 17 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const sixteenButton = scene.add.text(((config.scale.width * 49.5) / 128), ((config.scale.height * 14.1) / 128), ' 16 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const twentyoneButton = scene.add.text(((config.scale.width * 56.8) / 128), ((config.scale.height * 1.3) / 128), ' 21 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentyButton = scene.add.text(((config.scale.width * 56.8) / 128), ((config.scale.height * 7.7) / 128), ' 20 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const nineteenButton = scene.add.text(((config.scale.width * 56.8) / 128), ((config.scale.height * 14.1) / 128), ' 19 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const twentyfourButton = scene.add.text(((config.scale.width * 64.1) / 128), ((config.scale.height * 1.3) / 128), ' 24 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentythreeButton = scene.add.text(((config.scale.width * 64.1) / 128), ((config.scale.height * 7.7) / 128), ' 23 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentytwoButton = scene.add.text(((config.scale.width * 64.1) / 128), ((config.scale.height * 14.1) / 128), ' 22 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const twentysevenButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 1.3) / 128), ' 27 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentysixButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 7.7) / 128), ' 26 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentyfiveButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 14.1) / 128), ' 25 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const thirtyButton = scene.add.text(((config.scale.width * 78.7) / 128), ((config.scale.height * 1.3) / 128), ' 30 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentynineButton = scene.add.text(((config.scale.width * 78.7) / 128), ((config.scale.height * 7.7) / 128), ' 29 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const twentyeightButton = scene.add.text(((config.scale.width * 78.7) / 128), ((config.scale.height * 14.1) / 128), ' 28 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const thirtythreeButton = scene.add.text(((config.scale.width * 86) / 128), ((config.scale.height * 1.3) / 128), ' 33 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const thirtytwoButton = scene.add.text(((config.scale.width * 86) / 128), ((config.scale.height * 7.7) / 128), ' 32 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const thirtyoneButton = scene.add.text(((config.scale.width * 86) / 128), ((config.scale.height * 14.1) / 128), ' 31 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const thirtysixButton = scene.add.text(((config.scale.width * 93.3) / 128), ((config.scale.height * 1.3) / 128), ' 36 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const thirtyfiveButton = scene.add.text(((config.scale.width * 93.3) / 128), ((config.scale.height * 7.7) / 128), ' 35 ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const thirtyfourButton = scene.add.text(((config.scale.width * 93.3) / 128), ((config.scale.height * 14.1) / 128), ' 34 ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const topTwoToOneButton = scene.add.text(((config.scale.width * 100.7) / 128), ((config.scale.height * 1.3) / 128), ' 2:1 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const middleTwoToOneButton = scene.add.text(((config.scale.width * 100.7) / 128), ((config.scale.height * 7.7) / 128), ' 2:1 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const bottomTwoToOneButton = scene.add.text(((config.scale.width * 100.7) / 128), ((config.scale.height * 14.1) / 128), ' 2:1 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const firstTwelveButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 20.5) / 128), '     1st 12     ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const secondTwelveButton = scene.add.text(((config.scale.width * 42.2) / 128), ((config.scale.height * 20.5) / 128), '     2nd 12     ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const thirdTwelveButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 20.5) / 128), '     3rd 12     ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const oneToEighteenButton = scene.add.text(((config.scale.width * 13) / 128), ((config.scale.height * 26.9) / 128), ' 1 to 18 ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const evenButton = scene.add.text(((config.scale.width * 29.4) / 128), ((config.scale.height * 26.9) / 128), ' EVEN  ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const redButton = scene.add.text(((config.scale.width * 42) / 128), ((config.scale.height * 26.9) / 128), '   RED  ').setColor('#FFFFFF').setBackgroundColor('#FF0000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const blackButton = scene.add.text(((config.scale.width * 58) / 128), ((config.scale.height * 26.9) / 128), ' BLACK  ').setColor('#FFFFFF').setBackgroundColor('#000000').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const oddButton = scene.add.text(((config.scale.width * 71.4) / 128), ((config.scale.height * 26.9) / 128), '  ODD  ').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);
    const nineteenToThirtysixButton = scene.add.text(((config.scale.width * 84.1) / 128), ((config.scale.height * 26.9) / 128), ' 19 to 36').setColor('#FFFFFF').setBackgroundColor('#008080').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(1);

    const placeBetBoxBorder = scene.add.rectangle(((config.scale.width * 6) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 35) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(1);
    const placeBetBox = scene.add.rectangle(((config.scale.width * 6.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 34) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(1);
    const placeBetText = scene.add.text(((config.scale.width * 7) / 128), ((config.scale.height * 46.9) / 128), 'Place bet').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(1);

    const playerCreditsText = scene.add.text(((config.scale.width * 82) / 128), ((config.scale.height * 116) / 128), 'Credits: ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(1);


    // bet amounts
    // 1, 5, 25, 50, 100, 500

    const oneCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const oneCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const oneCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 46.9) / 128), '1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const fiveCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const fiveCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const fiveCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 61.9) / 128), '5').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const twentyfiveCreditBoxBorder = scene.add.rectangle(((config.scale.width * 46) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const twentyfiveCreditBox = scene.add.rectangle(((config.scale.width * 46.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const twentyfiveCreditText = scene.add.text(((config.scale.width * 47) / 128), ((config.scale.height * 76.9) / 128), '25').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const fiftyCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const fiftyCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const fiftyCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 46.9) / 128), '50').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const hundredCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 61.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const hundredCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 62) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const hundredCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 61.9) / 128), '100').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const fivehundredCreditBoxBorder = scene.add.rectangle(((config.scale.width * 71) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 15) / 128), ((config.scale.height * 13) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const fivehundredCreditBox = scene.add.rectangle(((config.scale.width * 71.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 14) / 128), ((config.scale.height * 12.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const fivehundredCreditText = scene.add.text(((config.scale.width * 72) / 128), ((config.scale.height * 76.9) / 128), '500').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(64).setDepth(0);

    const betAmount = 0;
    const betType = null;
    const payout = 1;

    // bet types
    //
    // inside bets - left column
    //
    // straight up bet, 35 to 1, any single number
    const straightUpBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 36.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const straightUpBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 37) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const straightUpBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 36.9) / 128), 'Straight-Up: 35 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // split bet, 17 to 1, any two adjacent numbers
    const splitBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const splitBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const splitBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 46.9) / 128), 'Split: 17 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // street bet, 11 to 1, any three numbers in a row or 0 1 2, 0 00 2, 00 2 3
    const streetBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 56.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const streetBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 57) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const streetBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 56.9) / 128), 'Street: 11 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // corner bet, 8 to 1, any 4 numbers whose corners touch
    const cornerBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 66.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const cornerBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 67) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const cornerBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 66.9) / 128), 'Corner: 8 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // sucker bet, 6 to 1, 0 00 1 2 3
    const suckerBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const suckerBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const suckerBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 76.9) / 128), 'Sucker: 6 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // line bet, 5 to 1, two adjacent rows of numbers (6 total numbers)
    const lineBetBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 86.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const lineBetBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 87) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const lineBetText = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 86.9) / 128), 'Line: 5 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    //
    // outside bets - right column
    //
    // row bet, 2 to 1, horizontal row of numbers not including 0 00
    const rowBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 36.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const rowBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 37) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const rowBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 36.9) / 128), 'Row: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // dozen bet, 2 to 1, 1-12 or 13-24 or 25-36
    const dozenBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 46.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const dozenBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 47) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const dozenBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 46.9) / 128), 'Dozen: 2 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // color bet, 2 to 1, red or black
    const colorBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 56.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const colorBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 57) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const colorBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 56.9) / 128), 'Color: 1 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // even/odd bet, 2 to 1
    const evenOddBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 66.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const evenOddBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 67) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const evenOddBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 66.9) / 128), 'Even/Odd: 1 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    // low/high bet, 2 to 1, 1-18 or 19-36
    const lowHighBetBoxBorder = scene.add.rectangle(((config.scale.width * 48) / 128), ((config.scale.height * 76.9) / 128), ((config.scale.width * 40) / 128), ((config.scale.height * 7) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const lowHighBetBox = scene.add.rectangle(((config.scale.width * 48.5) / 128), ((config.scale.height * 77) / 128), ((config.scale.width * 39) / 128), ((config.scale.height * 6.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const lowHighBetText = scene.add.text(((config.scale.width * 49) / 128), ((config.scale.height * 76.9) / 128), 'Low/High: 1 to 1').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);

    // message pop-up box
    const messageBoxBorder = scene.add.rectangle(((config.scale.width * 3) / 128), ((config.scale.height * 36.9) / 128), ((config.scale.width * 84) / 128), ((config.scale.height * 21) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const messageBox = scene.add.rectangle(((config.scale.width * 3.5) / 128), ((config.scale.height * 37) / 128), ((config.scale.width * 83) / 128), ((config.scale.height * 20.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const messageTextLineOne = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 36.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    const messageTextLineTwo = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 43.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    const messageTextLineThree = scene.add.text(((config.scale.width * 4) / 128), ((config.scale.height * 50.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);

    const confirmBetBoxBorder = scene.add.rectangle(((config.scale.width * 43) / 128), ((config.scale.height * 113.9) / 128), ((config.scale.width * 32) / 128), ((config.scale.height * 11) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0).setInteractive();
    const confirmBetBox = scene.add.rectangle(((config.scale.width * 43.5) / 128), ((config.scale.height * 114) / 128), ((config.scale.width * 31) / 128), ((config.scale.height * 10.8) / 128), 0x000000).setOrigin(0, 0).setDepth(0).setInteractive();
    const confirmBetText = scene.add.text(((config.scale.width * 44) / 128), ((config.scale.height * 113.9) / 128), 'Confirm Bet').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);

    const picksText = scene.add.text(((config.scale.width * 94) / 128), ((config.scale.height * 33.9) / 128), 'Picks').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(2);
    const picksBoxBorder = scene.add.rectangle(((config.scale.width * 93) / 128), ((config.scale.height * 43.9) / 128), ((config.scale.width * 32) / 128), ((config.scale.height * 51) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(2).setInteractive();
    const picksBox = scene.add.rectangle(((config.scale.width * 93.5) / 128), ((config.scale.height * 44) / 128), ((config.scale.width * 31) / 128), ((config.scale.height * 50.8) / 128), 0x000000).setOrigin(0, 0).setDepth(2).setInteractive();
    const picksListLineOne = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 44.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineTwo = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 52.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineThree = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 60.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineFour = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 68.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineFive = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 76.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineSix = scene.add.text(((config.scale.width * 95) / 128), ((config.scale.height * 84.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    // second row of picks
    const picksListLineSeven = scene.add.text(((config.scale.width * 106) / 128), ((config.scale.height * 44.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineEight = scene.add.text(((config.scale.width * 106) / 128), ((config.scale.height * 52.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineNine = scene.add.text(((config.scale.width * 106) / 128), ((config.scale.height * 60.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineTen = scene.add.text(((config.scale.width * 106) / 128), ((config.scale.height * 68.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineEleven = scene.add.text(((config.scale.width * 106) / 128), ((config.scale.height * 76.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineTwelve = scene.add.text(((config.scale.width * 106) / 128), ((config.scale.height * 84.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    // third row of picks
    const picksListLineThirteen = scene.add.text(((config.scale.width * 117) / 128), ((config.scale.height * 44.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineFourteen = scene.add.text(((config.scale.width * 117) / 128), ((config.scale.height * 52.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineFifteen = scene.add.text(((config.scale.width * 117) / 128), ((config.scale.height * 60.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineSixteen = scene.add.text(((config.scale.width * 117) / 128), ((config.scale.height * 68.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineSeventeen = scene.add.text(((config.scale.width * 117) / 128), ((config.scale.height * 76.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);
    const picksListLineEighteen = scene.add.text(((config.scale.width * 117) / 128), ((config.scale.height * 84.4) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(48).setDepth(0);

    const payoutText = scene.add.text(((config.scale.width * 93.5) / 128), ((config.scale.height * 96.9) / 128), '').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setInteractive().setFontSize(32).setDepth(0);
    const clickToContinueText = scene.add.text(((config.scale.width * 55.5) / 128), ((config.scale.height * 107) / 128), 'click to continue').setColor('#A9A9A9').setFontFamily('"DejaVu Sans Mono"').setFontSize(16).setDepth(0);

    // Results box
    const resultsShadeBox = scene.add.rectangle(0, 0, config.scale.width, config.scale.height, 0x000000).setOrigin(0, 0).setDepth(0).setAlpha(0.5).setInteractive();
    const resultsBoxBorder = scene.add.rectangle(((config.scale.width * 30) / 128), ((config.scale.height * 14) / 128), ((config.scale.width * 68) / 128), ((config.scale.height * 98) / 128), 0xFFFFFF).setOrigin(0, 0).setDepth(0);
    const resultsBox = scene.add.rectangle(((config.scale.width * 30.25) / 128), ((config.scale.height * 14.5) / 128), ((config.scale.width * 67.5) / 128), ((config.scale.height * 97) / 128), 0x000000).setOrigin(0, 0).setDepth(0);
    const rollTitle = scene.add.text(((config.scale.width * 42) / 128), ((config.scale.height * 17) / 128), 'Roulette Results').setColor('#0033FF').setFontFamily('"DejaVu Sans Mono"').setFontSize(50).setDepth(0);

    const scoreText = scene.add.text(((config.scale.width * 43) / 128), ((config.scale.height * 31) / 128), 'The winning number is: ').setColor('#4c4cff').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
    const scoreNumber = scene.add.text(((config.scale.width * 57.5) / 128), ((config.scale.height * 37) / 128), '').setColor('#4c4cff').setFontFamily('"DejaVu Sans Mono"').setFontSize(80).setDepth(0);

    const yourBetType = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 55) / 128), 'Your bet type:').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
    const yourPayout = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 62) / 128), 'Your payout:').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
    const yourNumbers = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 69) / 128), 'Your numbers:').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
    const yourNumbersTwo = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 76) / 128), '             ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);
    const yourNumbersThree = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 83) / 128), '             ').setColor('#FFFFFF').setFontFamily('"DejaVu Sans Mono"').setFontSize(32).setDepth(0);

    const yourMessage = scene.add.text(((config.scale.width * 32) / 128), ((config.scale.height * 94) / 128), '         Lose').setColor('#A00000').setFontFamily('"DejaVu Sans Mono"').setFontSize(48).setDepth(0);
    const firstLine = new Phaser.Geom.Line(((config.scale.width * 30) / 128), ((config.scale.height * 30) / 128), ((config.scale.width * 98) / 128), ((config.scale.height * 30) / 128));
    const lineFirst = scene.add.graphics({ lineStyle: { width: 4, color: 0xffffff } }).setDepth(0);
    lineFirst.strokeLineShape(firstLine);
    const secondLine = new Phaser.Geom.Line(((config.scale.width * 30) / 128), ((config.scale.height * 90) / 128), ((config.scale.width * 98) / 128), ((config.scale.height * 90) / 128));
    const lineSecond = scene.add.graphics({ lineStyle: { width: 4, color: 0xffffff } }).setDepth(0);
    lineSecond.strokeLineShape(secondLine);

    super(scene);
    this.optionsCog = optionsCog;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.placeBetBoxBorder = placeBetBoxBorder;
    this.placeBetBox = placeBetBox;
    this.placeBetText = placeBetText;
    this.playerCreditsText = playerCreditsText;
    this.oneCreditBoxBorder = oneCreditBoxBorder;
    this.oneCreditBox = oneCreditBox;
    this.oneCreditText = oneCreditText;
    this.fiveCreditBoxBorder = fiveCreditBoxBorder;
    this.fiveCreditBox = fiveCreditBox;
    this.fiveCreditText = fiveCreditText;
    this.twentyfiveCreditBoxBorder = twentyfiveCreditBoxBorder;
    this.twentyfiveCreditBox = twentyfiveCreditBox;
    this.twentyfiveCreditText = twentyfiveCreditText;
    this.fiftyCreditBoxBorder = fiftyCreditBoxBorder;
    this.fiftyCreditBox = fiftyCreditBox;
    this.fiftyCreditText = fiftyCreditText;
    this.hundredCreditBoxBorder = hundredCreditBoxBorder;
    this.hundredCreditBox = hundredCreditBox;
    this.hundredCreditText = hundredCreditText;
    this.fivehundredCreditBoxBorder = fivehundredCreditBoxBorder;
    this.fivehundredCreditBox = fivehundredCreditBox;
    this.fivehundredCreditText = fivehundredCreditText;
    this.betAmount = betAmount;
    this.doubleZeroButton = doubleZeroButton;
    this.zeroButton = zeroButton;
    this.oneButton = oneButton;
    this.twoButton = twoButton;
    this.threeButton = threeButton;
    this.fourButton = fourButton;
    this.fiveButton = fiveButton;
    this.sixButton = sixButton;
    this.sevenButton = sevenButton;
    this.eightButton = eightButton;
    this.nineButton = nineButton;
    this.tenButton = tenButton;
    this.elevenButton = elevenButton;
    this.twelveButton = twelveButton;
    this.thirteenButton = thirteenButton;
    this.fourteenButton = fourteenButton;
    this.fifteenButton = fifteenButton;
    this.sixteenButton = sixteenButton;
    this.seventeenButton = seventeenButton;
    this.eighteenButton = eighteenButton;
    this.nineteenButton = nineteenButton;
    this.twentyButton = twentyButton;
    this.twentyoneButton = twentyoneButton;
    this.twentytwoButton = twentytwoButton;
    this.twentythreeButton = twentythreeButton;
    this.twentyfourButton = twentyfourButton;
    this.twentyfiveButton = twentyfiveButton;
    this.twentysixButton = twentysixButton;
    this.twentysevenButton = twentysevenButton;
    this.twentyeightButton = twentyeightButton;
    this.twentynineButton = twentynineButton;
    this.thirtyButton = thirtyButton;
    this.thirtyoneButton = thirtyoneButton;
    this.thirtytwoButton = thirtytwoButton;
    this.thirtythreeButton = thirtythreeButton;
    this.thirtyfourButton = thirtyfourButton;
    this.thirtyfiveButton = thirtyfiveButton;
    this.thirtysixButton = thirtysixButton;
    this.payout = payout;
    this.straightUpBetBoxBorder = straightUpBetBoxBorder;
    this.straightUpBetBox = straightUpBetBox;
    this.straightUpBetText = straightUpBetText;
    this.splitBetBoxBorder = splitBetBoxBorder;
    this.splitBetBox = splitBetBox;
    this.splitBetText = splitBetText;
    this.streetBetBoxBorder = streetBetBoxBorder;
    this.streetBetBox = streetBetBox;
    this.streetBetText = streetBetText;
    this.cornerBetBoxBorder = cornerBetBoxBorder;
    this.cornerBetBox = cornerBetBox;
    this.cornerBetText = cornerBetText;
    this.suckerBetBoxBorder = suckerBetBoxBorder;
    this.suckerBetBox = suckerBetBox;
    this.suckerBetText = suckerBetText;
    this.lineBetBoxBorder = lineBetBoxBorder;
    this.lineBetBox = lineBetBox;
    this.lineBetText = lineBetText;
    this.rowBetBoxBorder = rowBetBoxBorder;
    this.rowBetBox = rowBetBox;
    this.rowBetText = rowBetText;
    this.dozenBetBoxBorder = dozenBetBoxBorder;
    this.dozenBetBox = dozenBetBox;
    this.dozenBetText = dozenBetText;
    this.colorBetBoxBorder = colorBetBoxBorder;
    this.colorBetBox = colorBetBox;
    this.colorBetText = colorBetText;
    this.evenOddBetBoxBorder = evenOddBetBoxBorder;
    this.evenOddBetBox = evenOddBetBox;
    this.evenOddBetText = evenOddBetText;
    this.lowHighBetBoxBorder = lowHighBetBoxBorder;
    this.lowHighBetBox = lowHighBetBox;
    this.lowHighBetText = lowHighBetText;
    this.messageBoxBorder = messageBoxBorder;
    this.messageBox = messageBox;
    this.messageTextLineOne = messageTextLineOne;
    this.messageTextLineTwo = messageTextLineTwo;
    this.messageTextLineThree = messageTextLineThree;
    this.picks = [];
    this.lastThreePicks = [];
    this.lastFourPicks = [];
    this.suckerPicks = [];
    this.linePicks = [];
    this.rowPicks = [];
    this.colorPicks = [];
    this.confirmBetBoxBorder = confirmBetBoxBorder;
    this.confirmBetBox = confirmBetBox;
    this.confirmBetText = confirmBetText;
    this.picksBoxBorder = picksBoxBorder;
    this.picksBox = picksBox;
    this.picksText = picksText;
    this.picksListLineOne = picksListLineOne;
    this.picksListLineTwo = picksListLineTwo;
    this.picksListLineThree = picksListLineThree;
    this.picksListLineFour = picksListLineFour;
    this.picksListLineFive = picksListLineFive;
    this.picksListLineSix = picksListLineSix;
    this.picksListLineSeven = picksListLineSeven;
    this.picksListLineEight = picksListLineEight;
    this.picksListLineNine = picksListLineNine;
    this.picksListLineTen = picksListLineTen;
    this.picksListLineEleven = picksListLineEleven;
    this.picksListLineTwelve = picksListLineTwelve;
    this.picksListLineThirteen = picksListLineThirteen;
    this.picksListLineFourteen = picksListLineFourteen;
    this.picksListLineFifteen = picksListLineFifteen;
    this.picksListLineSixteen = picksListLineSixteen;
    this.picksListLineSeventeen = picksListLineSeventeen;
    this.picksListLineEighteen = picksListLineEighteen;
    this.payoutText = payoutText;
    this.betType = betType;
    this.resultsShadeBox = resultsShadeBox;
    this.resultsBoxBorder = resultsBoxBorder;
    this.resultsBox = resultsBox;
    this.rollTitle = rollTitle;
    this.scoreText = scoreText;
    this.scoreNumber = scoreNumber;
    this.yourBetType = yourBetType;
    this.yourNumbers = yourNumbers;
    this.yourNumbersTwo = yourNumbersTwo;
    this.yourNumbersThree = yourNumbersThree;
    this.yourPayout = yourPayout;
    this.yourMessage = yourMessage;
    this.clickToContinueText = clickToContinueText;
    this.topLine = lineFirst;
    this.bottomLine = lineSecond;
    this.topTwoToOneButton = topTwoToOneButton;
    this.middleTwoToOneButton = middleTwoToOneButton;
    this.bottomTwoToOneButton = bottomTwoToOneButton;
    this.firstTwelveButton = firstTwelveButton;
    this.secondTwelveButton = secondTwelveButton;
    this.thirdTwelveButton = thirdTwelveButton;
    this.oneToEighteenButton = oneToEighteenButton;
    this.evenButton = evenButton;
    this.redButton = redButton;
    this.blackButton = blackButton;
    this.oddButton = oddButton;
    this.nineteenToThirtysixButton = nineteenToThirtysixButton;
    this.chosenPicks = [];
  }

  pickBetAmount(gsc) {
    this.placeBetBoxBorder.setDepth(0);
    this.placeBetBox.setDepth(0);
    this.placeBetText.setDepth(0);
    if (gsc >= 1) {
      this.oneCreditBoxBorder.setDepth(2);
      this.oneCreditBox.setDepth(2);
      this.oneCreditText.setDepth(2);
    }
    if (gsc >= 5) {
      this.fiveCreditBoxBorder.setDepth(2);
      this.fiveCreditBox.setDepth(2);
      this.fiveCreditText.setDepth(2);
    }
    if (gsc >= 25) {
      this.twentyfiveCreditBoxBorder.setDepth(2);
      this.twentyfiveCreditBox.setDepth(2);
      this.twentyfiveCreditText.setDepth(2);
    }
    if (gsc >= 50) {
      this.fiftyCreditBoxBorder.setDepth(2);
      this.fiftyCreditBox.setDepth(2);
      this.fiftyCreditText.setDepth(2);
    }
    if (gsc >= 100) {
      this.hundredCreditBoxBorder.setDepth(2);
      this.hundredCreditBox.setDepth(2);
      this.hundredCreditText.setDepth(2);
    }
    if (gsc >= 500) {
      this.fivehundredCreditBoxBorder.setDepth(2);
      this.fivehundredCreditBox.setDepth(2);
      this.fivehundredCreditText.setDepth(2);
    }
  }

  pickBetType() {
    this.oneCreditBoxBorder.setDepth(0);
    this.oneCreditBox.setDepth(0);
    this.oneCreditText.setDepth(0);
    this.fiveCreditBoxBorder.setDepth(0);
    this.fiveCreditBox.setDepth(0);
    this.fiveCreditText.setDepth(0);
    this.twentyfiveCreditBoxBorder.setDepth(0);
    this.twentyfiveCreditBox.setDepth(0);
    this.twentyfiveCreditText.setDepth(0);
    this.fiftyCreditBoxBorder.setDepth(0);
    this.fiftyCreditBox.setDepth(0);
    this.fiftyCreditText.setDepth(0);
    this.hundredCreditBoxBorder.setDepth(0);
    this.hundredCreditBox.setDepth(0);
    this.hundredCreditText.setDepth(0);
    this.fivehundredCreditBoxBorder.setDepth(0);
    this.fivehundredCreditBox.setDepth(0);
    this.fivehundredCreditText.setDepth(0);
    this.straightUpBetBoxBorder.setDepth(2);
    this.straightUpBetBox.setDepth(2);
    this.straightUpBetText.setDepth(2);
    this.splitBetBoxBorder.setDepth(2);
    this.splitBetBox.setDepth(2);
    this.splitBetText.setDepth(2);
    this.streetBetBoxBorder.setDepth(2);
    this.streetBetBox.setDepth(2);
    this.streetBetText.setDepth(2);
    this.cornerBetBoxBorder.setDepth(2);
    this.cornerBetBox.setDepth(2);
    this.cornerBetText.setDepth(2);
    this.suckerBetBoxBorder.setDepth(2);
    this.suckerBetBox.setDepth(2);
    this.suckerBetText.setDepth(2);
    this.lineBetBoxBorder.setDepth(2);
    this.lineBetBox.setDepth(2);
    this.lineBetText.setDepth(2);
    this.rowBetBoxBorder.setDepth(2);
    this.rowBetBox.setDepth(2);
    this.rowBetText.setDepth(2);
    this.dozenBetBoxBorder.setDepth(2);
    this.dozenBetBox.setDepth(2);
    this.dozenBetText.setDepth(2);
    this.colorBetBoxBorder.setDepth(2);
    this.colorBetBox.setDepth(2);
    this.colorBetText.setDepth(2);
    this.evenOddBetBoxBorder.setDepth(2);
    this.evenOddBetBox.setDepth(2);
    this.evenOddBetText.setDepth(2);
    this.lowHighBetBoxBorder.setDepth(2);
    this.lowHighBetBox.setDepth(2);
    this.lowHighBetText.setDepth(2);
  }

  typeChosen() {
    this.straightUpBetBoxBorder.setDepth(0);
    this.straightUpBetBox.setDepth(0);
    this.straightUpBetText.setDepth(0);
    this.splitBetBoxBorder.setDepth(0);
    this.splitBetBox.setDepth(0);
    this.splitBetText.setDepth(0);
    this.streetBetBoxBorder.setDepth(0);
    this.streetBetBox.setDepth(0);
    this.streetBetText.setDepth(0);
    this.cornerBetBoxBorder.setDepth(0);
    this.cornerBetBox.setDepth(0);
    this.cornerBetText.setDepth(0);
    this.suckerBetBoxBorder.setDepth(0);
    this.suckerBetBox.setDepth(0);
    this.suckerBetText.setDepth(0);
    this.lineBetBoxBorder.setDepth(0);
    this.lineBetBox.setDepth(0);
    this.lineBetText.setDepth(0);
    this.rowBetBoxBorder.setDepth(0);
    this.rowBetBox.setDepth(0);
    this.rowBetText.setDepth(0);
    this.dozenBetBoxBorder.setDepth(0);
    this.dozenBetBox.setDepth(0);
    this.dozenBetText.setDepth(0);
    this.colorBetBoxBorder.setDepth(0);
    this.colorBetBox.setDepth(0);
    this.colorBetText.setDepth(0);
    this.evenOddBetBoxBorder.setDepth(0);
    this.evenOddBetBox.setDepth(0);
    this.evenOddBetText.setDepth(0);
    this.lowHighBetBoxBorder.setDepth(0);
    this.lowHighBetBox.setDepth(0);
    this.lowHighBetText.setDepth(0);
    this.messageBoxBorder.setDepth(2);
    this.messageBox.setDepth(2);
    this.messageTextLineOne.setDepth(2);
    this.messageTextLineTwo.setDepth(2);
    this.messageTextLineThree.setDepth(2);
    this.confirmBetBox.setDepth(2);
    this.confirmBetBoxBorder.setDepth(2);
    this.confirmBetText.setDepth(2);
    this.picksListLineOne.setDepth(3);
    this.payoutText.setText(`Payout: ${this.payout} to 1`);
    this.payoutText.setDepth(2);
    this.clearPicks();
    this.picksListLineOne.setText('');
    this.picksListLineTwo.setText('');
    this.picksListLineThree.setText('');
    this.picksListLineFour.setText('');
    this.picksListLineFive.setText('');
    this.picksListLineSix.setText('');
    this.picksListLineSeven.setText('');
    this.picksListLineEight.setText('');
    this.picksListLineNine.setText('');
    this.picksListLineTen.setText('');
    this.picksListLineEleven.setText('');
    this.picksListLineTwelve.setText('');
    this.picksListLineThirteen.setText('');
    this.picksListLineFourteen.setText('');
    this.picksListLineFifteen.setText('');
    this.picksListLineSixteen.setText('');
    this.picksListLineSeventeen.setText('');
    this.picksListLineEighteen.setText('');
  }

  addPick(pick) {
    this.picks.unshift(pick);
    this.updatePicks();
  }

  clearPicks() {
    this.picks = [];
  }

  updatePicks() {
    if (this.picks[0] === 37) {
      this.picksListLineOne.setText('00');
    } else {
      this.picksListLineOne.setText(this.picks[0]);
    }
    if (this.picks[1] === 37) {
      this.picksListLineTwo.setText('00');
    } else {
      this.picksListLineTwo.setText(this.picks[1]);
    }
    if (this.picks[2] === 37) {
      this.picksListLineThree.setText('00');
    } else {
      this.picksListLineThree.setText(this.picks[2]);
    }
    if (this.picks[3] === 37) {
      this.picksListLineFour.setText('00');
    } else {
      this.picksListLineFour.setText(this.picks[3]);
    }
    if (this.picks[4] === 37) {
      this.picksListLineFive.setText('00');
    } else {
      this.picksListLineFive.setText(this.picks[4]);
    }
    if (this.picks[5] === 37) {
      this.picksListLineSix.setText('00');
    } else {
      this.picksListLineSix.setText(this.picks[5]);
    }
    if (this.picks[6] === 37) {
      this.picksListLineSeven.setText('00');
    } else {
      this.picksListLineSeven.setText(this.picks[6]);
    }
    if (this.picks[7] === 37) {
      this.picksListLineEight.setText('00');
    } else {
      this.picksListLineEight.setText(this.picks[7]);
    }
    if (this.picks[8] === 37) {
      this.picksListLineNine.setText('00');
    } else {
      this.picksListLineNine.setText(this.picks[8]);
    }
    if (this.picks[9] === 37) {
      this.picksListLineTen.setText('00');
    } else {
      this.picksListLineTen.setText(this.picks[9]);
    }
    if (this.picks[10] === 37) {
      this.picksListLineEleven.setText('00');
    } else {
      this.picksListLineEleven.setText(this.picks[10]);
    }
    if (this.picks[11] === 37) {
      this.picksListLineTwelve.setText('00');
    } else {
      this.picksListLineTwelve.setText(this.picks[11]);
    }
    if (this.picks[12] === 37) {
      this.picksListLineThirteen.setText('00');
    } else {
      this.picksListLineThirteen.setText(this.picks[12]);
    }
    if (this.picks[13] === 37) {
      this.picksListLineFourteen.setText('00');
    } else {
      this.picksListLineFourteen.setText(this.picks[13]);
    }
    if (this.picks[14] === 37) {
      this.picksListLineFifteen.setText('00');
    } else {
      this.picksListLineFifteen.setText(this.picks[14]);
    }
    if (this.picks[15] === 37) {
      this.picksListLineSixteen.setText('00');
    } else {
      this.picksListLineSixteen.setText(this.picks[15]);
    }
    if (this.picks[16] === 37) {
      this.picksListLineSeventeen.setText('00');
    } else {
      this.picksListLineSeventeen.setText(this.picks[16]);
    }
    if (this.picks[17] === 37) {
      this.picksListLineEighteen.setText('00');
    } else {
      this.picksListLineEighteen.setText(this.picks[17]);
    }
  }

  spinTheWheel() {
    this.result = (Math.floor(Math.random() * 38));
    return this.result;
  }

  showSpinResults(result) {
    let resultText;
    if (this.score === 37) {
      resultText = '00';
    } else {
      resultText = result;
    }
    // check to see if player wins or loses
    let amount;
    this.chosenPicks = [];
    let index;
    if (this.betType === 'Straight-Up') {
      // only use last chosen number
      this.chosenPicks.push(this.picks[0]);
      if (this.chosenPicks === result) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Split') {
      // only use last 2 chosen numbers
      this.chosenPicks.push(this.picks[0]);
      this.chosenPicks.push(this.picks[1]);
      index = this.chosenPicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Street') {
      // TODO use chosenPicks instead of lastThreePicks
      index = this.lastThreePicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Corner') {
      // TODO use chosenPicks instead of lastFourPicks
      index = this.lastFourPicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Sucker') {
      // TODO use chosenPicks instead of suckerPicks
      index = this.suckerPicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Line') {
      // TODO use chosenPicks instead of linePicks
      index = this.linePicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Row' || this.betType === 'Dozen') {
      // TODO use chosenPicks instead of rowPicks
      index = this.rowPicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    } else if (this.betType === 'Color' || this.betType === 'Odd/Even' || this.betType === 'Low/High') {
      // TODO use chosenPicks instead of colorPicks
      index = this.colorPicks.findIndex(x => x==result);
      if (index >= 0) {
        amount = this.betAmount * this.payout;
        this.yourMessage.setText(`You win ${amount} credits!`);
        this.yourMessage.setColor('#33FF00');
      } else {
        amount = this.betAmount * -1;
        this.yourMessage.setText('         Lose');
        this.yourMessage.setColor('#A00000');
      }
    }

    // check for 37 in chosenPicks, if present, convert to '00'
    const checkForThirtySeven = this.chosenPicks.findIndex(x => x==37);
    // if found within chosenPicks array, remove and replace with '00'
    if (checkForThirtySeven >= 1) {
      this.chosenPicks.splice(checkForThirtySeven, 1);
      this.chosenPicks.push('00');
    }

    // check for 37 in lastThreePicks, if present, convert to '00'
    const checkForThirtySevenltp = this.lastThreePicks.findIndex(x => x==37);
    // if found within lastThreePicks array, remove and replace with '00'
    if (checkForThirtySevenltp >= 1) {
      this.lastThreePicks.splice(checkForThirtySevenltp, 1);
      this.lastThreePicks.push('00');
    }

    // check for 37 in lastFourPicks, if present, convert to '00'
    const checkForThirtySevenlfp = this.lastFourPicks.findIndex(x => x==37);
    // if found within lastFourPicks array, remove and replace with '00'
    if (checkForThirtySevenlfp >= 1) {
      this.lastFourPicks.splice(checkForThirtySevenlfp, 1);
      this.lastFourPicks.push('00');
    }

    // check for 37 in suckerPicks, if present, convert to '00'
    const checkForThirtySevensp = this.suckerPicks.findIndex(x => x==37);
    // if found within suckerPicks array, remove and replace with '00'
    if (checkForThirtySevensp >= 1) {
      this.suckerPicks.splice(checkForThirtySevensp, 1);
      this.suckerPicks.push('00');
    }

    // check for 37 in linePicks, if present, convert to '00'
    const checkForThirtySevenlp = this.linePicks.findIndex(x => x==37);
    // if found within linePicks array, remove and replace with '00'
    if (checkForThirtySevenlp >= 1) {
      this.linePicks.splice(checkForThirtySevenlp, 1);
      this.linePicks.push('00');
    }

    // check for 37 in rowPicks, if present, convert to '00'
    const checkForThirtySevenrp = this.rowPicks.findIndex(x => x==37);
    // if found within rowPicks array, remove and replace with '00'
    if (checkForThirtySevenrp >= 1) {
      this.rowPicks.splice(checkForThirtySevenrp, 1);
      this.rowPicks.push('00');
    }

    // check for 37 in colorPicks, if present, convert to '00'
    const checkForThirtySevencolor = this.colorPicks.findIndex(x => x==37);
    // if found within colorPicks array, remove and replace with '00'
    if (checkForThirtySevencolor >= 1) {
      this.colorPicks.splice(checkForThirtySevencolor, 1);
      this.colorPicks.push('00');
    }

    this.yourNumbersTwo.setText('');
    this.scoreNumber.setText(resultText);
    this.yourBetType.setText(`Your bet type: ${this.betType}`);
    if (this.betType === 'Street') {
      this.yourNumbers.setText(`Your numbers:  ${this.lastThreePicks}`);
    } else if (this.betType === 'Corner') {
      this.yourNumbers.setText(`Your numbers:  ${this.lastFourPicks}`);
    } else if (this.betType === 'Sucker') {
      this.yourNumbers.setText(`Your numbers:  ${this.suckerPicks}`);
    } else if (this.betType === 'Line') {
      this.yourNumbers.setText(`Your numbers:  ${this.linePicks}`);
    } else if (this.betType === 'Row' || this.betType === 'Dozen') {
      this.yourNumbers.setText(`Your numbers:  ${this.rowPicks[0]},${this.rowPicks[1]},${this.rowPicks[2]},${this.rowPicks[3]},${this.rowPicks[4]},${this.rowPicks[5]},`);
      this.yourNumbersTwo.setText(`               ${this.rowPicks[6]},${this.rowPicks[7]},${this.rowPicks[8]},${this.rowPicks[9]},${this.rowPicks[10]},${this.rowPicks[11]}`);
    } else if (this.betType === 'Color' || this.betType === 'Odd/Even' || this.betType === 'Low/High') {
      this.yourNumbers.setText(`Your numbers:  ${this.colorPicks[0]},${this.colorPicks[1]},${this.colorPicks[2]},${this.colorPicks[3]},${this.colorPicks[4]},${this.colorPicks[5]},`);
      this.yourNumbersTwo.setText(`               ${this.colorPicks[6]},${this.colorPicks[7]},${this.colorPicks[8]},${this.colorPicks[9]},${this.colorPicks[10]},${this.colorPicks[11]},`);
      this.yourNumbersThree.setText(`               ${this.colorPicks[12]},${this.colorPicks[13]},${this.colorPicks[14]},${this.colorPicks[15]},${this.colorPicks[16]},${this.colorPicks[17]}`);
    } else {
      this.yourNumbers.setText(`Your numbers:  ${this.chosenPicks}`);
    }
    this.yourPayout.setText(`Your payout:   ${this.payout} to 1`);
    this.resultsShadeBox.setDepth(4);
    this.resultsBoxBorder.setDepth(4);
    this.resultsBox.setDepth(4);
    this.rollTitle.setDepth(4);
    this.scoreText.setDepth(4);
    this.scoreNumber.setDepth(4);
    this.yourBetType.setDepth(4);
    this.yourNumbers.setDepth(4);
    this.yourNumbersTwo.setDepth(4);
    this.yourNumbersThree.setDepth(4);
    this.yourPayout.setDepth(4);
    this.yourMessage.setDepth(4);
    this.topLine.setDepth(5);
    this.bottomLine.setDepth(5);
    this.clickToContinueText.setDepth(5);
    return amount;
  }

  straightUpBet() {
    this.messageTextLineOne.setText('Click on any number');
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  splitBet() {
    this.picksListLineTwo.setDepth(3);
    this.messageTextLineOne.setText('Click on any two adjacent numbers');
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  streetBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.messageTextLineOne.setText('Click any three numbers in the same column');
    this.messageTextLineTwo.setText("or '0-1-2', '0-00-2', or '00-2-3'");
    this.messageTextLineThree.setText("Choose 'Confirm Bet' when ready");
  }

  cornerBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.messageTextLineOne.setText('Click any four numbers whose corners touch');
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  suckerBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.messageTextLineOne.setText('Click 0, 00, 1, 2 and 3');
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  lineBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.picksListLineSix.setDepth(3);
    this.messageTextLineOne.setText('Click six numbers within two adjacent columns');
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  rowBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.picksListLineSix.setDepth(3);
    this.picksListLineSeven.setDepth(3);
    this.picksListLineEight.setDepth(3);
    this.picksListLineNine.setDepth(3);
    this.picksListLineTen.setDepth(3);
    this.picksListLineEleven.setDepth(3);
    this.picksListLineTwelve.setDepth(3);
    this.messageTextLineOne.setText("Click any '2-1' button next to chosen row");
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  dozenBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.picksListLineSix.setDepth(3);
    this.picksListLineSeven.setDepth(3);
    this.picksListLineEight.setDepth(3);
    this.picksListLineNine.setDepth(3);
    this.picksListLineTen.setDepth(3);
    this.picksListLineEleven.setDepth(3);
    this.picksListLineTwelve.setDepth(3);
    this.messageTextLineOne.setText("Click '1st 12', '2nd 12', or '3rd 12'");
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  colorBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.picksListLineSix.setDepth(3);
    this.picksListLineSeven.setDepth(3);
    this.picksListLineEight.setDepth(3);
    this.picksListLineNine.setDepth(3);
    this.picksListLineTen.setDepth(3);
    this.picksListLineEleven.setDepth(3);
    this.picksListLineTwelve.setDepth(3);
    this.picksListLineThirteen.setDepth(3);
    this.picksListLineFourteen.setDepth(3);
    this.picksListLineFifteen.setDepth(3);
    this.picksListLineSixteen.setDepth(3);
    this.picksListLineSeventeen.setDepth(3);
    this.picksListLineEighteen.setDepth(3);
    this.messageTextLineOne.setText("Click 'RED' or 'BLACK'");
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  oddEvenBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.picksListLineSix.setDepth(3);
    this.picksListLineSeven.setDepth(3);
    this.picksListLineEight.setDepth(3);
    this.picksListLineNine.setDepth(3);
    this.picksListLineTen.setDepth(3);
    this.picksListLineEleven.setDepth(3);
    this.picksListLineTwelve.setDepth(3);
    this.picksListLineThirteen.setDepth(3);
    this.picksListLineFourteen.setDepth(3);
    this.picksListLineFifteen.setDepth(3);
    this.picksListLineSixteen.setDepth(3);
    this.picksListLineSeventeen.setDepth(3);
    this.picksListLineEighteen.setDepth(3);
    this.messageTextLineOne.setText("Click 'EVEN' or 'ODD'");
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  lowHighBet() {
    this.picksListLineTwo.setDepth(3);
    this.picksListLineThree.setDepth(3);
    this.picksListLineFour.setDepth(3);
    this.picksListLineFive.setDepth(3);
    this.picksListLineSix.setDepth(3);
    this.picksListLineSeven.setDepth(3);
    this.picksListLineEight.setDepth(3);
    this.picksListLineNine.setDepth(3);
    this.picksListLineTen.setDepth(3);
    this.picksListLineEleven.setDepth(3);
    this.picksListLineTwelve.setDepth(3);
    this.picksListLineThirteen.setDepth(3);
    this.picksListLineFourteen.setDepth(3);
    this.picksListLineFifteen.setDepth(3);
    this.picksListLineSixteen.setDepth(3);
    this.picksListLineSeventeen.setDepth(3);
    this.picksListLineEighteen.setDepth(3);
    this.messageTextLineOne.setText("Click '1 to 18' or '19 to 36'");
    this.messageTextLineTwo.setText("Choose 'Confirm Bet' when ready");
  }

  resetScene() {
    this.resultsShadeBox.setDepth(0);
    this.resultsBoxBorder.setDepth(0);
    this.resultsBox.setDepth(0);
    this.rollTitle.setDepth(0);
    this.scoreText.setDepth(0);
    this.scoreNumber.setDepth(0);
    this.yourBetType.setDepth(0);
    this.yourNumbers.setDepth(0);
    this.yourNumbersTwo.setDepth(0);
    this.yourNumbersThree.setDepth(0);
    this.yourPayout.setDepth(0);
    this.yourMessage.setDepth(0);
    this.clickToContinueText.setDepth(0);
    this.messageBoxBorder.setDepth(0);
    this.messageBox.setDepth(0);
    this.messageTextLineOne.setDepth(0);
    this.messageTextLineTwo.setDepth(0);
    this.messageTextLineThree.setDepth(0);
    this.confirmBetBox.setDepth(0);
    this.confirmBetBoxBorder.setDepth(0);
    this.confirmBetText.setDepth(0);
    this.picksListLineOne.setDepth(0);
    this.picksListLineTwo.setDepth(0);
    this.picksListLineThree.setDepth(0);
    this.picksListLineFour.setDepth(0);
    this.picksListLineFive.setDepth(0);
    this.picksListLineSix.setDepth(0);
    this.picksListLineSeven.setDepth(0);
    this.picksListLineEight.setDepth(0);
    this.picksListLineNine.setDepth(0);
    this.picksListLineTen.setDepth(0);
    this.picksListLineEleven.setDepth(0);
    this.picksListLineTwelve.setDepth(0);
    this.picksListLineThirteen.setDepth(0);
    this.picksListLineFourteen.setDepth(0);
    this.picksListLineFifteen.setDepth(0);
    this.picksListLineSixteen.setDepth(0);
    this.picksListLineSeventeen.setDepth(0);
    this.picksListLineEighteen.setDepth(0);
    this.payoutText.setDepth(0);
    this.topLine.setDepth(0);
    this.bottomLine.setDepth(0);
    this.placeBetBoxBorder.setDepth(2);
    this.placeBetBox.setDepth(2);
    this.placeBetText.setDepth(2);
    this.betAmount = 0;
    this.betType = null;
    this.payout = 1;
    this.messageTextLineThree.setText('');
    this.yourNumbersTwo.setText('');
    this.yourNumbersThree.setText('');
    this.clearPicks();
  }
}
