// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.
var Card = require('./card');

class CardGame{

  checkForAce(card){
    if(card.value === 1){
      return true;
    }else{
      return false;
    }
  }

  highestCard(card1,card2){
    if(card1.value > card2.value){
      return card1;
    }
    else{
      return card2;
    }
   }

  cardsTotal(cards){
    let total = 0;
    for(let card of cards){
       total += card.value;
    }
    return "You have a total of " + total;
  }
}

module.exports = CardGame;
