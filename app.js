// FIX BUG WHERE IT SAYS WRONG PLAYER WON!!!//

// Selecting DOM elements
const container = document.querySelector('.container');
const table = document.querySelector('.table');
const squares = document.querySelectorAll('.box');

// Function to generate the game table
const generateTable = () => {
  table.style.gridTemplateRows = 'repeat(3, 1fr)';
  table.style.gridTemplateColumns = 'repeat(3, 1fr)';
};
generateTable();

// Player objects
// Constructor function to create player objects
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Creating player one
const createPlayerOne = () => {
  user = prompt('Enter player name');
  marker = prompt('Enter player marker');
  return new Player(user, marker);
};

// Creating player two
const createPlayerTwo = () => {
  user = prompt('Enter player name');
  marker = prompt('Enter player marker');
  return new Player(user, marker);
};

// Creating players and initializing game
let playerOne = createPlayerOne();
let playerTwo = createPlayerTwo();
let currentPlayer = playerOne;
console.log(playerOne.marker);

// Adding event listener for each square
squares.forEach(square => {
  square.addEventListener('click', handleSquare);
});

// Function to handle a square click
function handleSquare(e) {
  // Display the player's marker when a square is clicked
  e.target.textContent = currentPlayer.marker;
    e.target.classList.add('marker')
  // Switching players
 
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  }
}
  

// Arrays to track player moves
let playerOneMoves = [];
let playerTwoMoves = [];

// Winning combinations
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

// Adding click event listener to each box
const box = document.querySelectorAll('.box');
box.forEach(box => {
  box.addEventListener('click', () => {
    let boxNumber = box.id;
    boxNumber = parseInt(boxNumber);
    if (currentPlayer === playerOne) {
      playerOneMoves.push(boxNumber);
    } else if (currentPlayer === playerTwo) {
      playerTwoMoves.push(boxNumber);
    }

    console.log(boxNumber);
    checkWinner();
    checkTie()
  });
});

let winner;

// Checking for a winner
const checkWinner = () => {
  for (const combo of winningCombos) {
    if (combo.every(move => playerOneMoves.includes(move))) {
      console.log('Player one wins!');
      winner = playerOne;
    }
    if(combo.every(move=> playerTwoMoves.includes(move))){
        winner = playerTwo
        
    }

    handleWinner();
  }
};



// Displaying winner text
let winnerText = document.querySelector('.winner');
winnerText.style.display = 'block'
const handleWinner = () => {
  if (winner === playerOne) {
   
    winnerText.style.display = 'block';
    winnerText.innerText = `${playerOne.name} wins`
  }

  if (winner === playerTwo) {
    
    winnerText.style.display = 'block';
    winnerText.innerText =  `${playerTwo.name} wins`;
  }
};


const restartGame = document.querySelector('.restart')

restartGame.addEventListener('click',()=>{
    playerOneMoves = []
    playerTwoMoves = []
    winnerText.innerText = ''
    winner = ''
  
    squares.forEach(square=>{
        square.textContent = ''
        square.classList.remove('marker')
    })

  
    
})


const checkTie = ()=>{
    squares.forEach(square=>{
        console.log(square.innerText)
        
    })
}