// Create a list of questions
// Start the game - after 'Start' button
// Show the first question - after clicking 'Start' button
// Show the next question - after clicking 'Next' button
// Select the answer - showing an effect when the user selects a correct answer or wrong answer

const startBtn = document.querySelector('#start-btn');
const questionContainer = document.querySelector('#question-container');

const shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log('start game!');
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    console.log(shuffledQuestions);
    questionContainer.classList.remove('hide')
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion() {

}

function selectAnswer() {

}

const questions = [{
    question: 'What is 2 + 2 ?',
    answer: [{
            text: '4',
            correct: true
        },
        {
            text: '22',
            correct: false
        },
    ]
}];