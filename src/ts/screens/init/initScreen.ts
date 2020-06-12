import InitView from './initView';
import Application from '../../application';

export default class GreetingScreen {
  element: HTMLElement;
  content: InitView;

  constructor() {
    this.content = new InitView();
    this.element = this.content.element;
  }

  addHandlers() {
    this.content.onGoButtonClick = (level: string) => {
      Application.loadData(level);
    }

  }
}
