import {
  LEVELS_COUNT
} from "./data/constans";

const unknownProgress = `<li class="stats__result stats__result--unknown"></li>`;

export let gameStatsHtml = (answers) => {
  return `
<ul class="stats">
  ${[...answers].map((result)=>{
    return ` <li class="stats__result stats__result--${result}"></li>`;
  }).join(`
  `)}

  ${new Array(LEVELS_COUNT - answers.length).fill(unknownProgress).join(``)}
</ul>`;
};
