export default class Card {
  constructor(cardData) {
    this.front = cardData.front;
    this.back = cardData.back;
    this.id = cardData.id;
    this.dateCreated = cardData.dateCreated;
  }

  getDateCreated() {
    return this.dateCreated;
  }

  getFront() {
    return this.front;
  }

  getBack() {
    return this.back;
  }

  getId() {
    return this.id;
  }
}
