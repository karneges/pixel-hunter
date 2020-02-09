let TIME_TO_GAME = 30;
let state = {
  time: 0
};

function tick(state) {
  state.time -= 1;
}
let interval;
let timer = {

  startTimer: (state) => {
    if (state.time !== TIME_TO_GAME) {
      state.time = TIME_TO_GAME;
    }
    interval = setInterval(() => {
      tick(state);

    }, 1000);
  },
  stopTimer: () => {
    clearInterval(interval);
  },
  getTime: () => {
    console.log(state.time);
  }
};

timer.startTimer(state);
console.log(setInterval(timer.getTime), 100);
