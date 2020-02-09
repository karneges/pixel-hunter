import AbstractView from "./abstractView";
import {
  QUESTION_ACTIONS,
  QUESTION_TITLES
} from "../../data/constans";
import questions from "../../data/questions";
import header from "../header";
import { gameStatsHtml } from "../../stats-progress-bar";


export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    const {askQuestion} = QUESTION_ACTIONS[questions[this.state.level].type];
    return `
    ${header(this.state)}
      <div class="game">
      <p class="game__task">${QUESTION_TITLES[questions[this.state.level].type]}</p>
      ${askQuestion(questions[this.state.level].images)}
      <div class="stats">
      ${gameStatsHtml(this.state.answers)}
      `;
  }


  bind() {
    let questionsType = questions[this.state.level].type;


    if (questionsType === `chooseType` || questionsType === `photoOrPic`) {

      let trigger = this._elem.querySelector(`.game__content`);
      trigger.addEventListener(`change`, ()=>{

        this.onAnswerGiven();
      });
    }
    if (questionsType === `findPic`) {

      let trigger = this._elem.querySelectorAll(`.game__option`);
      trigger.forEach((elem, index)=>{
        elem.addEventListener(`click`, ()=>{
          console.log(`событие`);
          this.onAnswerGiven(index);
        });
      });
    }
  }

  onAnswerGiven() {
  }
}
