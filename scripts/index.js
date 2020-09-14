import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const closePopupButton = document.querySelector('.button_type_close');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup-edit');
const popupInputName = document.querySelector('#input-name');
const popupInputProfession = document.querySelector('#input-profession');
const popupNameForm = document.querySelector('#name-form');
const buttonAddPlace = document.querySelector('.button_type_add');
const cardList = document.querySelector('.card-list');
const popupAddPlace = document.querySelector('.popup-place');
const popupInputPlace = document.querySelector('#input-place');
const popupInputLink = document.querySelector('#input-link');
const closePopupAdd = document.querySelector('#close-add');
const popupPlaceForm = document.querySelector('#place-form');
export const popupImage = document.querySelector('.popup-image');
const closePopupImage = document.querySelector('#close-image');
const ESCAPE_KEY = 'Escape';

function clearInputCardsForm() {//функция отчистки инпутов формы карточек 
  popupInputLink.value = '';
  popupInputPlace.value = '';
}

export function openPopup(evt) {
  evt.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupEsc);
}

function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupEsc);
}

function closePopupEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === ESCAPE_KEY) {
    closePopup(popupOpened);
  }
}

function closePopupOverlay(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popupOpened);
  }
}

function fillProfileInfo() {
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
  validation();
  openPopup(popupEdit);
}

function handleSubmitForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup(popupEdit);
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardList = document.querySelector('.card-list');
  const cardData = {
    link: popupInputLink.value,
    name: popupInputPlace.value
  }
  const card = new Card(cardData, ".template-cards");
  popupInputLink.value = '';
  popupInputPlace.value = '';
  cardList.prepend(card.generateCard());
  closePopup(popupAddPlace);
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template-cards");
  const cardElement = card.generateCard();
  cardList.append(cardElement);
});

function validation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((form) => {
    const formValidator = new FormValidator({
      formSelector: '.popup__form', //validationSelectors.formSelector 
      inputSelector: '.popup__form-input',  //validationSelectors.inputSelector 
      submitButtonSelector: '.button_type_save',   //validationSelectors.submitButtonSelector 
      inactiveButtonClass: 'button_type_save_inactive',  //validationSelectors.inactiveButtonClass 
      inputErrorClass: 'popup__form-input_type_error',  //validationSelectors.inputErrorClass 
      errorClass: 'popup__span-error_active'  //validationSelectors.errorClass 
    }, form)
    formValidator.enableValidation();
  })
}

validation();

profileEditButton.addEventListener('click', fillProfileInfo);
closePopupButton.addEventListener('click', () => closePopup(popupEdit));

buttonAddPlace.addEventListener('click', () => {
  clearInputCardsForm();
  validation();
  openPopup(popupAddPlace);
});
closePopupAdd.addEventListener('click', () => closePopup(popupAddPlace));

closePopupImage.addEventListener('click', () => closePopup(popupImage));

popupPlaceForm.addEventListener('submit', handleSubmitCard);
popupNameForm.addEventListener('submit', handleSubmitForm);
document.addEventListener('mousedown', closePopupOverlay); 