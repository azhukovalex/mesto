import { openPopup, popupImage } from './index.js'

export class Card {  //класс создания карточек
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _deleteCard(evt) {
    evt.target.closest('.card').remove() // УДАЛЯШКА
  }

  _liked(evt) {
    evt.target.classList.toggle('button_type_like-liked')  // ЛАЙК 
  }

  _openPopupImage(evt) {
    const popupFigureImage = document.querySelector('.figure-place__image');
    const popupFigureCaption = document.querySelector('.figure-place__image-caption');
    popupFigureCaption.textContent = evt.target.alt;
    popupFigureImage.src = evt.target.src;
    popupFigureImage.alt = evt.target.src;
    openPopup(popupImage);
  }

  _setEventListeners() {
    this._element.querySelector('.button_type_delete').addEventListener('click', (evt) => {
      this._deleteCard(evt)
    });
    this._element.querySelector('.button_type_like').addEventListener('click', (evt) => {
      this._liked(evt)
    });
    this._element.querySelector('.card__image').addEventListener('click', (evt) => {
      this._openPopupImage(evt)
    });

  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}






