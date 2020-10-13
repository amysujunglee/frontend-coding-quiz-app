// Create a list of questions
// Start the game - after 'Start' button
// Show the first question - after clicking 'Start' button
// Reset the state
// Show the next question - after clicking 'Next' button
// Select the answer - showing an effect when the user selects a correct answer or wrong answer

const startBtn = document.querySelector('#start-btn');
const nextBtn = document.querySelector('#next-btn')
const questionContainer = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerBtns = document.querySelector('#answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide')
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerBtns.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    while (answerBtns.firstChild) {
        answerBtns.removeChild;
        (answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct)
}

const questions = [{
    question: 'What is 2 + 2 ?',
    answers: [{
            text: '4',
            correct: true
        },
        {
            text: '22',
            correct: false
        },
    ]
}];