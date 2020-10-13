import { ESCAPE_KEY } from '../utils/Constants.js'

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this.setEventListeners();
  }
  _handleEscClose(evt) {
    if (evt.key === ESCAPE_KEY) {
      this.close();
    }
  }
  
  _handleOverlayClick(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener("keyup", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClick);
  }
  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  setEventListeners() {
    this._popupElement.querySelector(".button_type_close").addEventListener('click', () => this.close());
  }
}


