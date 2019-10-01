import Phaser from 'phaser';
import gameState from '../index';
import config from '../index';
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
  }

  create() {

    // needs comment
    this.config = this.sys.game.config;

    // add background image
    this.add.image(0, 0, 'japan_background').setOrigin(0, 0);

    // add black box
    let createBox = this.add.rectangle(((this.config.width * 16) / 128), ((this.config.height * 16) / 128), ((this.config.width * 96) / 128), ((this.config.height * 96) / 128), 0x000000).setOrigin(0, 0);

    // portrait
    let portrait = this.add.sprite(((this.config.width * 18) / 128), ((this.config.height * 19) / 128), game.self.gender + game.self.portrait).setOrigin(0, 0);

    // name
    let enterNameText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 19) / 128), game.self.name).setColor('#FFFFFF').setFontSize(36);

    // player points
    let pointsText = this.add.text(((this.config.width * 36) / 128), ((this.config.height * 56) / 128), 'Points: ' + game.self.points).setColor('#FFFFFF').setFontSize(20);

    // primary attributes, first column
    let strText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 29) / 128), 'STR: ' + game.self.strength).setColor('#FFFFFF').setFontSize(28);
    let agiText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 35) / 128), 'AGI: ' + game.self.agility).setColor('#FFFFFF').setFontSize(28);
    let intText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 41) / 128), 'INT: ' + game.self.intelligence).setColor('#FFFFFF').setFontSize(28);
    let conText = this.add.text(((this.config.width * 35) / 128), ((this.config.height * 47) / 128), 'CON: ' + game.self.constitution).setColor('#FFFFFF').setFontSize(28);

    // secondary attributes, second column
    let hpText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 29) / 128), '  HP: ' + game.self.hp).setColor('#FFFFFF').setFontSize(28);
    let willText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 35) / 128), 'Will: ' + game.self.will).setColor('#FFFFFF').setFontSize(28);
    let perText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 41) / 128), ' Per: ' + game.self.perception).setColor('#FFFFFF').setFontSize(28);
    let fpText = this.add.text(((this.config.width * 50) / 128), ((this.config.height * 47) / 128), '  FP: ' + game.self.fp).setColor('#FFFFFF').setFontSize(28);

    // more secondary attributes, third column
    let carryText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 29) / 128), 'Carry: ' + game.self.carry).setColor('#FFFFFF').setFontSize(28);
    let speedText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 35) / 128), 'Speed: ' + game.self.speed).setColor('#FFFFFF').setFontSize(28);
    let moveText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 41) / 128), ' Move: ' + game.self.move).setColor('#FFFFFF').setFontSize(28);
    let creditsText = this.add.text(((this.config.width * 68) / 128), ((this.config.height * 47) / 128), 'Creds: ' + game.self.credits).setColor('#FFFFFF').setFontSize(28);

    // Status Effects, fourth column
    let statusEffectsText = this.add.text(((this.config.width * 88) / 128), ((this.config.height * 29) / 128), 'Status Effects').setColor('#FFFFFF').setFontSize(22);
    // underline statusEffectsText
    let underline = new Phaser.Geom.Line(((this.config.width * 88) / 128), ((this.config.height * 33) / 128), ((this.config.width * 211) / 256), ((this.config.height * 33) / 128));
    let graphics = this.add.graphics({ lineStyle: { width: 1, color: 0xffffff } }).strokeLineShape(underline);

    // list current statusEffects of Player
    let statusEffectsList = this.add.text(((this.config.width * 88) / 128), ((this.config.height * 35) / 128), game.self.statusEffects).setColor('#FFFFFF').setFontSize(22);

    function statusEffectMessages() {
      // Tired status effect check
      let checkForTired = game.self.statusEffects.includes('Tired');
      if (checkForTired === true && game.self.tiredWarned === false) {
        game.messageBox.updateBox('You feel tired.');
        // only warn once by using tiredWarning
        game.self.tiredWarned = true;
        // lose 1 FP when you first get tired
        game.self.fp -= 1;
      };
    }

    // Day and Time
    let calendar = this.add.text(((this.config.width * 102) / 128), ((this.config.height * 18) / 128), ' Day: ' + game.self.day).setColor('#FFFFFF').setFontSize(20);
    let clock = this.add.text(((this.config.width * 102) / 128), ((this.config.height * 22) / 128), 'Hour: ' + game.self.hour).setColor('#FFFFFF').setFontSize(20);

    function updateMenu() {
      //updates displays
      statusEffectsList.setText(game.self.statusEffects);
      clock.setText('Hour: ' + game.self.hour);
      calendar.setText(' Day: ' + game.self.day);
      fpText.setText('  FP: ' + game.self.fp);
    }

    // add in a message area
    let messageAreaBorder = this.add.rectangle(((this.config.width * 62) / 128), ((this.config.height * 62) / 128), ((this.config.width * 48) / 128), ((this.config.height * 47) / 128), 0x4D4E4F).setOrigin(0, 0);
    let messageArea = this.add.rectangle(((this.config.width * 63) / 128), ((this.config.height * 63) / 128), ((this.config.width * 46) / 128), ((this.config.height * 45) / 128), 0x000000).setOrigin(0, 0);

    // add in message lines
    game.messageBox.lineOne = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 101) / 128), game.messageBox.lineOneText).setColor('#FFFFFF').setFontSize(28);
    game.messageBox.lineTwo = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 95) / 128), game.messageBox.lineTwoText).setColor('#DCDCDC').setFontSize(28);
    game.messageBox.lineThree = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 89) / 128), game.messageBox.lineThreeText).setColor('#C0C0C0').setFontSize(28);
    game.messageBox.lineFour = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 83) / 128), game.messageBox.lineFourText).setColor('#A9A9A9').setFontSize(28);
    game.messageBox.lineFive = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 77) / 128), game.messageBox.lineFiveText).setColor('#808080').setFontSize(28);
    game.messageBox.lineSix = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 71) / 128), game.messageBox.lineSixText).setColor('#696969').setFontSize(28);
    game.messageBox.lineSeven = this.add.text(((this.config.width * 64) / 128), ((this.config.height * 65) / 128), game.messageBox.lineSevenText).setColor('#505050').setFontSize(28);
    // check for status effects gained from ActionsScene
    statusEffectMessages.call(this);


    // main buttons

    // first button, upper left corner
    // Actions
    let actionsButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 62) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let actionsText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 63) / 128), 'Actions').setColor('#FFFFFF').setInteractive().setFontSize(32);

    actionsButton.on('pointerup', function () {
      gameState.nextScene = 'ActionsScene';
      gameState.previousScene = 'GameScene';
    });
    actionsText.on('pointerup', function () {
      gameState.nextScene = 'ActionsScene';
      gameState.previousScene = 'GameScene';
    });

    // second button, top right corner
    // Repeat last action
    let padding1Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 62) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding1Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 63) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32);

    // Third button, first column, second row
    // Inventory
    let padding2Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 73) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding2Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 74) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32);

    // Fourth button, second column, second row
    // Skills (list/train)
    let padding3Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 73) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding3Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 74) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32);

    // Fifth button, first column, third row
    // Shop / Purchase
    let padding4Button = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 84) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding4Text = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 85) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32);

    // Sixth button, second column, third row
    // Pass Turn
    let passTurnButton = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 84) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let passTurnText = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 85) / 128), 'Pass Turn').setColor('#FFFFFF').setInteractive().setFontSize(32);

    function passTurn() {
      game.self.updateTime(1);
      game.self.isPlayerTired();
      statusEffectMessages.call(this);
      updateMenu.call(this);
    }

    passTurnButton.on('pointerup', function () {
      passTurn.call(this);
    });
    passTurnText.on('pointerup', function () {
      passTurn.call(this);
    });


    // Seventh button, first column, fourth row
    // Rest
    let restButton = this.add.rectangle(((this.config.width * 18) / 128), ((this.config.height * 95) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let restText = this.add.text(((this.config.width * 20) / 128), ((this.config.height * 96) / 128), 'Rest 1 Hour').setColor('#FFFFFF').setInteractive().setFontSize(32);

    function selfRest() {
      game.self.playerRest(1);
      statusEffectMessages.call(this);
      updateMenu.call(this);
    }

    restButton.on('pointerup', function () {
      selfRest.call(this);
    });
    restText.on('pointerup', function () {
      selfRest.call(this);
    });

    // Eighth button, second column, fourth row
    // Save and Quit
    let padding7Button = this.add.rectangle(((this.config.width * 40) / 128), ((this.config.height * 95) / 128), ((this.config.width * 20) / 128), ((this.config.height * 8) / 128), 0x4D4E4F).setOrigin(0, 0).setInteractive();
    let padding7Text = this.add.text(((this.config.width * 42) / 128), ((this.config.height * 96) / 128), '').setColor('#FFFFFF').setInteractive().setFontSize(32);


  }

  update() {
    // scene change logic
    if (gameState.nextScene === 'ActionsScene') {
      this.scene.stop(gameState.previousScene);
      this.scene.start(gameState.nextScene);
    };

  }

}
