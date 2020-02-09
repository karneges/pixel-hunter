const mainContainer = document.querySelector(`.central`);

const showDisplay = (element) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(element);
};

export default showDisplay;
