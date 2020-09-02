const formElement = document.querySelector(".popup__form");

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__form-input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__span-error_active");
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__form-input_type_error");
  errorElement.classList.remove("popup__span-error_active");
  errorElement.textContent = "";
};


const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(`.popup__form-input`));
  const buttonElement = formElement.querySelector(".button_type_save");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_type_save_inactive");
    buttonElement.setAttribute("disabled", "disabled"); // добавить атрибут disabled
  } else {
    buttonElement.classList.remove("button_type_save_inactive");
    buttonElement.removeAttribute("disabled", "disabled"); //убрать атрибут disabled
  }
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();




