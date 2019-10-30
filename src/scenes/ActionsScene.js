import Phaser from 'phaser';
import RollResults from '../modules/RollResults';
import Actions from '../modules/ui/Actions';
import game from '../index';
import * as roll from '../modules/utils/Roll';
import japanBackgroundImg from '../assets/backgrounds/japan_1366_768.jpg';
import diceOneImg from '../assets/icons/64x64/dice_one_white.png';
import diceTwoImg from '../assets/icons/64x64/dice_two_white.png';
import diceThreeImg from '../assets/icons/64x64/dice_three_white.png';
import diceFourImg from '../assets/icons/64x64/dice_four_white.png';
import diceFiveImg from '../assets/icons/64x64/dice_five_white.png';
import diceSixImg from '../assets/icons/64x64/dice_six_white.png';
import cogImg from '../assets/icons/48x48/cog_white.png';


export default class ActionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ActionsScene' });
  }

  preload() {
    this.load.image('japan_background', japanBackgroundImg);
    this.load.image('dice_one', diceOneImg);
    this.load.image('dice_two', diceTwoImg);
    this.load.image('dice_three', diceThreeImg);
    this.load.image('dice_four', diceFourImg);
    this.load.image('dice_five', diceFiveImg);
    this.load.image('dice_six', diceSixImg);
    this.load.image('cog', cogImg);
  }

  create() {
    // shortcut
    this.config = this.sys.game.config;

    // use object to set up UI
    const ui = new Actions(this);

    ui.optionsCog.on('pointerup', () => {
      game.gameState.changeScene('OptionsScene', 'ActionsScene');
    });

    ui.backButton.on('pointerup', () => {
      game.gameState.changeScene('GameScene', 'ActionsScene');
    });
    ui.backTextBox.on('pointerup', () => {
      game.gameState.changeScene('GameScene', 'ActionsScene');
    });

    // hidden object to show dice results (hidden at depth 0)
    const panhandlingResultsObject = new RollResults(this, 'Panhandling', game.self.panhandleScore, 'Basic Roll');

    // Hide results when clicked -- "click to continue"
    panhandlingResultsObject.masterBox.on('pointerup', () => {
      panhandlingResultsObject.hideRollResults();
      game.gameState.changeScene('GameScene', 'ActionsScene');
    });

    const spWillResultsObject = new RollResults(this, 'Will', game.self.will, 'SP too low');

    // Hide results when clicked -- "click to continue"
    spWillResultsObject.masterBox.on('pointerup', () => {
      spWillResultsObject.hideRollResults();
      if (game.self.will < spWillResultsObject.diceTotal) {
        game.gameState.changeScene('GameScene', 'ActionsScene');
      }
    });


    // add actions


    // panhandle
    function panhandleActivity() {
      game.self.updateTime(1);
      let diceroll = roll.dice();
      if (game.gameState.showRollResults === true) {
        diceroll = panhandlingResultsObject.diceTotal;
      }
      // roll of 17 or 18 is automatic failure
      if (diceroll >= 17) {
        game.messageBox.updateValues('Failure');
      } else {
        let margin = game.self.panhandleScore - diceroll;
        // panhandling margin cannot be zero
        if (margin === 0) {
          margin += 1;
        }
        if (margin > 0) {
          game.self.credits += (margin * 2);
          game.messageBox.updateValues(`Success! Made ${(margin * 2)} credits!`);
        } else {
          game.messageBox.updateValues('Failure');
        }
      }
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
          }
        } else {
          panhandlingResultsObject.showRollResults();
          panhandleActivity.call(this);
        }
      } else {
        // if SP less than 0, make Will roll to avoid passing out
        if (game.self.sp <= 0) {
          const willRoll = roll.dice();
          if (game.self.will >= willRoll) {
            panhandleActivity.call(this);
            game.gameState.changeScene('GameScene', 'ActionsScene');
          } else {
            game.self.unconsciousActivity();
            game.gameState.changeScene('GameScene', 'ActionsScene');
          }
        } else {
          panhandleActivity.call(this);
          game.gameState.changeScene('GameScene', 'ActionsScene');
        };
      }
      // check to see if Tiredness status effect should be added, since 1 hour has passed
      game.self.isPlayerTired();
      game.self.lastAction = 'Panhandle';
    }

    ui.panhandlingButton.on('pointerup', () => {
      panhandle.call(this);
    });
    ui.panhandlingText.on('pointerup', () => {
      panhandle.call(this);
    });

    ui.gamblingButton.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'ActionsScene');
    });
    ui.gamblingText.on('pointerup', () => {
      game.gameState.changeScene('GamblingScene', 'ActionsScene');
    });
  }

  update() {
    // scene change logic
    if (game.gameState.nextScene !== 'ActionsScene') {
      this.scene.stop(game.gameState.previousScene);
      this.scene.start(game.gameState.nextScene);
    }
  }
}
