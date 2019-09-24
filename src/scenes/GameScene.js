import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import game from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import female1_img from '../assets/portraits/female/160x200/female1.jpg';
import female2_img from '../assets/portraits/female/160x200/female2.jpg';
import female3_img from '../assets/portraits/female/160x200/female3.jpg';
import female4_img from '../assets/portraits/female/160x200/female4.jpg';
import male1_img from '../assets/portraits/male/160x200/male1.jpg';
import male2_img from '../assets/portraits/male/160x200/male2.jpg';
import male3_img from '../assets/portraits/male/160x200/male3.jpg';
import male4_img from '../assets/portraits/male/160x200/male4.jpg';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('japan_background', japan_background_img);
    this.load.image('female1', female1_img);
    this.load.image('female2', female2_img);
    this.load.image('female3', female3_img);
    this.load.image('female4', female4_img);
    this.load.image('male1', male1_img);
    this.load.image('male2', male2_img);
    this.load.image('male3', male3_img);
    this.load.image('male4', male4_img);
  }

  create() {

    //needs comment
    this.config = this.sys.game.config;

    //add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    //add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    let portrait = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 19) / 128), game.self.gender + game.self.portrait).setOrigin(0, 0);

    //name
    let enterNameText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), game.self.name).setColor('#FFFFFF').setFontSize(36);

    //player points
    let pointsText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 56) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);

    //primary attributes, first column
    let stText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 29) / 128), 'ST: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28);
    let dxText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 35) / 128), 'DX: ' + game.self.dexterity).setColor('#FFFFFF').setFontSize(28);
    let iqText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 41) / 128), 'IQ: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28);
    let htText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 47) / 128), 'HT: ' + game.self.health).setColor('#FFFFFF').setFontSize(28);

    //secondary attributes, second column
    let hpText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 29) / 128), '  HP: ' + game.self.hp).setColor('#FFFFFF').setFontSize(28);
    let willText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 35) / 128), 'Will: ' + game.self.will).setColor('#FFFFFF').setFontSize(28);
    let perText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 41) / 128), ' Per: ' + game.self.perception).setColor('#FFFFFF').setFontSize(28);
    let fpText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 47) / 128), '  FP: ' + game.self.fp).setColor('#FFFFFF').setFontSize(28);

    //more secondary attributes, third column
    let liftText = this.add.text(((this.config.width * 80) / 128), ((this.config.height * 29) / 128), ' Lift: ' + game.self.lift).setColor('#FFFFFF').setFontSize(28);
    let speedText = this.add.text(((this.config.width * 80) / 128), ((this.config.height * 35) / 128), 'Speed: ' + game.self.speed).setColor('#FFFFFF').setFontSize(28);
    let moveText = this.add.text(((this.config.width * 80) / 128), ((this.config.height * 41) / 128), ' Move: ' + game.self.move).setColor('#FFFFFF').setFontSize(28);
  }

  update() {


  }

}
