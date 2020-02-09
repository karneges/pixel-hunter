import questions from "./questions";
import {
  LEVELS_COUNT,
  LIVES_COUNT,
  FAST_ANSWER,
  ANSWER_VALUES,
  SLOW_ANSWER,
  TIME_TO_GAME
} from "./constans";

// const getLevel = (state) => questions[state.level];

export default class GameModel {
  constructor(state) {
    this.state = Object.assign({}, state);
  }
  setLevel(nextLevel) {
    if (this.state.level < 0 || this.state.level > LEVELS_COUNT) {
      return null;
    }
    this.state.level = nextLevel;
    return this.state;
  }

  setLives(lives) {
    if (lives > LEVELS_COUNT) {
      return null;
    }
    this.state.lives = lives;
    return this.state;
  }
  addAnswer(answer, time) {

    this.state.answers.push(
      this.getAnswerValue(answer, time));


  }

  getLevel() {
    return questions[this.state.level];
  }
  getTime() {
    return this.state.timer;
  }
  getAnswers() {
    return this.state.answers;
  }
  getAnswerValue(isCorrectAnswer, levelTime) {

    if (!isCorrectAnswer) {
      return ANSWER_VALUES.wrong;
    }
    if (levelTime >= TIME_TO_GAME - FAST_ANSWER) {
      return ANSWER_VALUES.fast;
    }
    return levelTime <= (TIME_TO_GAME - SLOW_ANSWER) ? ANSWER_VALUES.slow : ANSWER_VALUES.correct;
  }

  goToNextLevel(isCorrectAnswer) {
    const nextLevel = this.state.level + 1;
    if (!isCorrectAnswer) {
      this.setLives(this.state.lives - 1);
    }
    this.setLevel(nextLevel);
    console.log(this.state);


  }
}
