/* global Phaser
no-undef: off */
import { config } from '../../index';

export default class Gamble extends Phaser.GameObjects.Group {
  // Intended for use only in GamblingScene

  // Gamble requires scene which is usually 'this'
  constructor(scene) {
    // add background image
    scene.add.image(0, 0, 'japan_background').setOrigin(0, 0);
    // add black box
    scene.add.rectangle(((config.scale.width * 16) / 128), ((config.scale.height * 16) / 128), ((config.scale.width * 96) / 128), ((config.scale.height * 96) / 128), 0x000000).setOrigin(0, 0);
    // options
    const optionsCog = scene.add.sprite(((config.scale.width * 122) / 128), ((config.scale.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive();

    // back button
    const backTextBox = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 100) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const backButton = scene.add.text(((config.scale.width * 24) / 128), ((config.scale.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"');
    // game choices -- chance (roulette) or skill (cards using skill checks)
    const rouletteBox = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 21) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const rouletteText = scene.add.text(((config.scale.width * 21) / 128), ((config.scale.height * 22) / 128), 'Roulette').setColor('#FFFFFF').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"');
    const cardsBox = scene.add.rectangle(((config.scale.width * 18) / 128), ((config.scale.height * 33) / 128), ((config.scale.width * 20) / 128), ((config.scale.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    const cardsText = scene.add.text(((config.scale.width * 21) / 128), ((config.scale.height * 34) / 128), 'Cards').setColor('#FFFFFF').setInteractive().setFontSize(32).setFontFamily('"DejaVu Sans Mono"');
    super(scene);
    this.optionsCog = optionsCog;
    this.backTextBox = backTextBox;
    this.backButton = backButton;
    this.rouletteBox = rouletteBox;
    this.rouletteText = rouletteText;
    this.cardsBox = cardsBox;
    this.cardsText = cardsText;
  }
}
