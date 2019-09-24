import Phaser from 'phaser';
import { StartScene } from './scenes/StartScene';
import { OptionsScene } from './scenes/OptionsScene';
import { CharGenScene } from './scenes/CharGenScene';
import { GameScene } from './scenes/GameScene';
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
  scene: [StartScene, OptionsScene, CharGenScene, GameScene],
};

export const gameState = new GameState();

const game = new Phaser.Game(config);

game.self = new Player();

export default game;
