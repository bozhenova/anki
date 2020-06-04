import IntroScreen from './screens/intro/introScreen';
import InitScreen from './screens/init/initScreen';
import GameScreen from './screens/game/gameScreen';
import ModalScreen from './screens/modal/modalScreen';
import LoaderScreen from './screens/loader/loaderScreen';
import ErrorScreen from './screens/error/errorScreen';
import { Data } from './data/data';
import Loader from './loader';
import { GameModel } from './gameModel';

const mainContent = document.querySelector(`#main`);

const renderScreen = (screenElement: HTMLElement) => {
  if (!screenElement.matches('.modal')) {
    mainContent.innerHTML = ``;
  }
  mainContent.appendChild(screenElement);
};

export default class Application {
  static _data: string[];

  static start(): void {
    this.showIntro();
  }

  static set data(data: string[]) {
    this._data = data;
  }

  static get data(): string[] {
    return this._data;
  }

  static showLoader(): void {
    const loader = new LoaderScreen();
    renderScreen(loader.element);
  }

  static showIntro(): void {
    const intro = new IntroScreen();
    intro.addHandlers();
    renderScreen(intro.element);
  }

  static showInitScreen(): void {
    const init = new InitScreen();
    init.addHandlers();
    renderScreen(init.element);
  }

  static async loadData(level: string) {
    Application.showLoader();
    await Loader.loadData(level);
    this.showGame()
  }

  static showGame() {
    const model = new GameModel(this.data);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    renderScreen(gameScreen.root);
  }

  static showModal(): void {
    const modal = new ModalScreen();
    modal.addHandlers();
    renderScreen(modal.element);
  }

  static closeModal(): void {
    mainContent.querySelector('.modal').remove();
  }

  static showError(e: Error): void {
    const error: ErrorScreen = new ErrorScreen(e);
    renderScreen(error.element);
  }

}
