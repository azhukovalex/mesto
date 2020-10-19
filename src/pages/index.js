//import './index.css';
import Card from "../Components/Card.js";
import FormValidator from "../Components/FormValidator.js";
import Section from "../Components/Section.js";
import { PopupWithImage } from "../Components/PopupWithImage.js";
import PopupWithForm from "../Components/PopupWithForm.js";
import UserInfo from "../Components/UserInfo.js";
import {

  //profileName,
  //profileProfession,
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
  buttonEditAvatar,
  popupEditAvatar,
  profileImage,
  profileInfo,
  popupConfDelete, ////////////
  popupInputAvatarLink,
  prepend
} from "../utils/Constants.js";

import Api from '../Components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: '998fe87c-1205-4216-8ac1-5bc50516f491',
    'Content-Type': 'application/json'
  }
});

const loading = (isLoading, form, defaultButtonText, loadingMessage) => {
  const currentButton = form.querySelector('.button_type_save');

  if (isLoading) {
    currentButton.textContent = loadingMessage;
  } else {
    currentButton.textContent = defaultButtonText;
  }
}

const formEditValidator = new FormValidator(settingsValidation, popupEdit);
const formCardValidator = new FormValidator(settingsValidation, popupAddPlace);
const formAvatarValidator = new FormValidator(settingsValidation, popupEditAvatar);



Promise.all([api.getUserInform(), api.getCards()]) //загрузка данных профиля
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    defaultCardList.renderItems(cards, user._id);
  })
  .catch((err) => {
    console.log(err);
  });

  const userInfo = new UserInfo(profileInfo,
    profileImage
  );


  const profileForm = new PopupWithForm({ //отправляем информацию, введенную пользоавателем на сервер
    submit: () => {
     loading(true, popupEdit, 'Сохранить', 'Сохранение...');
      api.updateProfileInfo(popupInputName.value, popupInputProfession.value)
        .then((result) => {
          userInfo.setUserInfo(result);
          profileForm.close();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
       .finally(() => {
          loading(false, popupEdit, 'Сохранить', 'Сохранение...');
      });
    }
  }, popupEdit);



const openProfile = () => {
  const infoAuthor = userInfo.getUserInfo();
  popupInputName.value = infoAuthor.name;
  popupInputProfession.value = infoAuthor.about;
  formEditValidator.checkOpenedPopup();
  formEditValidator.enableValidation();
  profileForm.open();

}



const popupWithImage = new PopupWithImage(popupImage);
let valueCard;
const fillCardValue = (object, className) => { //запись значений в текущую карточк
  valueCard = {
    object: object,
    class: className
  };
};

const popupAvatar = new PopupWithForm({ 
  submit: () => {
   loading(true, popupEditAvatar, 'Сохранить', 'Сохранение...');
    api.updateAvatar( popupInputAvatarLink.value)
      .then((item) => {
        userInfo.setUserAvatar(item);
      })
      .then(() => {
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
       .finally(() => {
        loading(false, popupEditAvatar, 'Сохранить', 'Сохранение...');
       });
  }
}, popupEditAvatar);

const deleteCardConfirm = new PopupWithForm({
  submit: () => {
    api.deleteCard(valueCard.object._id)
      .then(() => {
        valueCard.class.cardDelete();
        deleteCardConfirm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, popupConfDelete);

const cardForm = new PopupWithForm({
  submit: (item) => {
    loading(true, popupAddPlace, 'Создать', 'Создание...');
    api.createNewCard(item.name, item.link)
      .then((result) => {
        createCard(result, result.owner._id, prepend);
        cardForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loading(false, popupAddPlace, 'Создать', 'Создание...');
      });
  }
}, popupAddPlace);



const addLike = (object) => { //добавление лайка
  api.addLike(object)
    .then((result) => {
      valueCard.class.cardLike(result.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteLike = (object) => { //удаление лайка
  api.deleteLike(object)
    .then((result) => {
      valueCard.class.cardLike(result.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addCards = (card, position) => { //добавление карточки в DOM
  if (position === 'prepend') {
    defaultCardList.addItemPrepend(card);
  } else {
    defaultCardList.addItemAppend(card);
  }
};

const createCard = (item, userId, position) => { //создание карточки и добавление в разметку
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupWithImage.open(item);
    },
    handleCardLike: (cardObject) => {
      if (cardObject.like) {
        deleteLike(cardObject);
      } else {
        addLike(cardObject);
      }
      fillCardValue(item, card);
    },
    handleCardDelete: () => {
      deleteCardConfirm.open();
      fillCardValue(item, card);
    }
  }, templateCards, userId);
  const cardElement = card.generateCard();
  addCards(cardElement, position);
};

const defaultCardList = new Section({ //добавление матрицы карточек
  renderer: (item, userId) => {
    createCard(item, userId);
  }
}, cardList);

const openPlaceForm = () => {
  formCardValidator.checkOpenedPopup();
  formCardValidator.enableValidation();
  cardForm.open();
};

const openAvatarForm = () => { //аватар
  formAvatarValidator.checkOpenedPopup();
  formAvatarValidator.enableValidation();
  popupAvatar.open();
}

//defaultArrPictures.renderItems(initialCards);
buttonAddPlace.addEventListener('click', openPlaceForm);
buttonEditAvatar.addEventListener('click', openAvatarForm); //слуш. аватара
profileEditButton.addEventListener("click", openProfile);
