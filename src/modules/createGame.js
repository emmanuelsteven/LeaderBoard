import axios from 'axios';

const createGame = async () => {
  await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    name: 'God of War',
  });
};

const myGameId = '9XM6tCAXM9ISEV7PJjrr';

const gameScores = async () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const theName = document.getElementById('name').value;
    const theScore = document.getElementById('scores').value;
    await axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGameId}/scores`, {
      user: theName,
      score: theScore,
    });
    form.reset();
  });
};

export {
  createGame, gameScores,
};