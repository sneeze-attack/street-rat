import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import game from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import male_icon_img from '../assets/icons/32x32/male_icon_small.png';
import female_icon_img from '../assets/icons/32x32/female_icon_small.png';
import male_icon_boxed_img from '../assets/icons/32x32/male_icon_small_white_boxed.png';
import female_icon_boxed_img from '../assets/icons/32x32/female_icon_small_white_boxed.png';
import arrow_right_img from '../assets/icons/16x16/arrow_right_white_16x16.png';
import arrow_left_img from '../assets/icons/16x16/arrow_left_white_16x16.png';
import plus_img from '../assets/icons/16x16/plus.png';
import minus_img from '../assets/icons/16x16/minus.png';
import female1_img from '../assets/portraits/female/160x200/female1.jpg';
import female2_img from '../assets/portraits/female/160x200/female2.jpg';
import female3_img from '../assets/portraits/female/160x200/female3.jpg';
import female4_img from '../assets/portraits/female/160x200/female4.jpg';
import male1_img from '../assets/portraits/male/160x200/male1.jpg';
import male2_img from '../assets/portraits/male/160x200/male2.jpg';
import male3_img from '../assets/portraits/male/160x200/male3.jpg';
import male4_img from '../assets/portraits/male/160x200/male4.jpg';
import placeholder_img from '../assets/portraits/placeholder/grey.jpg';


