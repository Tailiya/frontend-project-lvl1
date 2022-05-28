import getRandom from '../get-random.js';

import gameLogic from '../index.js';

const gameRules = 'What number is missing in the progression?';

const gameFunction = () => {
  const arr = [];
  const randomNum = getRandom(1, 10);
  const step = getRandom(2, 5);
  for (let i = randomNum; i <= 100; i += step) {
    arr.push(i);
  }
  const arrayLength = 10;
  const arrTenNum = arr.slice(0, arrayLength);
  const randomPosition = getRandom(2, 12);
  const correctAnswer = arrTenNum.splice(randomPosition, 1, '..').join('');
  const question = `Question: ${arrTenNum.join(' ')}`;
  return [question, correctAnswer];
};

const progression = () => gameLogic(gameRules, gameFunction);

export default progression;
