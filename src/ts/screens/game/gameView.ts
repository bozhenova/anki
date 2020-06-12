import AbstractView from '../../abstractView';
import { GAME_SETTINGS, Data } from '../../data/data';

export default class GameView extends AbstractView {
  constructor(public data: Data) {
    super();
  }

  get template() {
    const questionTemplate = (data: Data) => {
      return `<section id="game" class="game container">
      <div class="game__wrapper">
      ${data.kun_readings.length > 0 ?
          `<span id="kun_reading" class="game__info">Kun-yomi: ${data.kun_readings.map(elem => { return `<span class="game__info--blue">${elem}</span>` }).join(' ')}</span>` : ``}
      <span id="on_reading" class="game__info">On-yomi: ${data.on_readings.map(elem => { return `<span class="game__info--pink">${elem}</span>` }).join(' ')}</span>
      ${data.jlpt ? `<span id="jlpt" class="game__info">JLPT ${data.jlpt}</span>` : ''}
      </div>
      <h3 class="game__kanji">${data.kanji}</h3>
      <div id="meanings"></div>
        <form id="kanji" autocomplete="off">
          <div class="game__answer-wrapper">
            <input id="input" class="game__answer-input" type="text" pattern="^[a-zA-Z\s]+$" required placeholder="meaning">
          </div>
          <div>
            <input id="exit_btn" class="game__button game__button--exit button" type="button" value="Exit">
            <input id="give-up_btn" class="game__button game__button--give-up button" type="button" value="Give Up">
            <input id="submit_btn" class="game__button game__button--submit button" type="button" value="Submit">
          </div>
        </form>
      </section>`
    }
    return questionTemplate(this.data)
  }

  onAnswer(e: Event): void { }
  onRestartButtonClick() { }
  onGiveUpButtonClick() { }

  bind() {
    const restartButton = this.element.querySelector('#exit_btn');
    const giveUpButton = this.element.querySelector('#give-up_btn');
    const submitButton = this.element.querySelector('#submit_btn');

    restartButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onRestartButtonClick();
    });

    giveUpButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onGiveUpButtonClick();
    });

    submitButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onAnswer(e);
    });

  }
}
