const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];
const buttonSave = document.querySelector(".button_type_save");
const closePopupButton = document.querySelector(".button_type_close");
const buttonSaveProfile = document.querySelector('#buttonSaveProfile')
const buttonSaveCard = document.querySelector('#buttonSaveCard')
const profileName = document.querySelector(".profile__title");
const profileProfession = document.querySelector(".profile__subtitle");
const profileEditButton = document.querySelector(".button_type_edit");
const popupEdit = document.querySelector(".popup-edit");
const popupInputName = document.querySelector("#input-name");
const popupInputProfession = document.querySelector("#input-profession");
const popupNameForm = document.querySelector("#name-form");
const buttonAddPlace = document.querySelector(".button_type_add");
const cardList = document.querySelector(".card-list");
const popupAddPlace = document.querySelector(".popup-place");
const popupInputPlace = document.querySelector("#input-place");
const popupInputLink = document.querySelector("#input-link");
const closePopupAdd = document.querySelector("#close-add");
const popupPlaceForm = document.querySelector("#place-form");
const popupImage = document.querySelector(".popup-image");
const popupFigureImage = document.querySelector(".figure-place__image");
const popupFigureCaption = document.querySelector(".figure-place__image-caption");
const closePopupImage = document.querySelector("#close-image");
const ESCAPE_KEY = 'Escape';

function cleanError(form) { // функция обнуления ошибок
  form.querySelectorAll(".popup__form-input").forEach((input) => {
    input.classList.remove("popup__form-input_type_error"); //удаляем с инпут модификатор с ошибкой
  });
  form.querySelectorAll(".popup__span-error").forEach((span) => {
    span.classList.remove("popup__span-error_active"); //удаляем со спан модификатор с ошибкой
    span.textContent = "";
  });  
  buttonSave.removeAttribute("disabled", "disabled"); //убрать атрибут disabled
}


function clearInputCardsForm() {//функция отчистки инпутов формы карточек
  popupInputLink.value = "";
  popupInputPlace.value = "";
}

function openPopup(elem) {//функция открытия всех попап
  elem.classList.add("popup_opened");
  document.addEventListener("keyup", closePopupEsc);
  document.addEventListener("mousedown", closePopupOverlay);
}

function closePopup(elem) {//функция закрытия всех попап
  elem.classList.remove("popup_opened");
  document.removeEventListener("keyup", closePopupEsc);
  document.removeEventListener("mousedown", closePopupOverlay);
}

function closePopupEsc(evt) {//функция закрытия по клику на ESCAPE
  if (evt.key === ESCAPE_KEY) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function closePopupOverlay(evt) {//функция закрытия по клику на оверлей
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function fillProfileInfo() {
  openPopup(popupEdit);
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;  
  cleanError(popupNameForm);  
  buttonSaveProfile.classList.remove('button_type_save_inactive');  
}

function handleSubmitForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup(popupEdit);
}

function createElement(card) {//функция создания карточки
  const cardsTemplate = document.querySelector("#template-cards").content;
  const cardElement = cardsTemplate.cloneNode(true);
  const buttonLike = cardElement.querySelector(".button_type_like");
  const buttonDelete = cardElement.querySelector(".button_type_delete");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = card.link;
  cardTitle.textContent = card.name;
  cardImage.alt = card.name;
  buttonLike.addEventListener("click", liked);
  buttonDelete.addEventListener("click", deleteCard);
  cardImage.addEventListener("click", function () {
    openPopupImage(card)
  });
  return cardElement;
}

function addElement(initialCards) {
  initialCards.forEach((card) => {
    cardList.append(createElement(card));
  });
}

addElement(initialCards);

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

function liked(evt) {
  evt.target.classList.toggle("button_type_like-liked")
}

function openPopupImage(card) {
  popupFigureCaption.textContent = card.name;
  popupFigureImage.src = card.link;
  popupFigureImage.alt = card.name;
  openPopup(popupImage);
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const card = {
    link: popupInputLink.value,
    name: popupInputPlace.value
  }
  popupInputLink.value = "";
  popupInputPlace.value = "";
  cardList.prepend(createElement(card));
  closePopup(popupAddPlace);
}

profileEditButton.addEventListener("click", fillProfileInfo);
closePopupButton.addEventListener("click", () => closePopup(popupEdit));

buttonAddPlace.addEventListener("click", () => {
  buttonSaveCard.classList.add('button_type_save_inactive');
  clearInputCardsForm();
  cleanError(popupPlaceForm);
  openPopup(popupAddPlace);
  });
closePopupAdd.addEventListener("click", () => closePopup(popupAddPlace));

closePopupImage.addEventListener("click", () => closePopup(popupImage));

popupPlaceForm.addEventListener("submit", handleSubmitCard);
popupNameForm.addEventListener("submit", handleSubmitForm);





