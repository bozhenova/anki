import AbstractView from "../../abstractView";

export default class LoaderView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="loader">
          <p class="loader__text">Loading data</p>
          <div class="loader__icon"></div>
          </div>`;
  }
}
