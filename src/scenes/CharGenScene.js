import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import game from '../index';
import * as nameGen from '../modules/NameGen';
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

    //add black box
    let createBox = this.add.rectangle(0, 0, this.config.width, this.config.height, 0x000000).setOrigin(0, 0);

    //create stat boxes
    let primaryStatBoxBorder = this.add.rectangle(((this.config.width * 19) / 128), ((this.config.height * 12) / 128), ((this.config.width * 21) / 128), ((this.config.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive();
    let primaryStatBoxInterior = this.add.rectangle(((this.config.width * 19.5) / 128), ((this.config.height * 12.5) / 128), ((this.config.width * 20) / 128), ((this.config.height * 24) / 128), 0x000000).setOrigin(0, 0).setInteractive();

    let secondaryStatBoxBorder = this.add.rectangle(((this.config.width * 39.5) / 128), ((this.config.height * 12) / 128), ((this.config.width * 24) / 128), ((this.config.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive();
    let secondaryStatBoxInterior = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 12.5) / 128), ((this.config.width * 23) / 128), ((this.config.height * 24) / 128), 0x000000).setOrigin(0, 0).setInteractive();

    let tertiaryStatBoxBorder = this.add.rectangle(((this.config.width * 62) / 128), ((this.config.height * 12) / 128), ((this.config.width * 28) / 128), ((this.config.height * 25) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive();
    let tertiaryStatBoxInterior = this.add.rectangle(((this.config.width * 62.5) / 128), ((this.config.height * 12.5) / 128), ((this.config.width * 27) / 128), ((this.config.height * 24) / 128), 0x000000).setOrigin(0, 0).setInteractive();

    //skills boxes
    let skillsBoxBorder = this.add.rectangle(((this.config.width * 89) / 128), ((this.config.height * 12) / 128), ((this.config.width * 37) / 128), ((this.config.height * 101) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive();
    let skillsBoxInterior = this.add.rectangle(((this.config.width * 89.5) / 128), ((this.config.height * 12.5) / 128), ((this.config.width * 36) / 128), ((this.config.height * 100) / 128), 0x000000).setOrigin(0, 0).setInteractive();

    // panhandling
    let panhandlingText = this.add.text(((this.config.width * 90) / 128), ((this.config.height * 15) / 128), 'Panhandling (' + game.self.panhandle + ')        ' + game.self.panhandleScore).setColor('#FFFFFF').setFontSize(24);
    let panhandlingPlus = this.add.sprite(((this.config.width * 116) / 128), ((this.config.height * 15.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let panhandlingMinus = this.add.sprite(((this.config.width * 113) / 128), ((this.config.height * 15.75) / 128), 'minus').setOrigin(0, 0).setInteractive();
    panhandlingPlus.on('pointerup', function () {
      let number = ((game.self.panhandle - 1) * 4);
      if (game.self.panhandle === 0 && game.self.points >= 1 && game.self.panhandleScore <= 15) {
        game.self.panhandle++;
        game.self.points--;
      } else if (game.self.panhandle === 1 && game.self.points >= 2 && game.self.panhandleScore <= 15) {
        game.self.panhandle++;
        game.self.points -= 2;
      } else if (game.self.panhandle >= 2 && game.self.points >= number && game.self.panhandleScore <= 15) {
        game.self.panhandle++;
        game.self.points -= number;
      };
      game.self.calculatePanhandleScore();
      updateText.call(this);
    });
    panhandlingMinus.on('pointerup', function () {
      let number = ((game.self.panhandle - 2) * 4);
      if (game.self.panhandle === 1) {
        game.self.panhandle--;
        game.self.points++;
      } else if (game.self.panhandle === 2) {
        game.self.panhandle--;
        game.self.points += 2;
      } else if (game.self.panhandle >= 3) {
        game.self.panhandle--;
        game.self.points += number;
      };
      game.self.calculatePanhandleScore();
      updateText.call(this);
    });

    //future concept
    let conceptBoxBorder = this.add.rectangle(((this.config.width * 3) / 128), ((this.config.height * 48) / 128), ((this.config.width * 86.5) / 128), ((this.config.height * 65) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive();
    let conceptBoxInterior = this.add.rectangle(((this.config.width * 3.5) / 128), ((this.config.height * 48.5) / 128), ((this.config.width * 85.5) / 128), ((this.config.height * 64) / 128), 0x000000).setOrigin(0, 0).setInteractive();

    //divider -- points
    let dividerBoxBorder = this.add.rectangle(((this.config.width * 19) / 128), ((this.config.height * 36.75) / 128), ((this.config.width * 70.5) / 128), ((this.config.height * 11.5) / 128), 0xC0C0C0).setOrigin(0, 0).setInteractive();
    let dividerBoxInterior = this.add.rectangle(((this.config.width * 19.5) / 128), ((this.config.height * 37.25) / 128), ((this.config.width * 69.5) / 128), ((this.config.height * 10.5) / 128), 0x000000).setOrigin(0, 0).setInteractive();

    //back button
    let backTextBox = this.add.rectangle(((this.config.width * 2) / 128), ((this.config.height * 115) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let backButton = this.add.text(((this.config.width * 8) / 128), ((this.config.height * 116) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);

    //continue button
    let continueTextBox = this.add.rectangle(((this.config.width * 105) / 128), ((this.config.height * 115) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let continueButton = this.add.text(((this.config.width * 108) / 128), ((this.config.height * 116) / 128), 'Continue').setColor('#FFFFFF').setInteractive().setFontSize(32);

    //buttons to select gender
    let maleSelection = 'male_icon';
    let femaleSelection = 'female_icon';
    let maleButton = this.add.sprite(((this.config.width * 6) / 128), ((this.config.height * 40) / 128), maleSelection).setOrigin(0, 0).setInteractive();
    let femaleButton = this.add.sprite(((this.config.width * 11) / 128), ((this.config.height * 40) / 128), femaleSelection).setOrigin(0, 0).setInteractive();

    //boxed selection logic for gender
    function genderUpdate() {
      game.self.portrait = 1;
      maleButton.setTexture(maleSelection);
      femaleButton.setTexture(femaleSelection);
      portrait.setTexture(game.self.gender + game.self.portrait);
    }
    maleButton.on('pointerup', function () {
      game.self.gender = 'male';
      maleSelection = 'male_icon_boxed';
      femaleSelection = 'female_icon';
      genderUpdate.call(this);
    });
    femaleButton.on('pointerup', function () {
      game.self.gender = 'female';
      maleSelection = 'male_icon';
      femaleSelection = 'female_icon_boxed';
      genderUpdate.call(this);
    });

    //continue button logic
    function continueToGame() {
      if (!game.self.gender) {
        let genderRoll = (Math.floor((Math.random() * 2) + 1));
        game.self.portrait = 1;
        if (genderRoll === 1) {
          game.self.gender = 'male';
        } else {
          game.self.gender = 'female';
        };
        portrait.setTexture(game.self.gender + game.self.portrait);
      };
      //if name hasnt been chosen, randomly assign one based on gender
      if (!game.self.name) {
        if (game.self.gender === 'male') {
          game.self.name = nameGen.maleFirstName();
        } else {
          game.self.name = nameGen.femaleFirstName();
        };
      };
      // set players stat maxes from charGen only
      game.self.spMax = game.self.sp;
      game.self.hpMax = game.self.hp;

      // set player dodge
      game.self.calculateDodge();

      // values to change scene
      gameState.nextScene = 'GameScene';
      gameState.previousScene = 'CharGenScene';
    }
    continueButton.on('pointerup', function () {
      continueToGame.call(this);
    });
    continueTextBox.on('pointerup', function () {
      continueToGame.call(this);
    });

    //back button logic
    function backReset() {
      game.self.gender = null;
      game.self.portrait = null;
      game.self.name = null;
      game.self.strength = 10;
      game.self.intelligence = 10;
      game.self.agility = 10;
      game.self.constitution = 10;
      game.self.points = 100;
      game.self.hp = 10;
      game.self.will = 10;
      game.self.perception = 10;
      game.self.sp = 10;
      game.self.carry = 20;
      game.self.speed = 5;
      game.self.move = 5;
      game.self.dodge = 8;
      game.self.panhandle = 0;
      game.self.panhandleScore = 6;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    }
    backButton.on('pointerup', function () {
      backReset.call(this);
    });
    backTextBox.on('pointerup', function () {
      backReset.call(this);
    });

    //create portrait with placeholder and arrows
    game.self.portrait = 0;
    let portrait = this.add.sprite(((this.config.width * 3) / 128), ((this.config.height * 4) / 128), 'placeholder').setOrigin(0, 0);
    let portraitPreviousArrow = this.add.sprite(((this.config.width * 3) / 128), ((this.config.height * 41.25) / 128), 'arrow_left').setOrigin(0, 0).setInteractive();
    let portraitNextArrow = this.add.sprite(((this.config.width * 16) / 128), ((this.config.height * 41) / 128), 'arrow_right').setOrigin(0, 0).setInteractive();

    //portrait arrow code
    portraitNextArrow.on('pointerup', function () {
      if (game.self.gender) {
        game.self.portrait++;
        //loop back to first portrait once end is reached
        if (game.self.portrait === 5) {
          game.self.portrait = 1;
        };
        portrait.setTexture(game.self.gender + game.self.portrait);
      };
    });
    portraitPreviousArrow.on('pointerup', function () {
      if (game.self.gender) {
        game.self.portrait--;
        //loop back to last portrait once beginning is reached
        if (game.self.portrait === 0) {
          game.self.portrait = 4;
        };
        portrait.setTexture(game.self.gender + game.self.portrait);
      };
    });

    //name
    let enterNameText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 5) / 128), 'Name').setColor('#FFFFFF').setFontSize(36);

    //enter name code
    let nameEntry = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 5) / 128), '', { font: '36px Courier', fill: '#ffffff' });
    let keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    let keyBackspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

    this.input.keyboard.on('keydown', function (event) {
        if (event.keyCode === 8 && nameEntry.text.length > 0)
        {
            nameEntry.text = nameEntry.text.substr(0, nameEntry.text.length - 1);
            game.self.name = nameEntry.text;
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
        {
            nameEntry.text += event.key;
            enterNameText.destroy();
            game.self.name = nameEntry.text;
        }
    });

    //player points
    let pointsText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 40.75) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);

    //primary attributes, first column
    let strText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 13) / 128), 'STR: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28);
    let strPlus = this.add.sprite(((this.config.width * 36) / 128), ((this.config.height * 13.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let strMinus = this.add.sprite(((this.config.width * 33) / 128), ((this.config.height * 13.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let agiText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 19) / 128), 'AGI: ' + game.self.agility).setColor('#FFFFFF').setFontSize(28);
    let agiPlus = this.add.sprite(((this.config.width * 36) / 128), ((this.config.height * 19.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let agiMinus = this.add.sprite(((this.config.width * 33) / 128), ((this.config.height * 19.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let intText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 25) / 128), 'INT: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28);
    let intPlus = this.add.sprite(((this.config.width * 36) / 128), ((this.config.height * 25.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let intMinus = this.add.sprite(((this.config.width * 33) / 128), ((this.config.height * 25.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let conText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 31) / 128), 'CON: ' + game.self.constitution).setColor('#FFFFFF').setFontSize(28);
    let conPlus = this.add.sprite(((this.config.width * 36) / 128), ((this.config.height * 31.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let conMinus = this.add.sprite(((this.config.width * 33) / 128), ((this.config.height * 31.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    //secondary attributes, second column
    let hpText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 13) / 128), '  HP: ' + game.self.hp).setColor('#FFFFFF').setFontSize(28);
    let hpPlus = this.add.sprite(((this.config.width * 59) / 128), ((this.config.height * 13.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let hpMinus = this.add.sprite(((this.config.width * 56) / 128), ((this.config.height * 13.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let spText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 19) / 128), '  SP: ' + game.self.sp).setColor('#FFFFFF').setFontSize(28);
    let spPlus = this.add.sprite(((this.config.width * 59) / 128), ((this.config.height * 19.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let spMinus = this.add.sprite(((this.config.width * 56) / 128), ((this.config.height * 19.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let perText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 25) / 128), ' Per: ' + game.self.perception).setColor('#FFFFFF').setFontSize(28);
    let perPlus = this.add.sprite(((this.config.width * 59) / 128), ((this.config.height * 25.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let perMinus = this.add.sprite(((this.config.width * 56) / 128), ((this.config.height * 25.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let willText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 31) / 128), 'Will: ' + game.self.will).setColor('#FFFFFF').setFontSize(28);
    let willPlus = this.add.sprite(((this.config.width * 59) / 128), ((this.config.height * 31.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let willMinus = this.add.sprite(((this.config.width * 56) / 128), ((this.config.height * 31.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    //more secondary attributes, third column
    let carryText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 13) / 128), 'Carry: ' + game.self.carry).setColor('#FFFFFF').setFontSize(28);

    let speedText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 19) / 128), 'Speed: ' + game.self.speed).setColor('#FFFFFF').setFontSize(28);
    let speedPlus = this.add.sprite(((this.config.width * 86) / 128), ((this.config.height * 19.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let speedMinus = this.add.sprite(((this.config.width * 83) / 128), ((this.config.height * 19.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let moveText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 25) / 128), ' Move: ' + game.self.move).setColor('#FFFFFF').setFontSize(28);
    let movePlus = this.add.sprite(((this.config.width * 86) / 128), ((this.config.height * 25.75) / 128), 'plus').setOrigin(0, 0).setInteractive();
    let moveMinus = this.add.sprite(((this.config.width * 83) / 128), ((this.config.height * 25.75) / 128), 'minus').setOrigin(0, 0).setInteractive();

    let dodgeText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 31) / 128), 'Dodge: ' + game.self.dodge).setColor('#FFFFFF').setFontSize(28);

    //integers to track stats with specific thresholds
    let willInteger = 0;
    let perInteger = 0;
    let speedInteger = 0;
    let moveInteger = 0;

    //attribute plus and minus sprites + code

    function updateText() {
      //updates all stat displays
      strText.setText('STR: ' + game.self.strength);
      agiText.setText('AGI: ' + game.self.agility);
      intText.setText('INT: ' + game.self.intelligence);
      conText.setText('CON: ' + game.self.constitution);

      hpText.setText('  HP: ' + game.self.hp);
      willText.setText('Will: ' + game.self.will);
      perText.setText(' Per: ' + game.self.perception);
      spText.setText('  SP: ' + game.self.sp);

      carryText.setText('Carry: ' + game.self.carry);
      speedText.setText('Speed: ' + game.self.speed);
      moveText.setText(' Move: ' + game.self.move);
      dodgeText.setText('Dodge: ' + game.self.dodge);

      pointsText.setText('Points: ' + game.self.points);

      // keep panhandle text aligned with if statement
      if (game.self.panhandle === 10) {
        panhandlingText.setText('Panhandling (' + game.self.panhandle + ')       ' + game.self.panhandleScore);
      } else {
        panhandlingText.setText('Panhandling (' + game.self.panhandle + ')        ' + game.self.panhandleScore);
      };

    }

    strPlus.on('pointerup', function () {
      //hp should not vary beyond +- 30% of strength
      if (game.self.strength < 20 && game.self.points >= 10 && game.self.hp < (1.3 * game.self.strength)) {
        game.self.strength++;
        game.self.hp++;
        //carry is (STRxSTR)/5, rounded to nearest integer if carry is 10 or more
        game.self.carry = ((game.self.strength * game.self.strength) / 5);
        if (game.self.carry >= 10) {
          game.self.carry = Math.round(((game.self.strength * game.self.strength) / 5));
        };
        game.self.points -= 10;
      } else if (game.self.strength < 20 && game.self.hp >= (1.3 * game.self.strength)) {
        game.self.hp--;
        game.self.points += 2;
      };
      updateText.call(this);
    });

    strMinus.on('pointerup', function () {
      //hp should not vary beyond +- 30% of strength
      if (game.self.strength > 7 && game.self.hp > (0.7 * game.self.strength)) {
        game.self.strength--;
        game.self.hp--;
        //carry is (STRxSTR)/5, rounded to nearest integer if carry is 10 or more
        game.self.carry = ((game.self.strength * game.self.strength) / 5);
        if (game.self.carry >= 10) {
          game.self.carry = Math.round(((game.self.strength * game.self.strength) / 5));
        };
        game.self.points += 10;
      } else if (game.self.strength > 7 && game.self.points >= 2 && game.self.hp <= (0.7 * game.self.strength)) {
        game.self.hp++;
        game.self.points -= 2;
      };
      updateText.call(this);
    });


    agiPlus.on('pointerup', function () {
      if (game.self.agility < 20 && game.self.points >= 20) {
        game.self.agility++;
        game.self.points -= 20;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      };
      updateText.call(this);
    });
    agiMinus.on('pointerup', function () {
      if (game.self.agility > 7) {
        game.self.agility--;
        game.self.points += 20;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      };
      updateText.call(this);
    });


    intPlus.on('pointerup', function () {
      if (game.self.intelligence < 20 && game.self.points >= 20 && game.self.will < 20 && game.self.perception < 20) {
        game.self.intelligence++;
        game.self.will++;
        game.self.perception++;
        game.self.points -= 20;
        game.self.calculatePanhandleScore();
        //if will is more than 20, decrease it so that intelligence may be raised
      } else if (game.self.intelligence < 20 && game.self.will >= 20) {
        game.self.will--;
        willInteger++;
        game.self.points += 5;
      } else if (game.self.intelligence < 20 && game.self.perception >= 20) {
        game.self.perception--;
        perInteger++;
        game.self.points += 5;
      };
      updateText.call(this);
    });
    intMinus.on('pointerup', function () {
      if (game.self.intelligence > 7) {
        game.self.intelligence--;
        game.self.will--;
        game.self.perception--;
        game.self.points += 20;
        game.self.calculatePanhandleScore();
      };
      updateText.call(this);
    });


    conPlus.on('pointerup', function () {
      //sp should not vary beyond +- 30% of constitution
      if (game.self.constitution < 20 && game.self.points >= 10 && game.self.sp < (1.3 * game.self.constitution)) {
        game.self.constitution++;
        game.self.sp++;
        game.self.points -= 10;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      } else if (game.self.constitution < 20 && game.self.sp >= (1.3 * game.self.constitution)) {
		    game.self.sp--;
		    game.self.points += 3;
      };
      updateText.call(this);
    });
    conMinus.on('pointerup', function () {
      //sp should not vary beyond +- 30% of constitution
      if (game.self.constitution > 7 && game.self.sp > (0.7 * game.self.constitution)) {
        game.self.constitution--;
		    game.self.sp--;
        game.self.points += 10;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      } else if (game.self.constitution > 7 && game.self.points >= 3 && game.self.sp <= (0.7 * game.self.constitution)) {
	      game.self.sp++
	      game.self.points -= 3;
	    };
      updateText.call(this);
    });

    //hp should not vary beyond +- 30% of strength
    hpPlus.on('pointerup', function () {
      if (game.self.hp < (1.3 * game.self.strength) && game.self.points >= 2) {
        game.self.hp++;
        game.self.points -= 2;
      };
      updateText.call(this);
    });
    hpMinus.on('pointerup', function () {
      if (game.self.hp > (0.7 * game.self.strength)) {
        game.self.hp--;
        game.self.points += 2;
      };
      updateText.call(this);
    });


    willPlus.on('pointerup', function () {
      //will should not exceed 20
      if (game.self.will < 20 && game.self.points > 5) {
        game.self.will++;
        willInteger--;
        game.self.points -= 5;
      };
      updateText.call(this);
    });
    willMinus.on('pointerup', function () {
      //will cannot be lowered by more than 4, tracked with willInteger
      if (willInteger < 4) {
        game.self.will--;
        willInteger++;
        game.self.points += 5;
      };
      updateText.call(this);
    });



    perPlus.on('pointerup', function () {
      //perception should not exceed 20
      if (game.self.perception < 20 && game.self.points > 5) {
        game.self.perception++;
        perInteger--;
        game.self.points -= 5;
      };
      updateText.call(this);
    });
    perMinus.on('pointerup', function () {
      //perception cannot be lowered by more than 4, tracked with perInteger
      if (perInteger < 4) {
        game.self.perception--;
        perInteger++;
        game.self.points += 5;
      };
      updateText.call(this);
    });


    //sp should not vary beyond +- 30% of constitution
    spPlus.on('pointerup', function () {
      if (game.self.sp < (1.3 * game.self.constitution) && game.self.points >= 3) {
        game.self.sp++;
        game.self.points -= 3;
      };
      updateText.call(this);
    });
    spMinus.on('pointerup', function () {
      if (game.self.sp > (0.7 * game.self.constitution)) {
        game.self.sp--;
        game.self.points += 3;
      };
      updateText.call(this);
    });


    speedPlus.on('pointerup', function () {
      //speed is (CON+AGI)/4, speed threshold is +- 2.0 of unmodified speed stat
      if (speedInteger < 8 && game.self.points >= 5) {
        speedInteger++;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.points -= 5;
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      };
      updateText.call(this);
    });
    speedMinus.on('pointerup', function () {
      //speed is (CON+AGI)/4, speed threshold is +- 2.0 of unmodified speed stat
      if (speedInteger > -8 && game.self.move > 1) {
        speedInteger--;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.points += 5;
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        //prevent game.self.move from being an invalid value such as 0 or less
      } else if (speedInteger > -8 && game.self.move === 1 && moveInteger < 3) {
        //increase move, then decrease speed
        moveInteger++;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        //decrease speed now
        speedInteger--;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      }
      updateText.call(this);
    });


    movePlus.on('pointerup', function () {
      //move threshold of +- 3
      if (moveInteger < 3 && game.self.points >= 5) {
        moveInteger++;
        game.self.points -= 5;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      };
      updateText.call(this);
    });
    //move threshold of +- 3, move cannot be less than 1
    moveMinus.on('pointerup', function () {
      if (moveInteger > -3 && game.self.move > 1) {
        moveInteger--;
        game.self.points += 5;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
      };
      updateText.call(this);
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
