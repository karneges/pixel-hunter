import getElementFromTemplate from "../../getElementFromTemplate";


export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't create AbstractView directly`);
    }
  }

  get template() {

  }

  render() {
    return getElementFromTemplate(this.template)
  }

  bind() {

  }

  get element() {
    if (!this._elem) {
      this._elem = this.render();
      this.bind();
    }

    return this._elem;
  }

}
