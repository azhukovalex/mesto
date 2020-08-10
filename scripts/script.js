let profileName = document.querySelector(".profile__title");
let profileProfession = document.querySelector(".profile__subtitle");
let profileEditButton = document.querySelector(".button_type_edit");

let popup = document.querySelector(".popup");
let popupInputName = document.querySelector("#input-name");
let popupInputProfession = document.querySelector("#input-profession");
let popupSaveButton = document.querySelector(".button_type_save");
let popupCloseButton = document.querySelector(".button_type_close");
let popupContainer = document.querySelector(".popup__container");

function popupOpen() {
  popup.classList.add("popup_opened");
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  popupClose();
}

profileEditButton.addEventListener("click", popupOpen);
popupCloseButton.addEventListener("click", popupClose);
popupContainer.addEventListener("submit", formSubmitHandler);
