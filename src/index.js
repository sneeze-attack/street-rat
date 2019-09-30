import Phaser from 'phaser';
import { StartScene } from './scenes/StartScene';
import { OptionsScene } from './scenes/OptionsScene';
import { CharGenScene } from './scenes/CharGenScene';
import { GameScene } from './scenes/GameScene';
import { ActionsScene } from './scenes/ActionsScene';
import GameState from './modules/GameState';
import Player from './modules/Player';
import MessageBox from './modules/MessageBox';

export const config = {
  type: Phaser.AUTO,
  scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 1366,
        height: 768
    },
  scene: [StartScene, OptionsScene, CharGenScene, GameScene, ActionsScene],
};

export const gameState = new GameState();

const game = new Phaser.Game(config);

game.self = new Player();
game.messageBox = new MessageBox();

export default game;
