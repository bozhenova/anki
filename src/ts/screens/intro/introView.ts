import AbstractView from "../../abstractView";

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section id="intro" class="intro container">
            <p class="intro__text">Welcome to</p>
            <h1 class="intro__title">Anki</h1>
            <p class="intro__text">– an app that will help you to learn Japanese kanji!</p>
            <form>
                <input id="startButton" class="intro__start-button button" type="button" value="Start">
            </form>
        </section>`;
  }

  onStartButtonClick() { }

  bind() {
    const startButton = this.element.querySelector(`#startButton`);
    startButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onStartButtonClick();
    });
  }
}
