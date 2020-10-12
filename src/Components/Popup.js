import { ESCAPE_KEY } from '../utils/Constants.js'

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = (evt) => {
      if (evt.key === ESCAPE_KEY) {
        this.close();
      }
    }
    this._handleOverlayClick = (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    }
    this._setEventListeners();
  }
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener("keyup", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClick);
  }
  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClick);
  }
  _setEventListeners() {
    this._popupElement.querySelector(".button_type_close").addEventListener('click', () => this.close());
  }
}

//переделать
