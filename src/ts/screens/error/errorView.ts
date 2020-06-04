import AbstractView from '../../abstractView';

export default class ErrorView extends AbstractView {

  constructor(public error: Error) {
    super();
  }

  get template() {
    return `<section class="modal">
        <div class="modal__inner">
          <h2 class="modal__title">Error!</h2>
          <p class="modal__text modal__text--error">
            Status: ${this.error.message} Please, try later.
          </p>
        </div>
      </section>`;
  }

}