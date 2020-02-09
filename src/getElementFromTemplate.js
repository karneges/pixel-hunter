function getElementFromTemplate(inner) {
  let myDiv = document.createElement(`div`);
  myDiv.innerHTML = inner;
  return myDiv;
}

export default getElementFromTemplate;


