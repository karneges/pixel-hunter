

let header = (state) => {
  const timeHtml = () => {
    return `
    <h1 class="game__timer"></h1>`;
  };
  let livesHtml = () => {
    return `
      <div class="game__lives">
      ${new Array(state.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32"></img>`)
      .join(``)}
      ${new Array(3 - state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}

      </div>`;
  };

  let el = `
    <div class="header__back">
    ${timeHtml(state)}
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
    </div>

    ${livesHtml(state)}
    </header>`;

  return el;
};

export default header;
