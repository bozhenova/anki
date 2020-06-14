import ModalView from "./modalView";
import Application from "../../application";

export default class ModalScreen {
  element: HTMLElement;
  content: ModalView;

  constructor() {
    this.content = new ModalView();
    this.element = this.content.element;
  }

  confirm() {
    this.content.onConfirm = () => {
      // localStorage.setItem(key: 'kanji', value: '')
      Application.showInitScreen();
    }
  }

  cancel() {
    this.content.onCancel = () => Application.closeModal();
  }

  addHandlers() {
    this.confirm();
    this.cancel();
  }
}
