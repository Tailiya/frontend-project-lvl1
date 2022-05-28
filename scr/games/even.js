import getRandom from '../get-random.js';

import gameLogic from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameFunction = () => {
  const number = getRandom(1, 99);
  const question = `Question: ${number}`;
  const evenCount = number % 2 === 0;
  const correctAnswer = evenCount ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => gameLogic(gameRules, gameFunction);

export default evenGame;
