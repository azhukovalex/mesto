const ESCAPE_KEY = 'Escape';

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _closePopupOverlay(evt) {
    //const popupOpened = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    //const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === ESCAPE_KEY) {
      this.close();
    }
  }

  setEventListeners() {
    this._buttonClose = this._popupSelector.querySelector(".button_type_close");
    this._buttonClose.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener('keyup', (evt) => {
      this._handleEscClose(evt)
    });
    document.addEventListener('mousedown', (evt) => {
      this._closePopupOverlay(evt)
    });
  }

}

