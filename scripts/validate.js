//const formElement = document.querySelector(".popup__form"); 

const validationSelectors = {
  formSelector: '.popup__form', //validationSelectors.formSelector
  inputSelector: '.popup__form-input',  //validationSelectors.inputSelector
  submitButtonSelector: '.button_type_save',   //validationSelectors.submitButtonSelector
  inactiveButtonClass: 'button_type_save_inactive',  //validationSelectors.inactiveButtonClass
  inputErrorClass: 'popup__form-input_type_error',  //validationSelectors.inputErrorClass
  errorClass: 'popup__span-error_active'  //validationSelectors.errorClass
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationSelectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSelectors.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationSelectors.inputErrorClass);
  errorElement.classList.remove(validationSelectors.errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationSelectors.inputSelector)); 
  const buttonElement = formElement.querySelector(validationSelectors.submitButtonSelector); 
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault()});
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSelectors.inactiveButtonClass); 
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    buttonElement.classList.remove(validationSelectors.inactiveButtonClass); 
    buttonElement.removeAttribute("disabled", "disabled");
  }
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationSelectors.formSelector));  //------------> не работает, если указать вместо класса validationSelectors.formSelector
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
    });
};

enableValidation(validationSelectors);  

