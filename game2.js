let game = ["rock", "paper", "sesor"];

function getGame() {
  let mathrandom = Math.floor(Math.random() * 3);

  return game[mathrandom];
}
console.log(getGame());
