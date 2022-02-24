import getRandom from '../get-random.js';
import gameLogic from '../index.js';

const gameRules = 'What is the result of the expression?';

const arithmeticExpressions = (a, b, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = null;
  }
  return result;
};

const gameFunction = () => {
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const operator = ['+', '-', '*'];
  const randomOperation = Math.floor(Math.random() * operator.length);
  const question = `${a} ${operator[randomOperation]} ${b}`;
  const correctAnswer = `${arithmeticExpressions(a, b, randomOperation)}`;
  return [question, correctAnswer];
};

const calcGame = () => gameLogic(gameRules, gameFunction);

export default calcGame;