export class CharGenScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CharGenScene' });
  }

  preload() {
    this.load.image('japan_background', japan_background_img);
    this.load.image('male_icon', male_icon_img);
    this.load.image('female_icon', female_icon_img);
    this.load.image('male_icon_boxed', male_icon_boxed_img);
    this.load.image('female_icon_boxed', female_icon_boxed_img);
    this.load.image('arrow_right', arrow_right_img);
    this.load.image('arrow_left', arrow_left_img);
    this.load.image('plus', plus_img);
    this.load.image('minus', minus_img);
    this.load.image('female1', female1_img);
    this.load.image('female2', female2_img);
    this.load.image('female3', female3_img);
    this.load.image('female4', female4_img);
    this.load.image('male1', male1_img);
    this.load.image('male2', male2_img);
    this.load.image('male3', male3_img);
    this.load.image('male4', male4_img);
    this.load.image('placeholder', placeholder_img);
  }

  create() {

    //needs comment
    this.config = this.sys.game.config;
    this.globals = { gameState };

    //add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    //add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    //back button
    let backTextBox = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 100) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let backButton = this.add.text(((this.config.width * 24) / 128), ((this.config.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);

    //buttons to select gender
    let maleSelection = 'male_icon';
    let femaleSelection = 'female_icon';
    let maleButton = this.add.sprite(((this.config.width * 21) / 128), ((this.config.height * 55) / 128), maleSelection).setOrigin(0, 0).setInteractive();
    let femaleButton = this.add.sprite(((this.config.width * 26) / 128), ((this.config.height * 55) / 128), femaleSelection).setOrigin(0, 0).setInteractive();

    //boxed selection logic for gender
    maleButton.on('pointerup', function () {
      game.self.gender = 'male';
      game.self.portrait = 1;
      maleSelection = 'male_icon_boxed';
      femaleSelection = 'female_icon';
      maleButton.setTexture(maleSelection);
      femaleButton.setTexture(femaleSelection);
      portrait.setTexture(game.self.gender + game.self.portrait);
    });
    femaleButton.on('pointerup', function () {
      game.self.gender = 'female';
      game.self.portrait = 1;
      maleSelection = 'male_icon';
      femaleSelection = 'female_icon_boxed';
      femaleButton.setTexture(femaleSelection);
      maleButton.setTexture(maleSelection);
      portrait.setTexture(game.self.gender + game.self.portrait);
    });

    //back button logic
    backButton.on('pointerup', function () {
      game.self.gender = null;
      game.self.portrait = null;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });
    backTextBox.on('pointerup', function () {
      game.self.gender = null;
      game.self.portrait = null;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });

    //create portrait with placeholder and arrows
    game.self.portrait = 0;
    let portrait = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 19) / 128), 'placeholder').setOrigin(0, 0);
    let portraitPreviousArrow = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 56) / 128), 'arrow_left').setOrigin(0, 0).setInteractive();
    let portraitNextArrow = this.add.sprite(((this.config.width * 31) / 128), ((this.config.height * 56) / 128), 'arrow_right').setOrigin(0, 0).setInteractive();

    //portrait arrow code
    portraitNextArrow.on('pointerup', function () {
      game.self.portrait++;
      if (game.self.portrait === 5) {
        game.self.portrait = 1;
      };
      portrait.setTexture(game.self.gender + game.self.portrait);
    });
    portraitPreviousArrow.on('pointerup', function () {
      game.self.portrait--;
      if (game.self.portrait === 0) {
        game.self.portrait = 4;
      };
      portrait.setTexture(game.self.gender + game.self.portrait);
    });

    //name
    let nameText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), 'PlayerName').setColor('#FFFFFF').setFontSize(36);

    //player points
    let pointsText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 56) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);

    //primary attributes
    let stText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 29) / 128), 'ST: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28);
    let dxText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 35) / 128), 'DX: ' + game.self.dexterity).setColor('#FFFFFF').setFontSize(28);
    let iqText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 41) / 128), 'IQ: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28);
    let htText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 47) / 128), 'HT: ' + game.self.health).setColor('#FFFFFF').setFontSize(28);

    //attribute plus and minus sprites + code
    let stPlus = this.add.sprite(((this.config.width * 50) / 128), ((this.config.height * 119) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let stMinus = this.add.sprite(((this.config.width * 47) / 128), ((this.config.height * 119) / 512), 'minus').setOrigin(0, 0).setInteractive();

    stPlus.on('pointerup', function () {
      if (game.self.strength < 20 && game.self.points >= 10) {
        game.self.strength++;
        stText.setText('ST: ' + game.self.strength);
        game.self.points -= 10;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    stMinus.on('pointerup', function () {
      if (game.self.strength > 7) {
        game.self.strength--;
        stText.setText('ST: ' + game.self.strength);
        game.self.points += 10;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let dxPlus = this.add.sprite(((this.config.width * 50) / 128), ((this.config.height * 143) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let dxMinus = this.add.sprite(((this.config.width * 47) / 128), ((this.config.height * 143) / 512), 'minus').setOrigin(0, 0).setInteractive();

    dxPlus.on('pointerup', function () {
      if (game.self.dexterity < 20 && game.self.points >= 20) {
        game.self.dexterity++;
        dxText.setText('DX: ' + game.self.dexterity);
        game.self.points -= 20;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    dxMinus.on('pointerup', function () {
      if (game.self.dexterity > 7) {
        game.self.dexterity--;
        dxText.setText('DX: ' + game.self.dexterity);
        game.self.points += 20;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let iqPlus = this.add.sprite(((this.config.width * 50) / 128), ((this.config.height * 167) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let iqMinus = this.add.sprite(((this.config.width * 47) / 128), ((this.config.height * 167) / 512), 'minus').setOrigin(0, 0).setInteractive();

    iqPlus.on('pointerup', function () {
      if (game.self.intelligence < 20 && game.self.points >= 20) {
        game.self.intelligence++;
        iqText.setText('IQ: ' + game.self.intelligence);
        game.self.points -= 20;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    iqMinus.on('pointerup', function () {
      if (game.self.intelligence > 7) {
        game.self.intelligence--;
        iqText.setText('IQ: ' + game.self.intelligence);
        game.self.points += 20;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let htPlus = this.add.sprite(((this.config.width * 50) / 128), ((this.config.height * 191) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let htMinus = this.add.sprite(((this.config.width * 47) / 128), ((this.config.height * 191) / 512), 'minus').setOrigin(0, 0).setInteractive();

    htPlus.on('pointerup', function () {
      if (game.self.health < 20 && game.self.points >= 10) {
        game.self.health++;
        htText.setText('HT: ' + game.self.health);
        game.self.points -= 10;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    htMinus.on('pointerup', function () {
      if (game.self.health > 7) {
        game.self.health--;
        htText.setText('HT: ' + game.self.health);
        game.self.points += 10;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

  }

  update() {
    //scene change logic
    if (gameState.nextScene === 'GameScene' || gameState.nextScene === 'StartScene') {
      this.scene.stop(gameState.previousScene);
      this.scene.start(gameState.nextScene);
    };

  }

}
