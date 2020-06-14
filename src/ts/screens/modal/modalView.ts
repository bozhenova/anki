import AbstractView from "../../abstractView";

export default class ModalView extends AbstractView {
  constructor() {
    super();
  }

  get template(): string {
    return `<section class="modal">
        <form class="modal__inner">
          <button class="modal__close" type="button">
            <span class="visually-hidden">Close</span>
          </button>
          <h2 class="modal__title">Confirmation</h2>
          <p class="modal__text">Are you sure you want to exit?</p>
          <div class="modal__button-wrapper">
            <button class="modal__button button" data-choice="ok">Ок</button>
            <button class="modal__button button" data-choice="cancel">Cancel</button>
          </div>
        </form>
      </section>`;
  }

  onConfirm() { }

  onCancel() { }

  bind() {
    const confirmButton = this.element.querySelector(`[data-choice="ok"]`);
    const cancelButton = this.element.querySelector(`[data-choice="cancel"]`);
    const closeButton = this.element.querySelector(".modal__close");

    const cancelHandler = (e: Event) => {
      e.preventDefault();
      this.onCancel();
    };

    cancelButton.addEventListener(`click`, cancelHandler);
    closeButton.addEventListener(`click`, cancelHandler);

    confirmButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onConfirm();
    });
  }
}
