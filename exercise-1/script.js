const root = document.querySelector('#root');
const inputScore = document.querySelector('#input');
const btnAdd = document.querySelector('#btn-add');
const btn1 = document.querySelector('#btn1');
const result1 = document.querySelector('#result1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

let arrScores = [6, 7, 8, 9, 9];

const addNewScore = (...value) => {
  console.log(value);
  arrScores.push(...value);
};

const showScore = () => {
  let html = arrScores.map((item) => `<li>${item}</li>`).join('');
  root.innerHTML = `<ul>${html}</ul>`;
};

const getScoreGreaterThan5 = () => {
  let result = 0;
  arrScores.forEach((item) => {
    if (item > 5) result += 1;
  });
  result1.innerHTML = result;
};

btnAdd.onclick = () => {
  addNewScore(inputScore.value);
  showScore(arrScores);
};

const addThreeScores = () => {
  addNewScore(8.5, 9.0, 7.0);
  showScore(arrScores);
};

const filterScores = () => {
  let newArr = arrScores.sort((a, b) => b - a);
  showScore(newArr);
};

btn1.onclick = getScoreGreaterThan5;
btn2.onclick = addThreeScores;
btn3.onclick = filterScores;
