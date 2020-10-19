import  Popup  from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._figurePlaceImage = this._popupElement.querySelector('.figure-place__image');
    this._figurePlaceCaption = this._popupElement.querySelector('.figure-place__image-caption');
  }

  open(data) {
    this._figurePlaceImage.src = data.link;
    this._figurePlaceImage.alt = `${data.name}`;
    this._figurePlaceCaption.textContent = data.name;
    super.open();
  }
}

