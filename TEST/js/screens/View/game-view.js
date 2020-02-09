import AbstractView from "./abstractView";


export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  showTestDiv() {
    let testDiv = document.createElement(`div`);
    testDiv.textContent = `я тут`;
    return testDiv;

  }

}
