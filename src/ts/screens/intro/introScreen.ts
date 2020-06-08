import IntroView from "./introView";
import Application from "../../application";

export default class IntroScreen {
  content: IntroView;
  element: HTMLElement;

  constructor() {
    this.content = new IntroView();
    this.element = this.content.element;
  }

  addHandlers() {
    this.content.onStartButtonClick = () => Application.showInitScreen();
  }
}
