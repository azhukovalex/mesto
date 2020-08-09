let ProfileName = document.querySelector(".profile__title");
let ProfileProfession = document.querySelector(".profile__subtitle");
let ProfileEditButton = document.querySelector(".button_type_edit");

let Popup = document.querySelector(".popup");
let PopupInputName = document.querySelector("#input-name");
let PopupInputProfession = document.querySelector("#input-profession");
let PopupSaveButton = document.querySelector(".button_type_save");
let PopupCloseButton = document.querySelector(".button_type_close");
let PopupContainer = document.querySelector(".popup__container");

function popupOpen() {
  Popup.classList.add("popup_opened");
  PopupInputName.value = ProfileName.textContent;
  PopupInputProfession.value = ProfileProfession.textContent;
}

function popupClose() {
  Popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  ProfileName.textContent = PopupInputName.value;
  ProfileProfession.textContent = PopupInputProfession.value;
  popupClose();
}

ProfileEditButton.addEventListener("click", popupOpen);
PopupCloseButton.addEventListener("click", popupClose);
PopupContainer.addEventListener("submit", formSubmitHandler);
