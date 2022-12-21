import './style.css';
import Score from '../modules/scoreClass.js';
import display from '../modules/add.js'

const btnAdd = document.getElementById('btnAdd');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const leaderboard = [];

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const newScore = new Score(name.value, score.value);
    leaderboard.push(newScore);
    scoreContainer.innerHTML = display(leaderboard);
});