let count = 1;
let tie = 0;
let board;

let user1Moves = [];
let user2Moves = [];
let data = [];
let data1 = [];

const winCombo = [[123], [456], [789], [147], [258], [369], [159], [357]];



const gameBoard = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];

const game = document.querySelectorAll("button.b");

for (let i = 0; i < game.length; i++) {
  game[i].addEventListener("click", gameFlow);
}

function gameFlow(event) {
  if (count == 1) {
    event.target.innerText = "X";
    event.target.removeEventListener("click", gameFlow);
    count = -1;
  } else {
    event.target.innerText = "O";
    event.target.removeEventListener("click", gameFlow);
    count = 1;
  }
}
  
for (let i = 0; i < game.length; i++) {
  game[i].addEventListener("click", userInput);
}

function userInput() {
  if (count == 1) {
    user1Moves.push(event.target.value);
    user1Moves.sort(function (a, b) {
      return a - b; 
    });
    data = user1Moves.join("");
    event.target.removeEventListener("click", userInput);
    console.log(data);
  } else {
    user2Moves.push(event.target.value);
    user2Moves.sort(function (a, b) {
      return a - b;
    });
    data1 = user2Moves.join("");
    event.target.removeEventListener("click", userInput);
  }
}


function player(name, marker, moveMap) {
  this.name = name;
  this.marker = marker;
  this.moveMap = moveMap;
  this.playerDetails = function () {
    //playerInfo.innerHTML = player1.name + player1.marker;
    //playerInfo1.innerHTML = player2.name + player2.marker;
  };
}

const player1 = new player("O", "O", 123);
const player2 = new player("X", "X", 444);

//const playerInfo = document.querySelector('#playerInfo');
//const playerInfo1 = document.querySelector('#playerInfo1');

 const winner = document.querySelector('#winner');
 const loser = document.querySelector('#loser');


for (let i = 0; i < game.length; i++) {
  game[i].addEventListener("click", gameWin);
}
function gameWin() {
  for (let i = 0; i < winCombo.length; i++) {
    if (data.includes(winCombo[i])) {
      winner.innerHTML = player1.name + "-for the win!";
    }
    if (data1.includes(winCombo[i])) {
      loser.innerHTML = player2.name + "-for the win!";
    }
  }
}

for (let i = 0; i < game.length; i++) {
  game[i].addEventListener("click", tieGame);
}

const tieKnots = document.querySelector("#tie");


function tieGame() {
  tie++;
  if (tie == 9) {
    tieKnots.innerHTML = "Tie Game";
  }
}