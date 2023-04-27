import axios from 'axios';

const getData = async () => {
  const response = await axios.get('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9XM6tCAXM9ISEV7PJjrr/scores');

  return response.data.result;
};

const refreshbtn = document.querySelector('.sec1btn');
const scoresheet = document.querySelector('#scores-sheet');
refreshbtn.addEventListener('click', async () => {
  const returnData = await getData();
  scoresheet.innerHTML = '';
  returnData.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = `${element.user}: ${element.score}`;
    scoresheet.appendChild(li);
  });
});

export default getData;