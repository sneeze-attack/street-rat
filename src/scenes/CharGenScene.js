import Phaser from 'phaser';
import CharGen from '../modules/ui/CharGen';
import game from '../index';
import * as nameGen from '../modules/utils/NameGen';
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

    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    let ui = new CharGen(this);

    // gambling
    let gamblingText = this.add.text(((this.config.width * 90.5) / 128), ((this.config.height * 15) / 128), 'Gambling    (' + game.self.gambling + ')        ' + game.self.gamblingScore).setColor('#FFFFFF').setFontSize(24);
    ui.gamblingPlus.on('pointerup', function () {
      let number = ((game.self.gambling - 1) * 4);
      if (game.self.gambling === 0 && game.self.points >= 1 && game.self.gamblingScore <= 15) {
        game.self.gambling++;
        game.self.points--;
      } else if (game.self.gambling === 1 && game.self.points >= 2 && game.self.gamblingScore <= 15) {
        game.self.gambling++;
        game.self.points -= 2;
      } else if (game.self.gambling >= 2 && game.self.points >= number && game.self.gamblingScore <= 15) {
        game.self.gambling++;
        game.self.points -= number;
      };
      game.self.calculateGamblingScore();
      updateText.call(this);
    });
    ui.gamblingMinus.on('pointerup', function () {
      let number = ((game.self.gambling - 2) * 4);
      if (game.self.gambling === 1) {
        game.self.gambling--;
        game.self.points++;
      } else if (game.self.gambling === 2) {
        game.self.gambling--;
        game.self.points += 2;
      } else if (game.self.gambling >= 3) {
        game.self.gambling--;
        game.self.points += number;
      };
      game.self.calculateGamblingScore();
      updateText.call(this);
    });

    // panhandling
    let panhandlingText = this.add.text(((this.config.width * 90.5) / 128), ((this.config.height * 21) / 128), 'Panhandling (' + game.self.panhandle + ')        ' + game.self.panhandleScore).setColor('#FFFFFF').setFontSize(24);
    ui.panhandlingPlus.on('pointerup', function () {
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
    ui.panhandlingMinus.on('pointerup', function () {
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

    // boxed selection logic for gender
    function genderUpdate() {
      game.self.portrait = 1;
      ui.maleButton.setTexture(ui.maleSelection);
      ui.femaleButton.setTexture(ui.femaleSelection);
      ui.portrait.setTexture(game.self.gender + game.self.portrait);
    }
    ui.maleButton.on('pointerup', function () {
      game.self.gender = 'male';
      ui.maleSelection = 'male_icon_boxed';
      ui.femaleSelection = 'female_icon';
      genderUpdate.call(this);
    });
    ui.femaleButton.on('pointerup', function () {
      game.self.gender = 'female';
      ui.maleSelection = 'male_icon';
      ui.femaleSelection = 'female_icon_boxed';
      genderUpdate.call(this);
    });

    // continue button logic
    function continueToGame() {
      if (!game.self.gender) {
        let genderRoll = (Math.floor((Math.random() * 2) + 1));
        game.self.portrait = 1;
        if (genderRoll === 1) {
          game.self.gender = 'male';
        } else {
          game.self.gender = 'female';
        };
        ui.portrait.setTexture(game.self.gender + game.self.portrait);
      };
      // if name hasn't been chosen, randomly assign one based on gender
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
      game.gameState.changeScene('GameScene', 'CharGenScene');
    }

    ui.continueButton.on('pointerup', function () {
      continueToGame.call(this);
    });
    ui.continueTextBox.on('pointerup', function () {
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
      game.self.gambling = 0;
      game.self.gamblingScore = 5;
      game.gameState.changeScene('StartScene', 'CharGenScene');
    }
    ui.backButton.on('pointerup', function () {
      backReset.call(this);
    });
    ui.backTextBox.on('pointerup', function () {
      backReset.call(this);
    });

    // start at first portrait
    game.self.portrait = 0;

    //portrait arrow code
    ui.portraitNextArrow.on('pointerup', function () {
      if (game.self.gender) {
        game.self.portrait++;
        //loop back to first portrait once end is reached
        if (game.self.portrait === 5) {
          game.self.portrait = 1;
        };
        ui.portrait.setTexture(game.self.gender + game.self.portrait);
      };
    });
    ui.portraitPreviousArrow.on('pointerup', function () {
      if (game.self.gender) {
        game.self.portrait--;
        //loop back to last portrait once beginning is reached
        if (game.self.portrait === 0) {
          game.self.portrait = 4;
        };
        ui.portrait.setTexture(game.self.gender + game.self.portrait);
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

    // player points
    let pointsText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 40.75) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);

    // primary attributes, first column
    let strText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 13) / 128), 'STR: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28);
    let agiText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 19) / 128), 'AGI: ' + game.self.agility).setColor('#FFFFFF').setFontSize(28);
    let intText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 25) / 128), 'INT: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28);
    let conText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 31) / 128), 'CON: ' + game.self.constitution).setColor('#FFFFFF').setFontSize(28);
    //secondary attributes, second column
    let hpText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 13) / 128), '  HP: ' + game.self.hp).setColor('#FFFFFF').setFontSize(28);
    let spText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 19) / 128), '  SP: ' + game.self.sp).setColor('#FFFFFF').setFontSize(28);
    let perText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 25) / 128), ' Per: ' + game.self.perception).setColor('#FFFFFF').setFontSize(28);
    let willText = this.add.text(((this.config.width * 41) / 128), ((this.config.height * 31) / 128), 'Will: ' + game.self.will).setColor('#FFFFFF').setFontSize(28);
    //more secondary attributes, third column
    let carryText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 13) / 128), 'Carry: ' + game.self.carry).setColor('#FFFFFF').setFontSize(28);
    let speedText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 19) / 128), 'Speed: ' + game.self.speed).setColor('#FFFFFF').setFontSize(28);
    let moveText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 25) / 128), ' Move: ' + game.self.move).setColor('#FFFFFF').setFontSize(28);
    let dodgeText = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 31) / 128), 'Dodge: ' + game.self.dodge).setColor('#FFFFFF').setFontSize(28);

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

      // keep skills texts aligned with if statements
      if (game.self.panhandle >= 10) {
        panhandlingText.setText('Panhandling (' + game.self.panhandle + ')       ' + game.self.panhandleScore);
      } else {
        panhandlingText.setText('Panhandling (' + game.self.panhandle + ')        ' + game.self.panhandleScore);
      };
      if (game.self.gambling >= 10) {
        gamblingText.setText('Gambling    (' + game.self.gambling + ')       ' + game.self.gamblingScore);
      } else {
        gamblingText.setText('Gambling    (' + game.self.gambling + ')        ' + game.self.gamblingScore);
      };

    }

    ui.strPlus.on('pointerup', function () {
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

    ui.strMinus.on('pointerup', function () {
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

    ui.agiPlus.on('pointerup', function () {
      if (game.self.agility < 20 && game.self.points >= 20) {
        game.self.agility++;
        game.self.points -= 20;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      };
      updateText.call(this);
    });
    ui.agiMinus.on('pointerup', function () {
      if (game.self.agility > 7) {
        game.self.agility--;
        game.self.points += 20;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      };
      updateText.call(this);
    });

    ui.intPlus.on('pointerup', function () {
      if (game.self.intelligence < 20 && game.self.points >= 20 && game.self.will < 20 && game.self.perception < 20) {
        game.self.intelligence++;
        game.self.will++;
        game.self.perception++;
        game.self.points -= 20;
        game.self.calculateGamblingScore();
        game.self.calculatePanhandleScore();
        //if will is more than 20, decrease it so that intelligence may be raised
      } else if (game.self.intelligence < 20 && game.self.will >= 20) {
        game.self.will--;
        ui.willInteger++;
        game.self.points += 5;
      } else if (game.self.intelligence < 20 && game.self.perception >= 20) {
        game.self.perception--;
        ui.perInteger++;
        game.self.points += 5;
      };
      updateText.call(this);
    });
    ui.intMinus.on('pointerup', function () {
      if (game.self.intelligence > 7) {
        game.self.intelligence--;
        game.self.will--;
        game.self.perception--;
        game.self.points += 20;
        game.self.calculatePanhandleScore();
        game.self.calculateGamblingScore();
      };
      updateText.call(this);
    });

    ui.conPlus.on('pointerup', function () {
      //sp should not vary beyond +- 30% of constitution
      if (game.self.constitution < 20 && game.self.points >= 10 && game.self.sp < (1.3 * game.self.constitution)) {
        game.self.constitution++;
        game.self.sp++;
        game.self.points -= 10;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      } else if (game.self.constitution < 20 && game.self.sp >= (1.3 * game.self.constitution)) {
		    game.self.sp--;
		    game.self.points += 3;
      };
      updateText.call(this);
    });
    ui.conMinus.on('pointerup', function () {
      //sp should not vary beyond +- 30% of constitution
      if (game.self.constitution > 7 && game.self.sp > (0.7 * game.self.constitution)) {
        game.self.constitution--;
		    game.self.sp--;
        game.self.points += 10;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      } else if (game.self.constitution > 7 && game.self.points >= 3 && game.self.sp <= (0.7 * game.self.constitution)) {
	      game.self.sp++
	      game.self.points -= 3;
	    };
      updateText.call(this);
    });

    //hp should not vary beyond +- 30% of strength
    ui.hpPlus.on('pointerup', function () {
      if (game.self.hp < (1.3 * game.self.strength) && game.self.points >= 2) {
        game.self.hp++;
        game.self.points -= 2;
      };
      updateText.call(this);
    });
    ui.hpMinus.on('pointerup', function () {
      if (game.self.hp > (0.7 * game.self.strength)) {
        game.self.hp--;
        game.self.points += 2;
      };
      updateText.call(this);
    });

    ui.willPlus.on('pointerup', function () {
      //will should not exceed 20
      if (game.self.will < 20 && game.self.points > 5) {
        game.self.will++;
        ui.willInteger--;
        game.self.points -= 5;
      };
      updateText.call(this);
    });
    ui.willMinus.on('pointerup', function () {
      //will cannot be lowered by more than 4, tracked with ui.willInteger
      if (ui.willInteger < 4) {
        game.self.will--;
        ui.willInteger++;
        game.self.points += 5;
      };
      updateText.call(this);
    });

    ui.perPlus.on('pointerup', function () {
      //perception should not exceed 20
      if (game.self.perception < 20 && game.self.points > 5) {
        game.self.perception++;
        ui.perInteger--;
        game.self.points -= 5;
      };
      updateText.call(this);
    });
    ui.perMinus.on('pointerup', function () {
      //perception cannot be lowered by more than 4, tracked with ui.perInteger
      if (ui.perInteger < 4) {
        game.self.perception--;
        ui.perInteger++;
        game.self.points += 5;
      };
      updateText.call(this);
    });

    //sp should not vary beyond +- 30% of constitution
    ui.spPlus.on('pointerup', function () {
      if (game.self.sp < (1.3 * game.self.constitution) && game.self.points >= 3) {
        game.self.sp++;
        game.self.points -= 3;
      };
      updateText.call(this);
    });
    ui.spMinus.on('pointerup', function () {
      if (game.self.sp > (0.7 * game.self.constitution)) {
        game.self.sp--;
        game.self.points += 3;
      };
      updateText.call(this);
    });

    ui.speedPlus.on('pointerup', function () {
      //speed is (CON+AGI)/4, speed threshold is +- 2.0 of unmodified speed stat
      if (ui.speedInteger < 8 && game.self.points >= 5) {
        ui.speedInteger++;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.points -= 5;
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      };
      updateText.call(this);
    });
    ui.speedMinus.on('pointerup', function () {
      //speed is (CON+AGI)/4, speed threshold is +- 2.0 of unmodified speed stat
      if (ui.speedInteger > -8 && game.self.move > 1) {
        ui.speedInteger--;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.points += 5;
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
        //prevent game.self.move from being an invalid value such as 0 or less
      } else if (ui.speedInteger > -8 && game.self.move === 1 && ui.moveInteger < 3) {
        //increase move, then decrease speed
        ui.moveInteger++;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
        //decrease speed now
        ui.speedInteger--;
        game.self.speed = ((game.self.constitution + game.self.agility) / 4) + (ui.speedInteger * 0.25);
        game.self.calculateDodge();
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      }
      updateText.call(this);
    });

    ui.movePlus.on('pointerup', function () {
      //move threshold of +- 3
      if (ui.moveInteger < 3 && game.self.points >= 5) {
        ui.moveInteger++;
        game.self.points -= 5;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      };
      updateText.call(this);
    });
    //move threshold of +- 3, move cannot be less than 1
    ui.moveMinus.on('pointerup', function () {
      if (ui.moveInteger > -3 && game.self.move > 1) {
        ui.moveInteger--;
        game.self.points += 5;
        //move is equal to speed, rounded down
        game.self.move = Math.floor(game.self.speed) + ui.moveInteger;
      };
      updateText.call(this);
    });
  }

  update() {
    // scene change logic
    if (game.gameState.nextScene !== 'CharGenScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
