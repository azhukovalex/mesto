const initialCards = [
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> develop
  }
];

const profileName = document.querySelector(".profile__title");
const profileProfession = document.querySelector(".profile__subtitle");
const profileEditButton = document.querySelector(".button_type_edit");
<<<<<<< HEAD
const cardList = document.querySelector(".card-list");
const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");

const buttonAddPlace = document.querySelector(".button_type_add"); /*кнопка добавления фото*/



=======

const buttonAddPlace = document.querySelector(".button_type_add"); /*кнопка добавления фото*/
const cardList = document.querySelector(".card-list");
>>>>>>> develop


const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");

const popupEdit = document.querySelector(".popup-edit"); /* попап редактирования */
const popupInputName = document.querySelector("#input-name");
const popupInputProfession = document.querySelector("#input-profession");

const popupAddPlace = document.querySelector(".popup-place"); /*попап на добавление картинки*/
const popupInputPlace = document.querySelector("#input-place"); /*форма названия места */
const popupInputLink = document.querySelector("#input-link"); /*форма вставки ссылки*/
<<<<<<< HEAD
const buttonCloseAdd = document.querySelector("#close-add"); /* закрыть попап добавления*/

const popupImage = document.querySelector(".popup-image"); /*попап открытия картинки с описанием*/
=======
const popupCloseAdd = document.querySelector("#close-add"); /*закрыть попап добавления */

const popupPlaceForm = document.querySelector("#place-form");

const popupImage = document.querySelector(".popup-image"); /*попап открытия картинки с описанием*/
const popupFigurePlace = document.querySelector(".figure-place"); /*figure открытого попапа картинки с описанием */
const popupFigureImage = document.querySelector(".figure-place__image"); /*картинка попапа с описанием */
const popupFigureCaption = document.querySelector(".figure-place__image-caption"); /*описание картинки попапа */
const popupCloseImage = document.querySelector("#close-image"); /*кнопка закрытия попапа картинки с описанием */
>>>>>>> develop

const popupSaveButton = document.querySelector(".button_type_save");
const popupCloseButton = document.querySelector(".button_type_close");

function createElement(card) {
<<<<<<< HEAD
  const cardsTemplate = document.querySelector('#template-cards').content; /*template template-cards*/
  const cardElement = cardsTemplate.cloneNode(true);
  const buttonLike = cardElement.querySelector(".button_type_like"); /*кнопка Лайк*/
  const buttonDelete = cardElement.querySelector(".button_type_delete"); /*кнопка удаления карточки*/
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__title').textContent = card.name;
  buttonLike.addEventListener('click', liked);
  buttonDelete.addEventListener('click', deleteCard);
  return cardElement;
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

function liked(evt) {
  evt.target.classList.toggle('button_type_like-liked');
};

=======
  const cardsTemplate = document.querySelector("#template-cards").content; 
  const cardElement = cardsTemplate.cloneNode(true);
  const buttonLike = cardElement.querySelector(".button_type_like"); /*кнопка Лайк*/
  const buttonDelete = cardElement.querySelector(".button_type_delete"); /*кнопка удаления карточки*/
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").alt = card.name;
  buttonLike.addEventListener("click", liked);
  buttonDelete.addEventListener("click", deleteCard);
  cardElement.querySelector(".card__image").addEventListener("click", function () {popupOpenImage(card)
  });
  return cardElement;
}

function popupOpenImage(card) {
  popupFigureCaption.textContent = card.name; 
  popupFigureImage.src = card.link; 
  popupOpen(popupImage); 
} 

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

function liked(evt) {
  evt.target.classList.toggle("button_type_like-liked")
}

>>>>>>> develop
function addElement(initialCards) {
  initialCards.forEach((card) => {
    cardList.append(createElement(card));
  });
<<<<<<< HEAD
}

addElement(initialCards);


function cardSubmitHandler(evt) {
  evt.preventDefault();
  const card = {
    link: popupInputLink.value,
    name: popupInputPlace.value
  };
  cardList.prepend(createElement(card));
  popupClose();
}


function popupOpen(popup) {
  popup.classList.add("popup_opened");
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function popupClose(popup) {
  popup.classList.remove("popup_opened");
=======
>>>>>>> develop
}

addElement(initialCards);

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const card = {
    link: popupInputLink.value,
    name: popupInputPlace.value
    }
  cardList.prepend(createElement(card));
  popupClose(popupAddPlace);
}

function popupOpen(popup) {
  popup.classList.add("popup_opened");
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}


function popupClose(popup) {
  popup.classList.remove("popup_opened");
}


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
<<<<<<< HEAD
  popupClose();
}

profileEditButton.addEventListener("click", () => popupOpen(popup));
popupCloseButton.addEventListener("click", () => popupClose(popup));
popupContainer.addEventListener("submit", formSubmitHandler);

buttonAddPlace.addEventListener("click", () => popupOpen(popupAddPlace)); /* слушатель на кнопку Добавить*/
buttonCloseAdd.addEventListener("click", () => popupClose(popupAddPlace)); /* слушатель на кнопку Закрыть*/
popupAddPlace.addEventListener("submit", cardSubmitHandler);

=======
  popupClose(popup);
}


profileEditButton.addEventListener("click",() => popupOpen(popup));
popupCloseButton.addEventListener("click", () => popupClose(popup));
popupContainer.addEventListener("submit", formSubmitHandler);

buttonAddPlace.addEventListener("click", () => popupOpen(popupAddPlace)); 
popupCloseAdd.addEventListener("click", () => popupClose(popupAddPlace));
popupPlaceForm.addEventListener("submit", cardSubmitHandler);

popupCloseImage.addEventListener("click", () => popupClose(popupImage));
>>>>>>> develop
