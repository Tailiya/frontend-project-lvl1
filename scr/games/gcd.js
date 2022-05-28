import getRandom from '../get-random.js';

import gameLogic from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (numOne, numTwo) => {
  let i = numOne;
  while (numOne % i !== 0 || numTwo % i !== 0) {
    i -= 1;
  }
  return i;
};

const gameFunction = () => {
  const numOne = getRandom(1, 15);
  const numTwo = getRandom(1, 15);
  const question = `${numOne} ${numTwo}`;
  const correctAnswer = `${gcd(numOne, numTwo)}`;
  return [question, correctAnswer];
};

const gcdGame = () => gameLogic(gameRules, gameFunction);

export default gcdGame;
