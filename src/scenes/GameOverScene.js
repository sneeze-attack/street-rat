import Phaser from 'phaser';
import game from '../index';


export class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  preload() {

  }

  create() {

    // needs comment
    this.config = this.sys.game.config;
    // add black box
    let createBox = this.add.rectangle(0, 0, this.config.width, this.config.height, 0x000000).setOrigin(0, 0);
    let titleText = this.add.text(((this.config.width * 6) / 128), ((this.config.height * 10) / 128), 'You have died..').setColor('#FFFFFF').setFontSize(128).setOrigin(0, 0);

  }

  update() {


  }

}
