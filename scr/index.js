import readlineSync from 'readline-sync';

const gameLogic = (gameRules, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${gameRules}`); // правила игры вызываются в зависимости от игры
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const [questions, correctAnswer] = gameFunction();
    console.log(questions);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      const error = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;
      console.log(`${error}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameLogic;
