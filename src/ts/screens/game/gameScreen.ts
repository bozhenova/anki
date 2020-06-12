import GameView from './gameView';
import Application from '../../application';
import { GAME_SETTINGS, Data, State } from '../../data/data';
import { GameModel } from '../../gameModel';

export default class GameScreen {
  content: GameView;
  root: HTMLElement;
  state: State;
  timer: any;

  constructor(public model: GameModel) {
    this.root = document.createElement(`div`);
  }

  async init() {
    this.content = new GameView(await this.model.getCurrentQuestion());
    this.root.append(this.content.element);
    this.startGame();
  }

  startGame() {
    this.addHandlers();
  }

  changeContentView(view: GameView) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  async changeQuestion() {
    this.model.getNextQuestion();
    const content = new GameView(await this.model.getCurrentQuestion());
    this.changeContentView(content);
    this.addHandlers()

  }

  continueGame() {
    return this.model.isLastQuestion() ? this.endGame() : this.changeQuestion();
  }

  endGame() {
    //TODO: вывести сообщение, что пройдены все кандзи уровня и предложить выбрать другой уровень
    console.log('end game')
  }

  answer(question: Data) {
    const answerInput = this.content.element.querySelector(`.game__answer-input`) as HTMLInputElement;
    const uniqueElementLength: number = 1;
    let answerType: boolean;
    answerType = question.meanings.filter(meaning => answerInput.value === meaning).length === uniqueElementLength;


    if (!answerType) {
      answerInput.classList.remove('game__answer-error');
      //reflow trick
      answerInput.width = answerInput.offsetWidth;
      answerInput.classList.add('game__answer-error');

    } else {
      this.changeQuestion();
    }
  }


  addHandlers() {

    const answerInput = this.content.element.querySelector(`.game__answer-input`) as HTMLInputElement;

    this.content.onAnswer = async (e: MouseEvent) => {
      this.answer(await this.model.getCurrentQuestion());
    };

    this.content.onRestartButtonClick = () => {
      Application.showModal();
    }

    this.content.onGiveUpButtonClick = async () => {
      const meaningsContainer = this.content.element.querySelector('#meanings');
      const data = await this.model.getCurrentQuestion();
      answerInput.style.display = 'none';
      meaningsContainer.innerHTML = `<p class="game__meanings">${data.meanings.join(', ')}</p>`;
      setTimeout(() => this.changeQuestion(), 2500)
    }

  }

}

//TODO: сохранение результатов и возможность начать с того места,где остановилась
//TODO: сокращение базы по мере усвоения результатов