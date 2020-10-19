export default class Card {
  constructor({ data, handleCardClick, handleCardDelete, handleCardLike }, cardSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner._id;
    this._userId = userId;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;
    this._cardSelector = cardSelector;
    this._clickLike = () => {
      this._handleCardLike({
        id: this._id,
        like: this._element.querySelector('.button_type_like').classList.contains('button_type_like-liked'),
        likeSum: this._element.querySelector('.card__like-counter')
      });
    };
  }


  _getTemplate() { //разметка и клон
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement; // вернуть
  }

  _checkCardOwner(_owner) {
    if (this._owner === this._userId) {
      return;
    } else {
      this._element.querySelector('.button_type_delete').style.display = 'none';
    }
  }

  _likeCardOwner(_id) {
    if (this._likes.some((user) =>
      (user._id === this._userId))) {
      this._element.querySelector('.button_type_like').classList.add('button_type_like-liked');
    }
  }

  cardLike(sum) { //лайки
    this._element.querySelector(".button_type_like").classList.toggle("button_type_like-liked");
    if (sum === 0) {
      this._element.querySelector('.card__like-counter').style.display = 'none';
    } else {
      this._element.querySelector('.card__like-counter').style.display = 'block';
      this._element.querySelector('.card__like-counter').textContent = sum;
    }
  }

  cardDelete() { 
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element
      .querySelector(".button_type_like")
      .addEventListener("click", () => {
        this._clickLike();
      });

    this._element
      .querySelector(".button_type_delete")
      .addEventListener("click", () => {
        this._handleCardDelete()
      });


    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImg = this._element.querySelector(".card__image");
    this._element.querySelector(".card__title").textContent = this._name;
    cardImg.src = this._link;
    cardImg.alt = this._name;
    this._checkCardOwner(this._owner)
    this._likeCardOwner(this._id)
    if (this._likes.length === 0) {
      this._element.querySelector('.card__like-counter').style.display = 'none';
    }
    this._element.querySelector('.card__like-counter').textContent = this._likes.length;
    return this._element;
  }
}





