import './style.css';
import Score from '../modules/scoreClass.js';
import display from '../modules/add.js';

const btnAdd = document.getElementById('btnAdd');
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




btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PaP8nHWYVL0mOujbpMVo/scores/', {
    method: 'POST',
    body: JSON.stringify({
      "user": `"${name.value}"`,
      "score": `${score.value}`
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((gamecreated) => { console.log(gamecreated) });

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PaP8nHWYVL0mOujbpMVo/scores/')
    .then((response) => response.json())
    .then((leaderboard) => {
      console.log(leaderboard.result[0].score);
      scoreContainer.innerHTML = display(leaderboard.result);
    });
});