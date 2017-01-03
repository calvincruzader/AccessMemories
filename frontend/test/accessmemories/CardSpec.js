import Card from '../../src/submodules/accessmemories/classes/Card.js'
import SampleCardData from './utils/dataFactories/CardDataFactory.js';

describe("Card", () => {
  let card, cardData

  beforeEach(() => {
    cardData = SampleCardData({front: "this is the front", back: "this is the back", dateCreated: new Date()});
    card = new Card(cardData);
  });

  it("make sure the cards have a front and back", () => {
    expect(cardData.front).toEqual(card.front);
    expect(cardData.back).toEqual(card.back);
    expect(cardData.dateCreated).toEqual(card.dateCreated);

  });
});
