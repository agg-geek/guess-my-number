'use strict';

const playAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreNode = document.querySelector('.score');
const highscoreNode = document.querySelector('.highscore');

const getRandomNum = () => Math.floor(Math.random() * 20) + 1;
const displayMessage = msg => {
	message.textContent = msg;
};
const updateHighscore = () => {
	highscore = Math.max(highscore, score);
	highscoreNode.textContent = highscore;
};
const setScore = score => {
	scoreNode.textContent = score;
};
const setBackgroundColor = color => {
	document.querySelector('body').style.backgroundColor = color;
};
const setSecretNumber = val => {
	document.querySelector('.number').textContent = val;
};

let secretNum = getRandomNum();
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
	const guessedNum = Number(guess.value);

	if (!guessedNum) displayMessage('No number');
	else if (guessedNum === secretNum) {
		displayMessage('You won!');
		setBackgroundColor('#60b347');
		setSecretNumber(secretNum);
		updateHighscore();
	} else {
		if (score > 1) {
			const type = guessedNum > secretNum ? 'high' : 'low';
			displayMessage(`Too ${type}`);
			score--;
			setScore(score);
		} else displayMessage('You lost!');
	}
});

playAgain.addEventListener('click', function () {
	secretNum = getRandomNum();
	setSecretNumber('?');

	score = 20;
	setScore(score);

	setBackgroundColor('#222');
	displayMessage('Start guessing...');
	guess.value = '';
});
