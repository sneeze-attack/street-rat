import Phaser from 'phaser';
import StartScene from './scenes/StartScene';
import OptionsScene from './scenes/OptionsScene';
import CharGenScene from './scenes/CharGenScene';
import GameScene from './scenes/GameScene';
import ActionsScene from './scenes/ActionsScene';
import GameOverScene from './scenes/GameOverScene';
import GamblingScene from './scenes/GamblingScene';
import RouletteScene from './scenes/RouletteScene';
import CardsScene from './scenes/CardsScene';
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
  scene: [
    StartScene,
    OptionsScene,
    CharGenScene,
    GameScene,
    ActionsScene,
    GameOverScene,
    GamblingScene,
    RouletteScene,
    CardsScene
  ],
};

const game = new Phaser.Game(config);

game.gameState = new GameState();
game.self = new Player();
game.messageBox = new MessageBox();

export default game;
