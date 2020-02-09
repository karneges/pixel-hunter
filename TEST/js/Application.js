import GameModel from "./data/GameModel";
import GameScreen from "./screens/GameScreen";

export default class Application {

  static showGame(state) {
    const model = new GameModel(state);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
  }

  // static showStats(stats) {
  //   const statistics = new StatsScreen(stats);
  //   changeView(statistics.element);
  // }

}
