export class Card {  //класс создания карточек
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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

  _deleteCard() {
    //evt.target.closest('.card').remove() // УДАЛЯШКА
    this._element.remove();
    this._element = null;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('button_type_like-liked')  // ЛАЙК
  }

  _setEventListeners() {
    this._element.querySelector('.button_type_delete').addEventListener('click', (evt) => {
      this._deleteCard(evt)
    });
    this._element.querySelector('.button_type_like').addEventListener('click', (evt) => {
      this._likeCard(evt)
    });
    this._element.querySelector('.card__image').addEventListener('click', (evt) => {
      this._handleCardClick(evt)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardImage = this._element.querySelector('.card__image');
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._element;
  }
}




