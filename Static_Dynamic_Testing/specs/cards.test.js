const CardGame = require('../testing_task_2');
var Card = require('../card');

describe('Card Game', () => {
  const cardGame = new CardGame()

  const aceClubs = new Card ('clubs', 1);
  const fourDiamonds = new Card ('diamond', 4);
  const sevenSpades = new Card ('spades', 7);
  const tenHearts = new Card ('hearts', 10);

  const twoCards = [fourDiamonds, sevenSpades];
  const fourCards = [aceClubs, fourDiamonds, sevenSpades, tenHearts];


  test('the game can detect an Ace', () => {
    expect(cardGame.checkForAce(aceClubs)).toBe(true);
  });

  test('the game can detect not an Ace', () => {
    expect(cardGame.checkForAce(fourDiamonds)).toBe(false);
  });

  test('the game can compare two cards', () => {
    expect(cardGame.highestCard(tenHearts,sevenSpades)).toBe(tenHearts);
  });

  test('the game can compare two cards', () => {
    expect(cardGame.highestCard(sevenSpades, tenHearts)).toBe(tenHearts);
  });

  test ('the game can sum up two cards', () =>{
    expect(cardGame.cardsTotal(twoCards)).toEqual('You have a total of 11');
  });

  test('the game can sum up more than two cards',()=>{
    expect(cardGame.cardsTotal(fourCards)).toEqual('You have a total of 22');
  })
})
