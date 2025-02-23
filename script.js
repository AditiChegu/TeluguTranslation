// Question bank with Telugu answers
const questionBank = [
    { question: "I drank", answer: "నేను తాగాను", type: "SV" },  
    { question: "You drank", answer: "నువ్వు తాగావు", type: "SV" },  
    { question: "You (formal) drank", answer: "మీరు తాగారు", type: "SV" },  
    { question: "He (informal) drank", answer: "వాడు తాగాడు", type: "SV" },  
    { question: "He (formal) drank", answer: "అతను తాగారు", type: "SV" },  
    { question: "He (v. formal) drank", answer: "ఆయన తాగారు", type: "SV" },  
    { question: "She (informal) drank", answer: "అది తాగింది", type: "SV" },  
    { question: "She (formal) drank", answer: "ఆమె తాగారు", type: "SV" },  
    { question: "She (v. formal) drank", answer: "ఆవిడ తాగారు", type: "SV" },  
    { question: "It drank", answer: "అది తాగింది", type: "SV" },  
    { question: "We (inclusive) drank", answer: "మనం తాగాం", type: "SV" },  
    { question: "We (exclusive) drank", answer: "మెం తాగాం", type: "SV" },  
    { question: "You all drank", answer: "మీరు తాగారు", type: "SV" },  
    { question: "They (people) drank", answer: "వాళ్ళు తాగారు", type: "SV" },  
    { question: "They (animals) drank", answer: "అవి తాగాయి", type: "SV" },  
    { question: "I did", answer: "నేను చేశాను", type: "SV" },  
    { question: "You did", answer: "నువ్వు చేసావు", type: "SV" },  
    { question: "You (formal) did", answer: "మీరు చేసారు", type: "SV" },  
    { question: "He (informal) did", answer: "వాడు చేసాడు", type: "SV" },  
    { question: "He (formal) did", answer: "అతను చేసారు", type: "SV" },  
    { question: "He (v. formal) did", answer: "ఆయన చేసారు", type: "SV" },  
    { question: "She (informal) did", answer: "అది చేసింది", type: "SV" },  
    { question: "She (formal) did", answer: "ఆమె చేసారు", type: "SV" },  
    { question: "She (v. formal) did", answer: "ఆవిడ చేసారు", type: "SV" },  
    { question: "It did", answer: "అది చేసింది", type: "SV" },  
    { question: "We (inclusive) did", answer: "మనం చేశాం", type: "SV" },  
    { question: "We (exclusive) did", answer: "మెం చేశాం", type: "SV" },  
    { question: "You all did", answer: "మీరు చేసారు", type: "SV" },  
    { question: "They (people) did", answer: "వాళ్ళు చేసారు", type: "SV" },  
    { question: "They (animals) did", answer: "అవి చేశాయి", type: "SV" }
];

let currentQuestionIndex = 0;
let streak = 0;
let incorrectAnswers = 0;
let correctAnswers = 0;

// New tracking variables for each question type
let questionTypeStats = {
    SV: { total: 0, correct: 0 },
    // general: { total: 0, correct: 0 },
    // geography: { total: 0, correct: 0 },
    // science: { total: 0, correct: 0 },
    // literature: { total: 0, correct: 0 }
};

const questionElement = document.getElementById('question');
const userAnswerElement = document.getElementById('user-answer');
const submitButton = document.getElementById('submit-answer');
const feedbackElement = document.getElementById('feedback');
const nextQuestionButton = document.getElementById('next-question');
const viewResultsButton = document.getElementById('view-results'); // New button for results page
const wrongAnswerCounter = document.getElementById('wrong-answer-counter'); // Counter for wrong answers

submitButton.addEventListener('click', checkAnswer);
nextQuestionButton.addEventListener('click', goToNextQuestion);
viewResultsButton.addEventListener('click', goToResultsPage);

// Shuffle the question bank randomly
function shuffleQuestions() {
    for (let i = questionBank.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionBank[i], questionBank[j]] = [questionBank[j], questionBank[i]]; // Swap elements
    }
}

function displayQuestion() {
    const currentQuestion = questionBank[currentQuestionIndex];
    
    // Track question type statistics
    questionTypeStats[currentQuestion.type].total++;

    questionElement.textContent = currentQuestion.question;
    userAnswerElement.value = "";
    feedbackElement.textContent = "";
    submitButton.style.display = 'block';
    nextQuestionButton.style.display = 'none';
    viewResultsButton.style.display = 'none'; // Hide the "View Results" button initially
}

function checkAnswer() {
    const userAnswer = userAnswerElement.value.trim().normalize("NFC"); // Normalize input
    const correctAnswer = questionBank[currentQuestionIndex].answer.normalize("NFC"); // Normalize answer

    // Ensure the user has entered an answer before submitting
    if (!userAnswer) {
        feedbackElement.textContent = "Please enter an answer!";
        feedbackElement.style.color = '#c8291a';
        return;
    }

    const currentQuestion = questionBank[currentQuestionIndex];
    
    if (userAnswer === correctAnswer) {
        correctAnswers++;
        streak++;
        questionTypeStats[currentQuestion.type].correct++; // Track correct answers per type
        feedbackElement.textContent = 'Correct!';
        confetti({
            particleCount: 100,
            colors: ['#33CC33', '#008000', '#669966', '#A0D6A0', '#1B8E2D', '#00FF00'],
            spread: 70,
            origin: { y: 0.6 }
        });
        feedbackElement.style.color = '#356d46';
    } else {
        incorrectAnswers++;
        streak = 0;  // Reset streak on wrong answer
        feedbackElement.textContent = `Wrong! It is: ${questionBank[currentQuestionIndex].answer}`;
        feedbackElement.style.color = '#c8291a';
    }

    // Update the wrong answer counter
    wrongAnswerCounter.textContent = `Incorrect Answers: ${incorrectAnswers}`;

    submitButton.style.display = 'none';
    nextQuestionButton.style.display = 'block';

    if (incorrectAnswers >= 3 || currentQuestionIndex === questionBank.length - 1) {
        endGame();
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questionBank.length) {
        endGame();
    } else {
        displayQuestion();
    }
}

function endGame() {
    // Hide next question button and show "View Results" button
    nextQuestionButton.style.display = 'none';
    viewResultsButton.style.display = 'block';
}

function goToResultsPage() {
    // Redirect to results page with query parameters
    const stats = encodeURIComponent(JSON.stringify(questionTypeStats));
    window.location.href = `results.html?correct=${correctAnswers}&stats=${stats}`;
}

function restartGame() {
    streak = 0;
    incorrectAnswers = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    questionTypeStats = {
        SV: { total: 0, correct: 0 },
        // general: { total: 0, correct: 0 },
        // geography: { total: 0, correct: 0 },
        // science: { total: 0, correct: 0 },
        // literature: { total: 0, correct: 0 }
    };
    shuffleQuestions();  // Shuffle the question order again on restart
    displayQuestion();
}

// Initialize the game
shuffleQuestions();  // Shuffle the questions before starting the game
displayQuestion();
