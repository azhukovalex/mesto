import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submit }, popupElement) {
    super(popupElement);
    this._submit = submit;
  }
  close() {
    super.close();
    this._popupElement.querySelector(".popup__form").reset();
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(
      ".popup__form-input"
    );
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submit(this._getInputValues());
      });
  }

}

