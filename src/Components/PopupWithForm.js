import {Popup} from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({submit}, popupSelector) {
    super(popupSelector);
    this._submit = submit;
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__form-input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.querySelector('.popup__form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
      this.close();
    }, {once: true});
  }

  cleanError() {
    const buttonSave = this._popupSelector.querySelector('.button_type_save');
    this._popupSelector.querySelectorAll(".popup__span-error").forEach((span) => {
      span.classList.remove("popup__span-error_active");
      span.textContent = "";
    });
    this._popupSelector.querySelectorAll(".popup__form-input").forEach((input) => {
      if (!input.value) {
        buttonSave.classList.add('button_type_save_inactive');
        buttonSave.setAttribute('disabled', 'true');
      } else {
        buttonSave.classList.remove('button_type_save_inactive');
        buttonSave.removeAttribute('disabled');
      }
      input.classList.remove("popup__form-input_type_error");
    });
  }

}