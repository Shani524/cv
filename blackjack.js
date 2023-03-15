let player={
  name:"Shnai",
  chips:139
}

let sum = 0;
let card = [];
let hasBlackjack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerEl=document.getElementById("player-el")
let message = "";

function randomNumber() {
  let randomel = Math.floor(Math.random() * 13) + 1;

  if (randomel > 13) {
    return 10;
  } else if (randomel === 1) {
    return 11;
  } else {
    return randomel;
  }
}

function startGame() {
  isAlive = true;
  let firstcard = randomNumber();
  let secondcard = randomNumber();
  card = [firstcard, secondcard];
  sum = firstcard + secondcard;
  playerEl.textContent=player.name + ": $" + player.chips
  renderCard();
}

function renderCard() {
  cardEl.textContent = "Card : ";

  for (let i = 0; i < card.length; i++) {
    cardEl.textContent += card[i] + " ";
  }

  sumEl.textContent = "sum : " + sum;

  if (sum <= 20) {
    message = "Do You Want To Play Again !";
  } else if (sum === 21) {
    message = "Wohoo ! You've Black jack.....";
    hasBlackjack = true;
  } else {
    message = "You Are Out Of The Game !";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let cards = randomNumber();
    sum += cards;
    card.push(cards);
    renderCard();
  }
}
