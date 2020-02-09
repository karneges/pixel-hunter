import {LIVES_COUNT} from "./constans";


export const defaultState = Object.freeze({
  level: 0,
  lives: LIVES_COUNT,
  timer: null,
  answers: []
});
