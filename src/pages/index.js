import {Card} from '../Components/Card.js'
import {FormValidator} from '../Components/FormValidator.js'
import Section from '../Components/Section.js'
import {PopupWithImage} from '../Components/PopupWithImage.js'
import PopupWithForm from '../Components/PopupWithForm.js'
import UserInfo from '../Components/UserInfo.js'

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
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup-edit');
const popupInputName = document.querySelector('#input-name');
const popupInputProfession = document.querySelector('#input-profession');
const buttonAddPlace = document.querySelector('.button_type_add');
const cardList = '.card-list';
const popupAddPlace = document.querySelector('.popup-place');
export const popupImage = document.querySelector('.popup-image');
const templateCards = '#template-cards';
const userInfo = new UserInfo({
  userName: profileName,
  userProfession: profileProfession
});
const popupProfileForm = new PopupWithForm(
  {submit: (item) => userInfo.setUserInfo(item)},
  popupEdit
);

const openProfile = () => {
  const profileInformation = userInfo.getUserInfo();
  popupInputName.value = profileInformation.name;
  popupInputProfession.value = profileInformation.profession;
  popupProfileForm.cleanError();
  popupProfileForm.open();  //или

}
profileEditButton.addEventListener('click', openProfile);

const popupWithImage = new PopupWithImage(popupImage);
const defaultArrPictures = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card({
          data: item,
          handleCardClick: () => {
            popupWithImage.open(item)
          }
        },
        templateCards
      );
      const cardElement = card.generateCard();
      defaultArrPictures.addItem(cardElement);

    }
  },
  cardList
);

const popupPlaces = new PopupWithForm(
  {
    submit: (item) => {
      const card = new Card({
          data: item,
          handleCardClick: () => {
            popupWithImage.open(item)
          }
        },
        templateCards
      );
      const cardElement = card.generateCard();
      defaultArrPictures.addItem(cardElement);
    }
  },
  popupAddPlace
);

const openPlaceForm = () => {
  popupPlaces.cleanError();
  popupPlaces.open()
}

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
defaultArrPictures.renderItems(initialCards);

buttonAddPlace.addEventListener('click', openPlaceForm);



