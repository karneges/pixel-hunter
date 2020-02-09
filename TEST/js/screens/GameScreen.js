// import {
//   LIVES_COUNT
// } from "../data/constans";
import GameView from "./View/game-view";
import showDisplay from "../showDisplay";

export default class GameScreen {
  constructor(model) {
    this.model = model;
  }


  startGame() {
    // if (this.model.state.level < LIVES_COUNT && this.model.state.lives >= 0) {
    const screen = new GameView(this.model.state);
    showDisplay(screen.showTestDiv);
  }
}
