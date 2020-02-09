import { TIME_TO_GAME } from "./data/constans";
let interval
function time(state){
  if(!state.timer){
    state.timer = TIME_TO_GAME;
  }
  state.timer--;
  let gameTimer = document.querySelector(`.game__timer`)
  gameTimer.style.color = `blue`
  gameTimer.innerHTML = state.timer

  interval = setTimeout(time, 1000,state);
}

export default timer;

let timer = {
  startTimer: time,
  stopTimer(state) {
    clearTimeout(interval);
    state.timer = 0;

  }

};

