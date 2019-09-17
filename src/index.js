import Phaser from 'phaser';
import { StartScene } from './scenes/StartScene';
import { OptionsScene } from './scenes/OptionsScene';
import { CharGenScene } from './scenes/CharGenScene';
import GameState from './modules/GameState';
import Player from './modules/Player';

export const config = {
  type: Phaser.AUTO,
  scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        width: 1366,
        height: 768
    },
  scene: [StartScene, OptionsScene, CharGenScene],
};

export const gameState = new GameState();
export const self = new Player();

const game = new Phaser.Game(config);
export default game;
