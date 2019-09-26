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

    //portrait
    let portrait = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 19) / 128), game.self.gender + game.self.portrait).setOrigin(0, 0);

    //name
    let enterNameText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), game.self.name).setColor('#FFFFFF').setFontSize(36);

    //player points
    let pointsText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 56) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);

    //primary attributes, first column
    let strText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 29) / 128), 'STR: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28);
    let agiText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 35) / 128), 'AGI: ' + game.self.agility).setColor('#FFFFFF').setFontSize(28);
    let intText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 41) / 128), 'INT: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28);
    let conText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 47) / 128), 'CON: ' + game.self.constitution).setColor('#FFFFFF').setFontSize(28);

    //secondary attributes, second column
    let hpText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 29) / 128), '  HP: ' + game.self.hp).setColor('#FFFFFF').setFontSize(28);
    let willText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 35) / 128), 'Will: ' + game.self.will).setColor('#FFFFFF').setFontSize(28);
    let perText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 41) / 128), ' Per: ' + game.self.perception).setColor('#FFFFFF').setFontSize(28);
    let fpText = this.add.text(((this.config.width * 56) / 128), ((this.config.height * 47) / 128), '  FP: ' + game.self.fp).setColor('#FFFFFF').setFontSize(28);

    //more secondary attributes, third column
    let carryText = this.add.text(((this.config.width * 80) / 128), ((this.config.height * 29) / 128), 'Carry: ' + game.self.carry).setColor('#FFFFFF').setFontSize(28);
    let speedText = this.add.text(((this.config.width * 80) / 128), ((this.config.height * 35) / 128), 'Speed: ' + game.self.speed).setColor('#FFFFFF').setFontSize(28);
    let moveText = this.add.text(((this.config.width * 80) / 128), ((this.config.height * 41) / 128), ' Move: ' + game.self.move).setColor('#FFFFFF').setFontSize(28);

    //add in a message box
    let messageBoxBorder = this.add.rectangle(((this.config.width * 62) / 128), ((this.config.height * 62) / 128), ((this.config.width * 48) / 128), ((this.config.height * 47) / 128), 0x4D4E4F).setOrigin(0, 0);
    let messageBox = this.add.rectangle(((this.config.width * 63) / 128), ((this.config.height * 63) / 128), ((this.config.width * 46) / 128), ((this.config.height * 45) / 128), 0x000000).setOrigin(0, 0);

    //message box text
    let messageBoxLineOne = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 65) / 128), 'Test Text: Line 1').setColor('#FFFFFF').setFontSize(28);
    let messageBoxLineTwo = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 71) / 128), 'Test Text: Line 2').setColor('#FFFFFF').setFontSize(28);
    let messageBoxLineThree = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 77) / 128), 'Test Text: Line 3').setColor('#FFFFFF').setFontSize(28);
    let messageBoxLineFour = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 83) / 128), 'Test Text: Line 4').setColor('#FFFFFF').setFontSize(28);
    let messageBoxLineFive = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 89) / 128), 'Test Text: Line 5').setColor('#FFFFFF').setFontSize(28);
    let messageBoxLineSix = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 95) / 128), 'Test Text: Line 6').setColor('#FFFFFF').setFontSize(28);
    let messageBoxLineSeven = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 101) / 128), 'Test Text: Line 7').setColor('#FFFFFF').setFontSize(28);

    //action buttons

    //panhandling
    //button + text
    let panhandlingButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 62) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let panhandlingText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 63) / 128), 'Panhandle').setColor('#FFFFFF').setInteractive().setFontSize(32);

    panhandlingButton.on('pointerup', function () {

    });


    let padding1Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 62) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding1Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 63) / 128), 'Test1').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let padding2Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 73) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding2Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 74) / 128), 'Test2').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let padding3Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 73) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding3Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 74) / 128), 'Test3').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let padding4Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 84) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding4Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 85) / 128), 'Test4').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let padding5Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 84) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding5Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 85) / 128), 'Test5').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let padding6Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 95) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding6Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 96) / 128), 'Test6').setColor('#FFFFFF').setInteractive().setFontSize(32);

    let padding7Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 95) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding7Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 96) / 128), 'Test7').setColor('#FFFFFF').setInteractive().setFontSize(32);


  }

  update() {


  }

}
