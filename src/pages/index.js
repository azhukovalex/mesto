import './index.css'; 
import Card from "../Components/Card.js";
import FormValidator from "../Components/FormValidator.js";
import Section from "../Components/Section.js";
import { PopupWithImage } from "../Components/PopupWithImage.js";
import PopupWithForm from "../Components/PopupWithForm.js";
import UserInfo from "../Components/UserInfo.js";
import {
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
} from "../utils/Constants.js";

const userInfo = new UserInfo({
  userName: profileName,
  userProfession: profileProfession,
});
const popupProfileForm = new PopupWithForm(
  { submit: (item) => userInfo.setUserInfo(item) },
  popupEdit
);

const openProfile = () => {
  const profileInformation = userInfo.getUserInfo();
  popupInputName.value = profileInformation.name;
  popupInputProfession.value = profileInformation.profession;
  const formEditValidator = new FormValidator(settingsValidation, popupEdit);
  formEditValidator.enableValidation();
  popupProfileForm.open();
};

profileEditButton.addEventListener("click", openProfile);

const popupWithImage = new PopupWithImage(popupImage);
const getNewCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        popupWithImage.open(item);
      },
    },
    templateCards
  );
  return card.generateCard();
};
const defaultArrPictures = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      defaultArrPictures.addItem(getNewCard(item));
    },
  },
  cardList
);
const popupPlaces = new PopupWithForm(
  {
    submit: (item) => {
      defaultArrPictures.addItem(getNewCard(item));
    },
  },
  popupAddPlace
);

const openPlaceForm = () => {
  const formCardValidator = new FormValidator(
    settingsValidation,
    popupAddPlace
  );
  formCardValidator.enableValidation();
  popupPlaces.open();
};

defaultArrPictures.renderItems(initialCards);

buttonAddPlace.addEventListener("click", openPlaceForm);
