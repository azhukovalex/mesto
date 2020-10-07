import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    const figurePlaceImage = this._popupSelector.querySelector('.figure-place__image');
    const figurePlaceCaption = this._popupSelector.querySelector('.figure-place__image-caption');
    figurePlaceImage.src = data.link;
    figurePlaceCaption.textContent = data.name;
    super.open();
  }
}

//Збс