import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
import game from '../index';
import * as roll from '../modules/Roll';
import japan_background_img from '../assets/backgrounds/japan_1366_768.jpg';


export class ActionsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ActionsScene' });
  }

  preload() {
    this.load.image('japan_background', japan_background_img);

  }

  create() {

    // needs comment
    this.config = this.sys.game.config;

    // add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    // add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    // back button
    let backTextBox = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 100) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let backButton = this.add.text(((this.config.width * 24) / 128), ((this.config.height * 101) / 128), 'Back').setColor('#FFFFFF').setInteractive().setFontSize(32);
    // back button logic
    backButton.on('pointerup', function () {
      gameState.nextScene = 'GameScene';
      gameState.previousScene = 'ActionsScene';
    });
    backTextBox.on('pointerup', function () {
      gameState.nextScene = 'GameScene';
      gameState.previousScene = 'ActionsScene';
    });

    // add actions


    // panhandle
    let panhandlingButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 21) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let panhandlingText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 22) / 128), 'Panhandle').setColor('#FFFFFF').setInteractive().setFontSize(32);

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

    function panhandle() {
      // TO DO
      // if FP less than 0, make Will roll to avoid passing out

      if (game.self.fp <= 0) {
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
      gameState.nextScene = 'GameScene';
      gameState.previousScene = 'ActionsScene';
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
    if (gameState.nextScene === 'GameScene') {
      this.scene.stop(gameState.previousScene);
      this.scene.start(gameState.nextScene);
    };

  }

}
