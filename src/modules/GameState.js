export default class GameState {
	constructor() {
		this.nextScene = null;
		this.previousScene = null;
		this.showRollResults = true;
	}

	changeScene(nextScene, thisScene) {
		this.nextScene = nextScene;
		this.previousScene = thisScene;
	}

}
