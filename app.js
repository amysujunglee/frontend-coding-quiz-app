// Create a list of questions
// Start the game - after clicking 'Start' button
// Show the next question - after clicking 'Next' button
// Select the answer - showing an effect when the user selects a correct answer or wrong answer

const startBtn = document.querySelector('#start-btn');
const questionContainer = document.querySelector('#question-container');

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log('start game!');
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide')
    setNextQuestion();
}

function setNextQuestion() {

}

function selectAnswer() {

}