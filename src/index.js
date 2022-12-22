import './style.css';
import Score from '../modules/scoreClass.js';
import display from '../modules/add.js';

const btnAdd = document.getElementById('btnAdd');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const leaderboard = [];
let idgame={};

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({ 
    "name": "Rhyming" 
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((gameid) => {
    idgame = gameid;
    console.log(idgame);
  });

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  const newScore = new Score(name.value, score.value);
  leaderboard.push(newScore);
  scoreContainer.innerHTML = display(leaderboard);
});