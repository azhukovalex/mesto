const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const profileName = document.querySelector(".profile__title");
const profileProfession = document.querySelector(".profile__subtitle");
const profileEditButton = document.querySelector(".button_type_edit");
const popupEdit = document.querySelector(".popup-edit");
const popupInputName = document.querySelector("#input-name");
const popupInputProfession = document.querySelector("#input-profession");
const buttonAddPlace = document.querySelector(".button_type_add");
const cardList = ".card-list";
const popupAddPlace = document.querySelector(".popup-place");
const popupImage = document.querySelector(".popup-image");
const templateCards = "#template-cards";
const ESCAPE_KEY = "Escape";



const settingsValidation = {
  formSelector: ".popup__form", //validationSelectors.formSelector
  inputSelector: ".popup__form-input", //validationSelectors.inputSelector
  submitButtonSelector: ".button_type_save", //validationSelectors.submitButtonSelector
  inactiveButtonClass: "button_type_save_inactive", //validationSelectors.inactiveButtonClass
  inputErrorClass: "popup__form-input_type_error", //validationSelectors.inputErrorClass
  errorClass: "popup__span-error_active", //validationSelectors.errorClass
};

export {
  ESCAPE_KEY,
  initialCards,
  profileName,
  profileProfession,
  profileEditButton,
  popupEdit,
  popupInputName,
  popupInputProfession,
  buttonAddPlace,
  cardList,
  popupAddPlace,
  popupImage,
  templateCards,
  settingsValidation,

};

