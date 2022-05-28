import getRandom from '../get-random.js';

import gameLogic from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNum = (num) => {
  let corAnswer = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      corAnswer = 'no';
    }
  }
  return corAnswer;
};

const gameFunction = () => {
  const num = getRandom(2, 20);
  const question = `Question: ${num}`;
  const correctAnswer = `${primeNum(num) ? 'no' : 'yes'}`;
  return [question, correctAnswer];
};

const prime = () => gameLogic(gameRules, gameFunction);

export default prime;
