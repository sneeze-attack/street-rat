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
  }

  create() {

    // needs comment
    this.config = this.sys.game.config;

    // add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0).setDepth(1);

    // add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0).setDepth(1);

    // back button
    let backTextBox = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 100) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let backButton = this.add.text(((this.config.width * 24) / 128), ((this.config.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);
    // back button logic
    backButton.on('pointerup', function () {
      backLogic.call(this);
    });
    backTextBox.on('pointerup', function () {
      backLogic.call(this);
    });

    function backLogic() {
      game.gameState.nextScene = 'GameScene';
      game.gameState.previousScene = 'ActionsScene';
    }

    // buttons & text
    let panhandlingButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 21) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive().setDepth(2);
    let panhandlingText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 22) / 128), 'Panhandle').setColor('#FFFFFF').setInteractive().setFontSize(32).setDepth(2);

    // hidden object to show dice results (hidden at depth 0)
    let panhandlingResultsObject = new RollResults(this, 'Panhandling', game.self.panhandleScore);


    // add actions


    // panhandle
    function panhandleActivity() {
      game.self.updateTime(1);
      let diceroll = roll.dice();
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

    // showPanhandlingRollResults.call(this);
    function showPanhandlingRollResults() {
      panhandlingResultsObject.rollTheDice();
      panhandlingResultsObject.resultsShadeBox.setDepth(3);
      panhandlingResultsObject.resultsBoxBorder.setDepth(4);
      panhandlingResultsObject.resultsBox.setDepth(5);
      panhandlingResultsObject.topLine.setDepth(6);
      panhandlingResultsObject.bottomLine.setDepth(6);
      panhandlingResultsObject.rollTitle.setDepth(7);
      panhandlingResultsObject.dieOne.setDepth(8);
      panhandlingResultsObject.dieTwo.setDepth(8);
      panhandlingResultsObject.dieThree.setDepth(8);
      panhandlingResultsObject.scoreNumber.setDepth(8);
      panhandlingResultsObject.scoreText.setDepth(8);
      panhandlingResultsObject.vsText.setDepth(8);
      panhandlingResultsObject.rollTotalText.setDepth(8);
      panhandlingResultsObject.rollText.setDepth(8);
      panhandlingResultsObject.clickToContinueText.setDepth(8);
      panhandlingResultsObject.successOrFailureText.setDepth(8);
    }
    // hidePanhandlingRollResults.call(this);
    function hidePanhandlingRollResults() {
      panhandlingResultsObject.resultsShadeBox.setDepth(0);
      panhandlingResultsObject.resultsBoxBorder.setDepth(0);
      panhandlingResultsObject.resultsBox.setDepth(0);
      panhandlingResultsObject.topLine.setDepth(0);
      panhandlingResultsObject.bottomLine.setDepth(0);
      panhandlingResultsObject.rollTitle.setDepth(0);
      panhandlingResultsObject.dieOne.setDepth(0);
      panhandlingResultsObject.dieTwo.setDepth(0);
      panhandlingResultsObject.dieThree.setDepth(0);
      panhandlingResultsObject.scoreNumber.setDepth(0);
      panhandlingResultsObject.scoreText.setDepth(0);
      panhandlingResultsObject.vsText.setDepth(0);
      panhandlingResultsObject.rollTotalText.setDepth(0);
      panhandlingResultsObject.rollText.setDepth(0);
      panhandlingResultsObject.clickToContinueText.setDepth(0);
      panhandlingResultsObject.successOrFailureText.setDepth(0);
    }

    // Hide results when clicked -- "click to continue"
    panhandlingResultsObject.resultsShadeBox.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.resultsBox.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.rollTitle.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.dieOne.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.dieTwo.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.dieThree.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.scoreNumber.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.scoreText.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.vsText.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.rollTotalText.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.rollText.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.clickToContinueText.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });
    panhandlingResultsObject.successOrFailureText.on('pointerup', function () {
      hidePanhandlingRollResults.call(this);
    });

    function panhandle() {
      // show roll results when option is toggled
      if (game.gameState.showRollResults === true) {
        showPanhandlingRollResults.call(this);
      } else {
        // if SP less than 0, make Will roll to avoid passing out
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

        // check to see if Tiredness status effect should be added, since 1 hour has passed
        game.self.isPlayerTired();
        game.self.lastAction = 'Panhandle';
        game.gameState.nextScene = 'GameScene';
        game.gameState.previousScene = 'ActionsScene';
      };

    }

    panhandlingButton.on('pointerup', function () {
      panhandle.call(this);
    });
    panhandlingText.on('pointerup', function () {
      panhandle.call(this);
    });

  }

  update() {
    // scene change logic
    if (game.gameState.nextScene === 'GameScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    };

  }

}
