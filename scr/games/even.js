import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const evenGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandom(1, 99);
    const evenCount = number % 2 === 0;
    const correctAnswer = evenCount ? 'yes' : 'no';
    const questions = `Question: ${number}`;
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

export default evenGames;
