import './style.css';
import display from '../modules/add.js';

const btnAdd = document.getElementById('btnAdd');
const btnRefresh = document.getElementById('btnRefresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
// let idgame={};

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST',
//   body: JSON.stringify({ 
//     "name": "Rhyming" 
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((gameid) => {
//     // idgame = gameid;
//     console.log(gameid);
//   });

const addScore = async (url, name, score) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      "user": `"${name}"`,
      "score": `${score}`
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response.json();
} 


btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  addScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PaP8nHWYVL0mOujbpMVo/scores/',name.value,score.value )
});

btnRefresh.addEventListener('click', () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PaP8nHWYVL0mOujbpMVo/scores/')
  .then((response) => response.json())
  .then((leaderboard) => {
    scoreContainer.innerHTML = display(leaderboard.result);
  });
})