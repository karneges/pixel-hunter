// import questions from "./questions";
// import {
//   LEVELS_COUNT,
//   LIVES_COUNT,
//   FAST_ANSWER,
//   ANSWER_VALUES,
//   SLOW_ANSWER
// } from "./constans";

// const getLevel = (state) => questions[state.level];

export default class GameModel {
  constructor(state) {
    this.state = state;
  }
  // setLevel(nextLevel) {
  //   if (this.state.level < 0 || this.state.level > LIVES_COUNT) {
  //     return null;
  //   }
  //   this.state.level = nextLevel;
  //   return this.state;
  // }

  // setLives(lives) {
  //   if (lives > LEVELS_COUNT) {
  //     return null;
  //   }
  //   this.state.lives = lives;
  //   return this.state;
  // }
  // addAnswer(answer) {
  //   return this.state.answers.push(answer);
  // }

  // getLevel() {
  //   return questions[this.state.level];
  // }

  // getAnswerValue(isCorrectAnswer, levelTime) {
  //   if (!isCorrectAnswer) {
  //     return ANSWER_VALUES.wrong;
  //   }
  //   if (levelTime <= FAST_ANSWER) {
  //     return ANSWER_VALUES.fast;
  //   }
  //   return levelTime >= SLOW_ANSWER ? ANSWER_VALUES.slow : ANSWER_VALUES.correct;
  // }

  // goToNextLevel(isCorrectAnswer) {
  //   const nextLevel = this.state.level + 1;
  //   const currentState = !isCorrectAnswer ? this.setLives(this.state.lives - 1) : this.state;
  //   return this.setLevel(currentState, nextLevel);
  // }
}
