const prepend = 'prepend';
const profileEditButton = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup-edit');

const buttonAddPlace = document.querySelector('.button_type_add');
const cardList = '.card-list';
const popupAddPlace = document.querySelector('.popup-place');
const popupImage = document.querySelector('.popup-image');
const templateCards = '#template-cards';
const ESCAPE_KEY = 'Escape';
const buttonEditAvatar = document.querySelector('.button_type_avatar'); //кнопка изменения аватара
const profileImage = document.querySelector('.profile__image'); //картинка аватара
const popupEditAvatar = document.querySelector('.popup-avatar'); // попап аватара
const popupInputAvatarLink = document.querySelector('#avatar-link');//ссылка аватара
const popupConfDelete = document.querySelector('.popup-delete'); //попап на удаление
const profileInfo = {
  profileTitle: document.querySelector('.profile__title'),
  profileSubtitle: document.querySelector('.profile__subtitle'),};
const settingsValidation = {
  formSelector: '.popup__form', //validationSelectors.formSelector
  inputSelector: '.popup__form-input', //validationSelectors.inputSelector
  submitButtonSelector: '.button_type_save', //validationSelectors.submitButtonSelector
  inactiveButtonClass: 'button_type_save_inactive', //validationSelectors.inactiveButtonClass
  inputErrorClass: 'popup__form-input_type_error', //validationSelectors.inputErrorClass
  errorClass: 'popup__span-error_active', //validationSelectors.errorClass
};

export {
  prepend,
  ESCAPE_KEY,
  profileInfo,
  profileEditButton,
  popupEdit,
  buttonAddPlace,
  cardList,
  popupAddPlace,
  popupImage,
  templateCards,
  settingsValidation,
  buttonEditAvatar,
  popupEditAvatar,
  profileImage,
  popupConfDelete,
  popupInputAvatarLink,

};

