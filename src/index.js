import './style.css';
import display from '../modules/add.js';
import addScore from '../modules/addScore.js';

const btnAdd = document.getElementById('btnAdd');
const btnRefresh = document.getElementById('btnRefresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');

const requestLeaderboard = async (url) => {
  const response = await fetch(url);
  return response.json();
};

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  addScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PaP8nHWYVL0mOujbpMVo/scores/', name.value, score.value);
});

btnRefresh.addEventListener('click', () => {
  requestLeaderboard('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PaP8nHWYVL0mOujbpMVo/scores/')
    .then((leaderboard) => {
      scoreContainer.innerHTML = display(leaderboard.result);
    });
});