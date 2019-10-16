import Phaser from 'phaser';
import RollResults from '../modules/RollResults';
import game from '../index';
import * as roll from '../modules/Roll';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import female1_img from '../assets/portraits/female/160x200/female1.jpg';
import female2_img from '../assets/portraits/female/160x200/female2.jpg';
import female3_img from '../assets/portraits/female/160x200/female3.jpg';
import female4_img from '../assets/portraits/female/160x200/female4.jpg';
import male1_img from '../assets/portraits/male/160x200/male1.jpg';
import male2_img from '../assets/portraits/male/160x200/male2.jpg';
import male3_img from '../assets/portraits/male/160x200/male3.jpg';
import male4_img from '../assets/portraits/male/160x200/male4.jpg';
import cog_img from '../assets/icons/48x48/cog_white.png';

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
    this.load.image('cog', cog_img);
  }

  create() {

    // needs comment
    this.config = this.sys.game.config;

    // hidden objects to show dice results (hidden at depth 0)
    let panhandlingResultsObject = new RollResults(this, 'Panhandling', game.self.panhandleScore, 'Basic Roll');
    panhandlingResultsObject.masterBox.on('pointerup', function () {
      panhandlingResultsObject.hideRollResults();
    });

    let spWillResultsObject = new RollResults(this, 'Will', game.self.will, 'SP too low');
    spWillResultsObject.masterBox.on('pointerup', function () {
      spWillResultsObject.hideRollResults();
    });

    // add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0).setDepth(1);

    // add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0).setDepth(1);

    // portrait
    let portrait = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 19) / 128), game.self.gender + game.self.portrait).setOrigin(0, 0).setDepth(1);

    // name
    let enterNameText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), game.self.name).setColor('#FFFFFF').setFontSize(36).setDepth(1);

    // options
    let optionsCog = this.add.sprite(((this.config.width * 122) / 128), ((this.config.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive().setDepth(1);

    optionsCog.on('pointerup', function () {
      game.gameState.nextScene = 'OptionsScene';
      game.gameState.previousScene = 'GameScene';
    });

    // small space between stats and buttons / messageBox
    //let pointsText = this.add.text(((this.config.width * 18) / 128), ((this.config.height * 56) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);
    //let creditsText = this.add.text(((this.config.width * 40) / 128), ((this.config.height * 56) / 128), 'Creds: ' + game.self.credits).setColor('#FFFFFF').setFontSize(20);

    //below buttons
    let pointsText = this.add.text(((this.config.width * 18) / 128), ((this.config.height * 106) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20).setDepth(1);
    let creditsText = this.add.text(((this.config.width * 40) / 128), ((this.config.height * 106) / 128), 'Creds: ' + game.self.credits).setColor('#FFFFFF').setFontSize(20).setDepth(1);

    // primary attributes, first column
    let strText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 29) / 128), 'STR: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let agiText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 35) / 128), 'AGI: ' + game.self.agility).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let intText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 41) / 128), 'INT: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let conText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 47) / 128), 'CON: ' + game.self.constitution).setColor('#FFFFFF').setFontSize(28).setDepth(1);

    // secondary attributes, second column
    let hpText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 29) / 128), '  HP: ' + game.self.hp).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let willText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 35) / 128), 'Will: ' + game.self.will).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let perText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 41) / 128), ' Per: ' + game.self.perception).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let spText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 47) / 128), '  SP: ' + game.self.sp).setColor('#FFFFFF').setFontSize(28).setDepth(1);

    // more secondary attributes, third column
    let carryText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 29) / 128), 'Carry: ' + game.self.carry).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let speedText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 35) / 128), 'Speed: ' + game.self.speed).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let moveText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 41) / 128), ' Move: ' + game.self.move).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    let dodgeText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 47) / 128), 'Dodge: ' + game.self.dodge).setColor('#FFFFFF').setFontSize(28).setDepth(1);


    // Status Effects, fourth column
    let statusEffectsText = this.add.text(((this.config.width * 88) / 128), ((this.config.height * 29) / 128), 'Status Effects').setColor('#FFFFFF').setFontSize(22).setDepth(1);
    // underline statusEffectsText
    let underline = new Phaser.Geom.Line(((this.config.width * 88) / 128), ((this.config.height * 33) / 128), ((this.config.width * 211) / 256), ((this.config.height * 33) / 128));
    let graphics = this.add.graphics({ lineStyle: { width: 1, color: 0xffffff } }).strokeLineShape(underline).setDepth(1);

    // list current statusEffects of Player
    let statusEffectsList = this.add.text(((this.config.width * 88) / 128), ((this.config.height * 35) / 128), game.self.statusEffects).setColor('#FFFFFF').setFontSize(22).setDepth(1);

    function statusEffectMessages() {
      // Check for status effects on player and warn or take action as needed

      // Tired status effect check
      // This is NOT adding the status effect, it is only checking for first
      // encounter of Tired status effect being present on the player.

      // First turn of Tired - warn player and subtract 1 SP
      let checkForTired = game.self.statusEffects.includes('Tired');
      if (checkForTired === true && game.self.tiredWarned === false) {
        game.messageBox.updateBox('You feel tired.');
        // only warn once by using tiredWarned
        game.self.tiredWarned = true;
        // lose 1 SP when you first get tired
        // TODO: move this into player.isPlayerTired()
        game.self.sp -= 1;
      };

      // Fatigued status effect check
      // first turn of Fatigued - warn player
      game.self.isPlayerFatigued();
      let checkForFatigued = game.self.statusEffects.includes('Fatigued');
      if (checkForFatigued === true && game.self.fatiguedWarned === false) {
        game.messageBox.updateBox('You feel fatigued.');
        // only warn once by using fatiguedWarned
        game.self.fatiguedWarned = true;
      };

      // Wounded status effect check
      // first turn of Wounded - warn player
      game.self.isPlayerHurt();
      let checkForWounded = game.self.statusEffects.includes('Wounded');
      if (checkForWounded === true && game.self.woundedWarned === false) {
        game.messageBox.updateBox('You are wounded.');
        // only warn once by using woundedWarned
        game.self.woundedWarned = true;
      };

      // Unconscious check
      // when unconscious, print how many hours passed out for
      if (game.self.unconsciousLength > 0) {
        if (game.self.unconsciousLength === 1) {
          game.messageBox.updateBox('You passed out for ' + game.self.unconsciousLength + ' hour.');
        } else {
          game.messageBox.updateBox('You passed out for ' + game.self.unconsciousLength + ' hours.');
        };

        game.self.unconsciousLength = 0;
      };

      //update menu in case of stat changes
      updateMenu.call(this);
    }

    // Day and Time
    let calendar = this.add.text(((this.config.width * 102) / 128), ((this.config.height * 18) / 128), ' Day: ' + game.self.day).setColor('#FFFFFF').setFontSize(20).setDepth(1);
    let clock = this.add.text(((this.config.width * 102) / 128), ((this.config.height * 22) / 128), 'Hour: ' + game.self.hour).setColor('#FFFFFF').setFontSize(20).setDepth(1);

    function updateMenu() {
      //updates displays
      statusEffectsList.setText(game.self.statusEffects);
      clock.setText('Hour: ' + game.self.hour);
      calendar.setText(' Day: ' + game.self.day);
      hpText.setText('  HP: ' + game.self.hp);
      spText.setText('  SP: ' + game.self.sp);
      dodgeText.setText('Dodge: ' + game.self.dodge);
      moveText.setText(' Move: ' + game.self.move);
      strText.setText('STR: ' + game.self.strength);
      creditsText.setText('Creds: ' + game.self.credits);
    }

    // add in a message area
    let messageAreaBorder = this.add.rectangle(((this.config.width * 62) / 128), ((this.config.height * 62) / 128), ((this.config.width * 48) / 128), ((this.config.height * 47) / 128), 0x4D4E4F).setOrigin(0, 0).setDepth(1);
    let messageArea = this.add.rectangle(((this.config.width * 63) / 128), ((this.config.height * 63) / 128), ((this.config.width * 46) / 128), ((this.config.height * 45) / 128), 0x000000).setOrigin(0, 0).setDepth(1);

    // add in message lines
    game.messageBox.lineOne = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 101) / 128), game.messageBox.lineOneText).setColor('#FFFFFF').setFontSize(28).setDepth(1);
    game.messageBox.lineTwo = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 95) / 128), game.messageBox.lineTwoText).setColor('#DCDCDC').setFontSize(28).setDepth(1);
    game.messageBox.lineThree = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 89) / 128), game.messageBox.lineThreeText).setColor('#C0C0C0').setFontSize(28).setDepth(1);
    game.messageBox.lineFour = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 83) / 128), game.messageBox.lineFourText).setColor('#A9A9A9').setFontSize(28).setDepth(1);
    game.messageBox.lineFive = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 77) / 128), game.messageBox.lineFiveText).setColor('#808080').setFontSize(28).setDepth(1);
    game.messageBox.lineSix = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 71) / 128), game.messageBox.lineSixText).setColor('#696969').setFontSize(28).setDepth(1);
    game.messageBox.lineSeven = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 65) / 128), game.messageBox.lineSevenText).setColor('#505050').setFontSize(28).setDepth(1);
    // check for status effects gained from ActionsScene
    statusEffectMessages.call(this);


    // main buttons

    // first button, upper left corner
    // Actions
    let actionsButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 62) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let actionsText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 63) / 128), 'Actions').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);

    actionsButton.on('pointerup', function () {
      game.gameState.nextScene = 'ActionsScene';
      game.gameState.previousScene = 'GameScene';
    });
    actionsText.on('pointerup', function () {
      game.gameState.nextScene = 'ActionsScene';
      game.gameState.previousScene = 'GameScene';
    });

    // second button, top right corner
    // Repeat last action
    let repeatButton = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 62) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let repeatText = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 63) / 128), game.self.lastAction).setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);

    function panhandleActivity() {
      game.self.updateTime(1);
      let diceroll = roll.dice();
      if (game.gameState.showRollResults === true) {
        diceroll = panhandlingResultsObject.diceTotal;
      };
      // dice roll of 17 or 18 is considered an automatic failure
      if (diceroll >= 17) {
        game.messageBox.updateBox('Failure');
      } else {
        let margin = game.self.panhandleScore - diceroll
        // panhandling margin cannot be zero
        if (margin === 0) {
          margin++;
        };
        if (margin > 0) {
          game.self.credits = game.self.credits+=(margin * 2)
          game.messageBox.updateBox('Success! Made ' + (margin * 2) + ' credits!' );
        } else {
          game.messageBox.updateBox('Failure');
        };
      };
    }

    //actions for repeat button
    function panhandle() {
      if (game.gameState.showRollResults === true) {
        // if SP is 0 or below, make Will roll to avoid passing out
        if (game.self.sp <= 0) {
          spWillResultsObject.showRollResultsModDepth(1);
          if (game.self.will >= spWillResultsObject.diceTotal) {
            panhandlingResultsObject.showRollResults();
            panhandleActivity.call(this);
          } else {
            game.self.unconsciousActivity();
          };
        } else {
          panhandlingResultsObject.showRollResults();
          panhandleActivity.call(this);
        };
      } else {
        // if SP is 0 or below, make Will roll to avoid passing out
        if (game.self.sp <= 0) {
          let willRoll = roll.dice();
          if (game.self.will >= willRoll) {
            panhandleActivity.call(this);
          } else {
            game.self.unconsciousActivity();
          };
        } else {
          panhandleActivity.call(this);
        };
      };
      // check to see if Tiredness status effect should be added, since 1 hour has passed
      game.self.isPlayerTired();
      statusEffectMessages.call(this);
    }



    repeatButton.on('pointerup', function () {
      if (game.self.lastAction === 'Panhandle') {
        panhandle.call(this);
      };
    });
    repeatText.on('pointerup', function () {
      if (game.self.lastAction === 'Panhandle') {
        panhandle.call(this);
      };
    });




    // Third button, first column, second row
    // Inventory
    let padding2Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 73) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let padding2Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 74) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);

    // Fourth button, second column, second row
    // Skills (list/train)
    let padding3Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 73) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let padding3Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 74) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);

    // Fifth button, first column, third row
    // Rest
    let restButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 84) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let restText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 85) / 128), 'Rest').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);

    function selfRest() {
      game.self.playerRest(1);
      statusEffectMessages.call(this);
    }

    restButton.on('pointerup', function () {
      selfRest.call(this);
    });
    restText.on('pointerup', function () {
      selfRest.call(this);
    });

    // Sixth button, second column, third row
    // Sleep until self.sleep = 10
    let sleepButton = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 84) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let sleepText = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 85) / 128), 'Sleep').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);

    function sleepNow() {
      let fullSleepHours = (Math.floor(game.self.sleep - 10) * -1);
      // 8 hours will equal full nights rest
      if (fullSleepHours >= 8) {
        fullSleepHours -= 2;
      };
      if (fullSleepHours <= 0) {
        game.messageBox.updateBox('You do not need to sleep.');
      } else {
        game.messageBox.updateBox('You slept for ' + fullSleepHours + ' hours.');
        game.self.playerRest(fullSleepHours);
        statusEffectMessages.call(this);
      };
    }

    sleepButton.on('pointerup', function () {
      sleepNow.call(this);
    });
    sleepText.on('pointerup', function () {
      sleepNow.call(this);
    });

    // Seventh button, first column, fourth row
    // Shop / Purchase
    let padding4Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 95) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let padding4Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 96) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);


    // Eighth button, second column, fourth row
    // Save and Quit
    let padding7Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 95) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(1);
    let padding7Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 96) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(1);


  }

  update() {

    if (game.self.gameOver === true) {
      game.gameState.nextScene = 'GameOverScene';
      game.gameState.previousScene = 'GameScene';
    }

    // scene change logic
    if (game.gameState.nextScene === 'ActionsScene' || game.gameState.nextScene === 'GameOverScene' || game.gameState.nextScene === 'OptionsScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
