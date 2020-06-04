import ErrorView from './errorView';

export default class ErrorScreen {
  element: HTMLElement;
  content: ErrorView;


  constructor(public error: Error) {
    this.content = new ErrorView(error);
    this.element = this.content.element;
  }

}