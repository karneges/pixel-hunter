import GameModel from "./data/GameModel";
import GameScreen from "./screens/GameScreen";
import StatsScreen from "./screens/stats-screen";

export default class Application {

  static showGame(state) {
    const model = new GameModel(state);
    const gameScreen = new GameScreen(model);
    const screen = gameScreen.startGame();

    let modelScreen = {
      model,
      screen
    };

    return modelScreen;
  }

  static showStats(state) {
    const statistics = new StatsScreen();
    statistics.showStats(state);
  }

}


