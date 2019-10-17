import Phaser from 'phaser';
import RollResults from '../modules/RollResults';
import game from '../index';
import * as roll from '../modules/Roll';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';
import dice_one_img from '../assets/icons/64x64/dice_one_white.png';
import dice_two_img from '../assets/icons/64x64/dice_two_white.png';
import dice_three_img from '../assets/icons/64x64/dice_three_white.png';
import dice_four_img from '../assets/icons/64x64/dice_four_white.png';
import dice_five_img from '../assets/icons/64x64/dice_five_white.png';
import dice_six_img from '../assets/icons/64x64/dice_six_white.png';
import cog_img from '../assets/icons/48x48/cog_white.png';


export class ActionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ActionsScene' });
  }

  preload() {
    this.load.image('japan_background', japan_background_img);
    this.load.image('dice_one', dice_one_img);
    this.load.image('dice_two', dice_two_img);
    this.load.image('dice_three', dice_three_img);
    this.load.image('dice_four', dice_four_img);
    this.load.image('dice_five', dice_five_img);
    this.load.image('dice_six', dice_six_img);
    this.load.image('cog', cog_img);
  }

  create() {

    // needs comment
    this.config = this.sys.game.config;

    // add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0).setDepth(1).setInteractive();

    // add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0).setDepth(1);

    // options
    let optionsCog = this.add.sprite(((this.config.width * 122) / 128), ((this.config.height * 3) / 128), 'cog').setOrigin(0, 0).setInteractive().setDepth(1);

    optionsCog.on('pointerup', function () {
      game.gameState.changeScene('OptionsScene', 'ActionsScene');
    });

    // back button
    let backTextBox = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 100) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let backButton = this.add.text(((this.config.width * 24) / 128), ((this.config.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);
    // back button logic
    backButton.on('pointerup', function () {
      game.gameState.changeScene('GameScene', 'ActionsScene');
    });
    backTextBox.on('pointerup', function () {
      game.gameState.changeScene('GameScene', 'ActionsScene');
    });

    // buttons & text
    let gamblingButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 21) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let gamblingText = this.add.text(((this.config.width * 22.5) / 128), ((this.config.height * 22.5) / 128), 'Gamble').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);

    let panhandlingButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 33) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let panhandlingText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 34.5) / 128), 'Panhandle').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);

    // hidden object to show dice results (hidden at depth 0)
    let panhandlingResultsObject = new RollResults(this, 'Panhandling', game.self.panhandleScore, 'Basic Roll');

    // Hide results when clicked -- "click to continue"
    panhandlingResultsObject.masterBox.on('pointerup', function () {
      panhandlingResultsObject.hideRollResults();
      game.gameState.changeScene('GameScene', 'ActionsScene');
    });

    let spWillResultsObject = new RollResults(this, 'Will', game.self.will, 'SP too low');

    // Hide results when clicked -- "click to continue"
    spWillResultsObject.masterBox.on('pointerup', function () {
      spWillResultsObject.hideRollResults();
      if (game.self.will < spWillResultsObject.diceTotal) {
        game.gameState.changeScene('GameScene', 'ActionsScene');
      };
    });


    // add actions


    // panhandle
    function panhandleActivity() {
      game.self.updateTime(1);
      let diceroll = roll.dice();
      if (game.gameState.showRollResults === true) {
        diceroll = panhandlingResultsObject.diceTotal;
      };
      // roll of 17 or 18 is automatic failure
      if (diceroll >= 17) {
        game.messageBox.updateValues('Failure');
      } else {
        let margin = game.self.panhandleScore - diceroll;
        // panhandling margin cannot be zero
        if (margin === 0) {
          margin++;
        };
        if (margin > 0) {
          game.self.credits = game.self.credits+=(margin * 2)
          game.messageBox.updateValues('Success! Made ' + (margin * 2) + ' credits!' );
        } else {
          game.messageBox.updateValues('Failure');
        };
      };
    }

    function panhandle() {

      if (game.gameState.showRollResults === true) {
        // if SP less than 0, make Will roll to avoid passing out
        if (game.self.sp <= 0) {
          spWillResultsObject.showRollResultsModDepth(1);
          if (game.self.will >= spWillResultsObject.diceTotal) {
            panhandlingResultsObject.showRollResults();
            panhandleActivity.call(this);
          } else {
            spWillResultsObject.resultsShadeBox.setAlpha(0.5);
            game.self.unconsciousActivity();
          };
        } else {
          panhandlingResultsObject.showRollResults();
          panhandleActivity.call(this);
        };
      } else {
        // if SP less than 0, make Will roll to avoid passing out
        if (game.self.sp <= 0) {
          let willRoll = roll.dice();
          if (game.self.will >= willRoll) {
            panhandleActivity.call(this);
            game.gameState.changeScene('GameScene', 'ActionsScene');
          } else {
            game.self.unconsciousActivity();
            game.gameState.changeScene('GameScene', 'ActionsScene');
          };
        } else {
          panhandleActivity.call(this);
          game.gameState.changeScene('GameScene', 'ActionsScene');
        };
      };
      // check to see if Tiredness status effect should be added, since 1 hour has passed
      game.self.isPlayerTired();
      game.self.lastAction = 'Panhandle';
    }

    panhandlingButton.on('pointerup', function () {
      panhandle.call(this);
    });
    panhandlingText.on('pointerup', function () {
      panhandle.call(this);
    });

    gamblingButton.on('pointerup', function () {
      game.gameState.changeScene('GamblingScene', 'ActionsScene');
    });
    gamblingText.on('pointerup', function () {
      game.gameState.changeScene('GamblingScene', 'ActionsScene');
    });

  }

  update() {
    // scene change logic
    if (game.gameState.nextScene !== 'ActionsScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
