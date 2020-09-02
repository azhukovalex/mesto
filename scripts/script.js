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

const popupContainer = document.querySelector(".popup__container");

const closePopupButton = document.querySelector(".button_type_close");

const profileName = document.querySelector(".profile__title");
const profileProfession = document.querySelector(".profile__subtitle");
const profileEditButton = document.querySelector(".button_type_edit");
const popupEdit = document.querySelector(".popup-edit");
const popupInputName = document.querySelector("#input-name");
const popupInputProfession = document.querySelector("#input-profession");

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

function openPopup(elem) {
  elem.classList.add("popup_opened");
  document.addEventListener("keyup", closePopupEsc);
  document.addEventListener("mousedown", closePopupOverlay);
}

function closePopup(elem) {
  elem.classList.remove("popup_opened");
  document.removeEventListener("keyup", closePopupEsc);
  document.removeEventListener("mousedown", closePopupOverlay);
}



function closePopupEsc(evt) {
  const escCode = 27;
  if (evt.keyCode === escCode) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function fillProfileInfo() {
  openPopup(popupEdit);
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function handleSubmitForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup(popupEdit);
}



function createElement(card) {
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

function openPopupImage(card) {
  popupFigureCaption.textContent = card.name;
  popupFigureImage.src = card.link;
  popupFigureImage.alt = card.name;
  openPopup(popupImage);
}

profileEditButton.addEventListener("click", () => fillProfileInfo(popupEdit));
closePopupButton.addEventListener("click", () => closePopup(popupEdit));
popupContainer.addEventListener("submit", handleSubmitForm);

buttonAddPlace.addEventListener("click", () => openPopup(popupAddPlace));
closePopupAdd.addEventListener("click", () => closePopup(popupAddPlace));
popupPlaceForm.addEventListener("submit", handleSubmitCard);

closePopupImage.addEventListener("click", () => closePopup(popupImage));

