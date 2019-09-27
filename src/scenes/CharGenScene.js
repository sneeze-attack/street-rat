import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import game from '../index';
import * as nameGen from '../modules/NameGen';
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

    //continue button
    let continueTextBox = this.add.rectangle(((this.config.width * 90) / 128), ((this.config.height * 100) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let continueButton = this.add.text(((this.config.width * 93) / 128), ((this.config.height * 101) / 128), 'Continue').setColor('#FFFFFF').setInteractive().setFontSize(32);

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

    //continue button logic
    continueButton.on('pointerup', function () {
      //if gender hasnt been chosen, randomly assign one, update portrait to match
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
      gameState.nextScene = 'GameScene';
      gameState.previousScene = 'CharGenScene';
    });
    continueTextBox.on('pointerup', function () {
      //if gender hasnt been chosen, randomly assign one, update portrait to match
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
      gameState.nextScene = 'GameScene';
      gameState.previousScene = 'CharGenScene';
    });

    //back button logic
    backButton.on('pointerup', function () {
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
      game.self.fp = 10;
      game.self.carry = 20;
      game.self.speed = 5;
      game.self.move = 5;
      gameState.nextScene = 'StartScene';
      gameState.previousScene = 'CharGenScene';
    });
    backTextBox.on('pointerup', function () {
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
      game.self.fp = 10;
      game.self.carry = 20;
      game.self.speed = 5;
      game.self.move = 5;
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
    let enterNameText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), 'Type player name').setColor('#FFFFFF').setFontSize(36);

    //enter name code
    let nameEntry = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), '', { font: '36px Courier', fill: '#ffffff' });
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

    //integers to track stats with specific thresholds
    let willInteger = 0;
    let perInteger = 0;
    let speedInteger = 0;
    let moveInteger = 0;

    //attribute plus and minus sprites + code
    let strPlus = this.add.sprite(((this.config.width * 51) / 128), ((this.config.height * 119) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let strMinus = this.add.sprite(((this.config.width * 48) / 128), ((this.config.height * 119) / 512), 'minus').setOrigin(0, 0).setInteractive();

    strPlus.on('pointerup', function () {
      //hp should not vary beyond +- 30% of strength
      if (game.self.strength < 20 && game.self.points >= 10 && game.self.hp < (1.3 * game.self.strength)) {
        game.self.strength++;
        game.self.hp++;
        strText.setText('STR: ' + game.self.strength);
        hpText.setText('  HP: ' + game.self.hp);
        //carry is (STRxSTR)/5, rounded to nearest integer if carry is 10 or more
        game.self.carry = ((game.self.strength * game.self.strength) / 5);
        if (game.self.carry >= 10) {
          game.self.carry = Math.round(((game.self.strength * game.self.strength) / 5));
        };
        carryText.setText(' Carry: ' + game.self.carry);
        game.self.points -= 10;
        pointsText.setText('Points: ' + game.self.points);
      } else if (game.self.strength < 20 && game.self.hp >= (1.3 * game.self.strength)) {
        game.self.hp--;
        game.self.points += 2;
        pointsText.setText('Points: ' + game.self.points);
        hpText.setText('  HP: ' + game.self.hp);
      };
    });

    strMinus.on('pointerup', function () {
      //hp should not vary beyond +- 30% of strength
      if (game.self.strength > 7 && game.self.hp > (0.7 * game.self.strength)) {
        game.self.strength--;
        game.self.hp--;
        strText.setText('STR: ' + game.self.strength);
        hpText.setText('  HP: ' + game.self.hp);
        //carry is (STRxSTR)/5, rounded to nearest integer if carry is 10 or more
        game.self.carry = ((game.self.strength * game.self.strength) / 5);
        if (game.self.carry >= 10) {
          game.self.carry = Math.round(((game.self.strength * game.self.strength) / 5));
        };
        carryText.setText(' Carry: ' + game.self.carry);
        game.self.points += 10;
        pointsText.setText('Points: ' + game.self.points);
      } else if (game.self.strength > 7 && game.self.points >= 2 && game.self.hp <= (0.7 * game.self.strength)) {
        game.self.hp++;
        game.self.points -= 2;
        pointsText.setText('Points: ' + game.self.points);
        hpText.setText('  HP: ' + game.self.hp);
      };
    });

    let agiPlus = this.add.sprite(((this.config.width * 51) / 128), ((this.config.height * 143) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let agiMinus = this.add.sprite(((this.config.width * 48) / 128), ((this.config.height * 143) / 512), 'minus').setOrigin(0, 0).setInteractive();

    agiPlus.on('pointerup', function () {
      if (game.self.agility < 20 && game.self.points >= 20) {
        game.self.agility++;
        agiText.setText('AGI: ' + game.self.agility);
        game.self.points -= 20;
        pointsText.setText('Points: ' + game.self.points);
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      };
    });
    agiMinus.on('pointerup', function () {
      if (game.self.agility > 7) {
        game.self.agility--;
        agiText.setText('AGI: ' + game.self.agility);
        game.self.points += 20;
        pointsText.setText('Points: ' + game.self.points);
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      };
    });

    let intPlus = this.add.sprite(((this.config.width * 51) / 128), ((this.config.height * 167) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let intMinus = this.add.sprite(((this.config.width * 48) / 128), ((this.config.height * 167) / 512), 'minus').setOrigin(0, 0).setInteractive();

    intPlus.on('pointerup', function () {
      if (game.self.intelligence < 20 && game.self.points >= 20 && game.self.will < 20 && game.self.perception < 20) {
        game.self.intelligence++;
        game.self.will++;
        game.self.perception++;
        willText.setText('Will: ' + game.self.will);
        perText.setText(' Per: ' + game.self.perception);
        intText.setText('INT: ' + game.self.intelligence);
        game.self.points -= 20;
        pointsText.setText('Points: ' + game.self.points);
        //if will is more than 20, decrease it so that intelligence may be raised
      } else if (game.self.intelligence < 20 && game.self.will >= 20) {
        game.self.will--;
        willInteger++;
        game.self.points += 5;
        willText.setText('Will: ' + game.self.will);
        pointsText.setText('Points: ' + game.self.points);
      } else if (game.self.intelligence < 20 && game.self.perception >= 20) {
        game.self.perception--;
        perInteger++;
        game.self.points += 5;
        perText.setText(' Per: ' + game.self.perception);
        pointsText.setText('Points: ' + game.self.points);
      };
    });
    intMinus.on('pointerup', function () {
      if (game.self.intelligence > 7) {
        game.self.intelligence--;
        game.self.will--;
        game.self.perception--;
        intText.setText('INT: ' + game.self.intelligence);
        willText.setText('Will: ' + game.self.will);
        perText.setText(' Per: ' + game.self.perception);
        game.self.points += 20;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let conPlus = this.add.sprite(((this.config.width * 51) / 128), ((this.config.height * 191) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let conMinus = this.add.sprite(((this.config.width * 48) / 128), ((this.config.height * 191) / 512), 'minus').setOrigin(0, 0).setInteractive();

    conPlus.on('pointerup', function () {
      //fp should not vary beyond +- 30% of constitution
      if (game.self.constitution < 20 && game.self.points >= 10 && game.self.fp < (1.3 * game.self.constitution)) {
        game.self.constitution++;
        game.self.fp++;
        conText.setText('CON: ' + game.self.constitution);
		    fpText.setText('  FP: ' + game.self.fp);
        game.self.points -= 10;
        pointsText.setText('Points: ' + game.self.points);
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      } else if (game.self.constitution < 20 && game.self.fp >= (1.3 * game.self.constitution)) {
		    game.self.fp--;
		    game.self.points += 3;
		    pointsText.setText('Points: ' + game.self.points);
		    fpText.setText('  FP: ' + game.self.fp);
      };
    });
    conMinus.on('pointerup', function () {
      //fp should not vary beyond +- 30% of constitution
      if (game.self.constitution > 7 && game.self.fp > (0.7 * game.self.constitution)) {
        game.self.constitution--;
		    game.self.fp--;
        conText.setText('CON: ' + game.self.constitution);
		    fpText.setText('  FP: ' + game.self.fp);
        game.self.points += 10;
        pointsText.setText('Points: ' + game.self.points);
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      } else if (game.self.constitution > 7 && game.self.points >= 3 && game.self.fp <= (0.7 * game.self.constitution)) {
	      game.self.fp++
	      game.self.points -= 3;
	      pointsText.setText('Points: ' + game.self.points);
        fpText.setText('  FP: ' + game.self.fp);
	    };
    });

    let hpPlus = this.add.sprite(((this.config.width * 73) / 128), ((this.config.height * 119) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let hpMinus = this.add.sprite(((this.config.width * 70) / 128), ((this.config.height * 119) / 512), 'minus').setOrigin(0, 0).setInteractive();

    //hp should not vary beyond +- 30% of strength
    hpPlus.on('pointerup', function () {
      if (game.self.hp < (1.3 * game.self.strength) && game.self.points >= 2) {
        game.self.hp++;
        hpText.setText('  HP: ' + game.self.hp);
        game.self.points -= 2;
        pointsText.setText('Points: ' + game.self.points);
      };
    });
    hpMinus.on('pointerup', function () {
      if (game.self.hp > (0.7 * game.self.strength)) {
        game.self.hp--;
        hpText.setText('  HP: ' + game.self.hp);
        game.self.points += 2;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let willPlus = this.add.sprite(((this.config.width * 73) / 128), ((this.config.height * 143) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let willMinus = this.add.sprite(((this.config.width * 70) / 128), ((this.config.height * 143) / 512), 'minus').setOrigin(0, 0).setInteractive();

    willPlus.on('pointerup', function () {
      //will should not exceed 20
      if (game.self.will < 20 && game.self.points > 5) {
        game.self.will++;
        willInteger--;
        willText.setText('Will: ' + game.self.will);
        game.self.points -= 5;
        pointsText.setText('Points: ' + game.self.points);
      };
    });
    willMinus.on('pointerup', function () {
      //will cannot be lowered by more than 4, tracked with willInteger
      if (willInteger < 4) {
        game.self.will--;
        willInteger++;
        willText.setText('Will: ' + game.self.will);
        game.self.points += 5;
        pointsText.setText('Points: ' + game.self.points);
      };
    });


    let perPlus = this.add.sprite(((this.config.width * 73) / 128), ((this.config.height * 167) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let perMinus = this.add.sprite(((this.config.width * 70) / 128), ((this.config.height * 167) / 512), 'minus').setOrigin(0, 0).setInteractive();

    perPlus.on('pointerup', function () {
      //perception should not exceed 20
      if (game.self.perception < 20 && game.self.points > 5) {
        game.self.perception++;
        perInteger--;
        perText.setText(' Per: ' + game.self.perception);
        game.self.points -= 5;
        pointsText.setText('Points: ' + game.self.points);
      };
    });
    perMinus.on('pointerup', function () {
      //perception cannot be lowered by more than 4, tracked with perInteger
      if (perInteger < 4) {
        game.self.perception--;
        perInteger++;
        perText.setText(' Per: ' + game.self.perception);
        game.self.points += 5;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let fpPlus = this.add.sprite(((this.config.width * 73) / 128), ((this.config.height * 191) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let fpMinus = this.add.sprite(((this.config.width * 70) / 128), ((this.config.height * 191) / 512), 'minus').setOrigin(0, 0).setInteractive();

    //fp should not vary beyond +- 30% of constitution
    fpPlus.on('pointerup', function () {
      if (game.self.fp < (1.3 * game.self.constitution) && game.self.points >= 3) {
        game.self.fp++;
        fpText.setText('  FP: ' + game.self.fp);
        game.self.points -= 3;
        pointsText.setText('Points: ' + game.self.points);
      };
    });
    fpMinus.on('pointerup', function () {
      if (game.self.fp > (0.7 * game.self.constitution)) {
        game.self.fp--;
        fpText.setText('  FP: ' + game.self.fp);
        game.self.points += 3;
        pointsText.setText('Points: ' + game.self.points);
      };
    });

    let speedPlus = this.add.sprite(((this.config.width * 102) / 128), ((this.config.height * 143) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let speedMinus = this.add.sprite(((this.config.width * 99) / 128), ((this.config.height * 143) / 512), 'minus').setOrigin(0, 0).setInteractive();

    speedPlus.on('pointerup', function () {
      //speed is (CON+AGI)/4, speed threshold is +- 2.0 of unmodified speed stat
      if (speedInteger < 8 && game.self.points >= 5) {
        speedInteger++;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        game.self.points -= 5;
        pointsText.setText('Points: ' + game.self.points);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      };
    });
    speedMinus.on('pointerup', function () {
      //speed is (CON+AGI)/4, speed threshold is +- 2.0 of unmodified speed stat
      if (speedInteger > -8 && game.self.move > 1) {
        speedInteger--;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        game.self.points += 5;
        pointsText.setText('Points: ' + game.self.points);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
        //prevent game.self.move from being an invalid value such as 0 or less
      } else if (speedInteger > -8 && game.self.move === 1 && moveInteger < 3) {
        //increase move, then decrease speed
        moveInteger++;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        //decrease speed now
        speedInteger--;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (speedInteger * 0.25);
        speedText.setText('Speed: ' + game.self.speed);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      }
    });

    let movePlus = this.add.sprite(((this.config.width * 102) / 128), ((this.config.height * 167) / 512), 'plus').setOrigin(0, 0).setInteractive();
    let moveMinus = this.add.sprite(((this.config.width * 99) / 128), ((this.config.height * 167) / 512), 'minus').setOrigin(0, 0).setInteractive();

    movePlus.on('pointerup', function () {
      //move threshold of +- 3
      if (moveInteger < 3 && game.self.points >= 5) {
        moveInteger++;
        game.self.points -= 5;
        pointsText.setText('Points: ' + game.self.points);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
      };
    });
    //move threshold of +- 3, move cannot be less than 1
    moveMinus.on('pointerup', function () {
      if (moveInteger > -3 && game.self.move > 1) {
        moveInteger--;
        game.self.points += 5;
        pointsText.setText('Points: ' + game.self.points);
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + moveInteger;
        moveText.setText(' Move: ' + game.self.move);
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
