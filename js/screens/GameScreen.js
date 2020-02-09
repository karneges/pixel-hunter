import {
  LIVES_COUNT,
  LEVELS_COUNT
} from "../data/constans";
import GameView from "./View/game-view";
import showDisplay from "../showDisplay";
import timer from "../timer";
import Application from "../Application";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.levels = model.getLevel();
  }


  startGame() {
    if (this.model.state.level < LEVELS_COUNT && this.model.state.lives >= 0) {
      const screen = new GameView(this.model.state);

      showDisplay(screen.element);
      timer.stopTimer(this.model.state);
      timer.startTimer(this.model.state);

      screen.onAnswerGiven = (index) => {
        let isCorrectAnswer = false

        if (this.model.getLevel().type === `chooseType`) {
          let gameOption = screen.element.querySelectorAll(`.game__option`);
          let chekedInputs = screen.element.querySelectorAll(`input[type="radio"]:checked`);

          if (gameOption.length === chekedInputs.length) {

            isCorrectAnswer = this.levels.correctAnswer[0] === chekedInputs[0].value &&
              this.levels.correctAnswer[1] === chekedInputs[1].value;

            this.model.addAnswer(isCorrectAnswer, this.model.state.timer);
            this.model.goToNextLevel(isCorrectAnswer);
            this.startGame();

            return
          }
        }
        if (this.model.getLevel().type === `photoOrPic`) {
          let chekedInputs = screen.element.querySelectorAll(`input[type="radio"]:checked`);
          if (chekedInputs) {
            isCorrectAnswer = this.levels.correctAnswer[0] === chekedInputs[0].value
            this.model.addAnswer(isCorrectAnswer, this.model.state.timer);
            this.model.goToNextLevel(isCorrectAnswer);
            this.startGame();
            return
          }
        }
        if (this.model.getLevel().type === `findPic`) {
          console.log(this.model.getLevel().type);
          console.log(this.levels);


          isCorrectAnswer = this.model.getLevel().correctAnswer === index;
          this.model.addAnswer(isCorrectAnswer, this.model.state.timer);
          this.model.goToNextLevel(isCorrectAnswer);

          this.startGame();

          return
        }


      }
    }
     else {

      Application.showStats(this.model);
    }




  };

}
