### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

```js
// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.

var card = require('./card');

class CardGame{

  checkforAce(card){
/* bad camelCase */
    if(card = 1){
/* is setting card to =1 and not comparing */
/* card is an object, need to address card.value */
      return true;
    }else{
      return false;
    }
  }

  highestCard(card1 card2){
/* missing comma between two arguments */
    if(card1.value > card2.value){
      return card.name
/* card does not exist name is not a key, should be card1*/
/* .name is not a key. We likely want to return the whole object*/
    }
    else{
      card2
    }
   }
/* too many close brackets */
  }

  static.cardsTotal(cards){
/* static? */
    return total;
/* do not want to start with return */
/* need to declare variable 'total' */
    for(let card of cards){
      total += card.value;
      return "You have a total of " + total;
/* return wants to to outside the for of loop */
    }
  }
}


```
