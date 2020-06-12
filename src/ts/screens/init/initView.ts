import AbstractView from '../../abstractView';

class InitView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section id="init" class="init container">
            <h1>Choose your level</h1>
            <form>
              <div class="init__levels">
                <input id="level-1" name="level" class="init__level-input visually-hidden" type="radio" value="1"><label for="level-1">1</label>
                <input id="level-2" name="level" class="init__level-input visually-hidden" type="radio" value="2"><label for="level-2">2</label>
                <input id="level-3" name="level" class="init__level-input visually-hidden" type="radio" value="3"><label for="level-3">3</label>
                <input id="level-4" name="level" class="init__level-input visually-hidden" type="radio" value="4"><label for="level-4">4</label>
                <input id="level-5" name="level" class="init__level-input visually-hidden" type="radio" value="5"><label for="level-5">5</label>
                <input id="level-6" name="level" class="init__level-input visually-hidden" type="radio" value="6"><label for="level-6">6</label>
                <input id="level-7" name="level" class="init__level-input visually-hidden" type="radio" value="7"><label for="level-7">7</label>
                <input id="level-8" name="level" class="init__level-input visually-hidden" type="radio" value="8"><label for="level-8">8</label>
                <button class="init__button" type="submit" disabled>Go!</button>
            </div></form>
        </section>`;
  }

  onLevelButtonClick(e: Event) { }

  onGoButtonClick(level: string) { }

  bind() {
    const rulesInput = this.element.querySelectorAll(`.init__level-input`) as NodeListOf<HTMLInputElement>;
    const goButton = this.element.querySelector(`.init__button`) as HTMLButtonElement;
    let value: string;

    rulesInput.forEach(input => input.addEventListener(`change`, (e) => {
      e.preventDefault();
      goButton.disabled = input.checked ? false : true;
      value = (e.target as HTMLInputElement).value
    }));

    goButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onGoButtonClick(value);
    });
  }

}

export default InitView;