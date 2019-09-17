import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import self from '../index';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import male_icon_img from '../assets/icons/32x32/male_icon_small.png';
import female_icon_img from '../assets/icons/32x32/female_icon_small.png';
import male_icon_boxed_img from '../assets/icons/32x32/male_icon_small_white_boxed.png';
import female_icon_boxed_img from '../assets/icons/32x32/female_icon_small_white_boxed.png';
import arrow_right_img from '../assets/icons/16x16/arrow_right_white_16x16.png';
import arrow_left_img from '../assets/icons/16x16/arrow_left_white_16x16.png';
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
    this.globals = { gameState, self };

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
      self.gender = 'male';
      self.portrait = 1;
      maleSelection = 'male_icon_boxed';
      femaleSelection = 'female_icon';
      maleButton.setTexture(maleSelection);
      femaleButton.setTexture(femaleSelection);
      portrait.setTexture(self.gender + self.portrait);
    });
    femaleButton.on('pointerup', function () {
      self.gender = 'female';
      self.portrait = 1;
      maleSelection = 'male_icon';
      femaleSelection = 'female_icon_boxed';
      femaleButton.setTexture(femaleSelection);
      maleButton.setTexture(maleSelection);
      portrait.setTexture(self.gender + self.portrait);
    });

    //back button logic
    backButton.on('pointerup', function () {
      self.gender = null;
      self.portrait = null;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });
    backTextBox.on('pointerup', function () {
      self.gender = null;
      self.portrait = null;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });

    self.portrait = 0;
    let portrait = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 19) / 128), 'placeholder').setOrigin(0, 0);
    let portraitPreviousArrow = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 56) / 128), 'arrow_left').setOrigin(0, 0).setInteractive();
    let portraitNextArrow = this.add.sprite(((this.config.width * 31) / 128), ((this.config.height * 56) / 128), 'arrow_right').setOrigin(0, 0).setInteractive();

    portraitNextArrow.on('pointerup', function () {
      self.portrait++;
      if (self.portrait === 5) {
        self.portrait = 1;
      };
      portrait.setTexture(self.gender + self.portrait);
    });
    portraitPreviousArrow.on('pointerup', function () {
      self.portrait--;
      if (self.portrait === 0) {
        self.portrait = 4;
      };
      portrait.setTexture(self.gender + self.portrait);
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
