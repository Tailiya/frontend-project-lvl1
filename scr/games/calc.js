import getRandom from '../get-random.js';

import gameLogic from '../index.js';

const gameRules = 'What is the result of the expression?';

const expressions = (numOne, operation, numTwo) => {
  let result;
  switch (operation) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    default:
      result = null;
  }
  return result;
};

const gameFunction = () => {
  const numOne = getRandom(1, 10);
  const numTwo = getRandom(1, 10);
  const operator = ['+', '-', '*'];
  const randomOp = Math.floor(Math.random() * operator.length);
  const question = `Question: ${numOne} ${operator[randomOp]} ${numTwo}`;
  const correctAnswer = `${expressions(numOne, operator[randomOp], numTwo)}`;
  return [question, correctAnswer];
};

const calcGame = () => gameLogic(gameRules, gameFunction);

export default calcGame;
