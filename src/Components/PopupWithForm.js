

import  Popup  from "./Popup.js";

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

  _setEventListeners() {
    super._setEventListeners();
    this._popupElement
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submit(this._getInputValues());
        this.close();
      });
  }

  cleanError() { //Удалить здесь, и сделать похожий функц. в FormValidator
    const buttonSave = this._popupElement.querySelector(".button_type_save");
    this._popupElement
      .querySelectorAll(".popup__span-error")
      .forEach((span) => {
        span.classList.remove("popup__span-error_active"); 
        span.textContent = "";
      });
    this._popupElement
      .querySelectorAll(".popup__form-input")
      .forEach((input) => {
        if (!input.value) {
          
          buttonSave.classList.add("button_type_save_inactive"); 
          buttonSave.setAttribute("disabled", "true");
        } else {
          buttonSave.classList.remove("button_type_save_inactive"); 
          buttonSave.removeAttribute("disabled");
        }
        input.classList.remove("popup__form-input_type_error"); 
      });
  }
}
