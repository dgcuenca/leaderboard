import './style.css';
import display from '../modules/add.js';
import addScore from '../modules/addScore.js';

const btnAdd = document.getElementById('btnAdd');
const btnRefresh = document.getElementById('btnRefresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const alertName = document.querySelector('.alert-name');
const alertScore = document.querySelector('.alert-score');
const alertRange = document.querySelector('.alert-range');
const alertMaxlength = document.querySelector('.alert-maxlength');

const requestLeaderboard = async (url) => {
  const response = await fetch(url);
  return response.json();
};

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  if (name.value && score.value) {
    if (score.value > 100 || score.value < 0) {
      alertRange.style.display = 'flex';
      alertMaxlength.style.display = 'none';
    } else if (name.value.length > 10) {
      alertRange.style.display = 'none';
      alertMaxlength.style.display = 'flex';
    } else {
      alertName.style.display = 'none';
      alertScore.style.display = 'none';
      alertRange.style.display = 'none';
      alertMaxlength.style.display = 'none';
      addScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AVnMJkFX9INRzoJZINOZ/scores/', name.value, score.value);
    }
  } else if (name.value || score.value) {
    if (!name.value) {
      alertName.style.display = 'flex';
      alertScore.style.display = 'none';
    } else {
      alertName.style.display = 'none';
      alertScore.style.display = 'flex';
    }
  } else {
    alertName.style.display = 'flex';
    alertScore.style.display = 'flex';
  }
});

btnRefresh.addEventListener('click', () => {
  requestLeaderboard('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AVnMJkFX9INRzoJZINOZ/scores/')
    .then((leaderboard) => {
      scoreContainer.innerHTML = display(leaderboard.result);
    });
});