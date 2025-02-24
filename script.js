// Question bank with Telugu answers
const questionBank = [
    { question: "I drank", answer: "నేను తాగాను", type: "SV" },  
    { question: "You (informal) drank", answer: "నువ్వు తాగావు", type: "SV" },  
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
    { question: "You (informal) did", answer: "నువ్వు చేసావు", type: "SV" },  
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
    { question: "They (animals) did", answer: "అవి చేశాయి", type: "SV" },
    { question: "I put", answer: "నేను పెట్టాను", type: "SV" },
    { question: "You (informal) put", answer: "నువ్వు పెట్టావు", type: "SV" },
    { question: "You (formal) put", answer: "మీరు పెట్టారు", type: "SV" },
    { question: "He (informal) put", answer: "వాడు పెట్టాడు", type: "SV" },
    { question: "He (formal) put", answer: "అతను పెట్టారు", type: "SV" },
    { question: "He (v. formal) put", answer: "ఆయన పెట్టారు", type: "SV" },
    { question: "She (informal) put", answer: "అది పెట్టింది", type: "SV" },
    { question: "She (formal) put", answer: "ఆమె పెట్టారు", type: "SV" },
    { question: "She (v. formal) put", answer: "ఆవిడ పెట్టారు", type: "SV" },
    { question: "It put", answer: "అది పెట్టింది", type: "SV" },
    { question: "We (inclusive) put", answer: "మనం పెట్టాం", type: "SV" },
    { question: "We (exclusive) put", answer: "మెం పెట్టాం", type: "SV" },
    { question: "You all put", answer: "మీరు పెట్టారు", type: "SV" },
    { question: "They (people) put", answer: "వాళ్ళు పెట్టారు", type: "SV" },
    { question: "They (animals) put", answer: "అవి పెట్టాయి", type: "SV" },
    { question: "I ate", answer: "నేను తిన్నాను", type: "SV" },
    { question: "You (informal) ate", answer: "నువ్వు తిన్నావు", type: "SV" },
    { question: "You (formal) ate", answer: "మీరు తిన్నారు", type: "SV" },
    { question: "He (informal) ate", answer: "వాడు తిన్నాడు", type: "SV" },
    { question: "He (formal) ate", answer: "అతను తిన్నారు", type: "SV" },
    { question: "He (v. formal) ate", answer: "ఆయన తిన్నారు", type: "SV" },
    { question: "She (informal) ate", answer: "అది తిన్నది", type: "SV" },
    { question: "She (formal) ate", answer: "ఆమె తిన్నారు", type: "SV" },
    { question: "She (v. formal) ate", answer: "ఆవిడ తిన్నారు", type: "SV" },
    { question: "It ate", answer: "అది తిన్నది", type: "SV" },
    { question: "We (inclusive) ate", answer: "మనం తిన్నాం", type: "SV" },
    { question: "We (exclusive) ate", answer: "మెం తిన్నాం", type: "SV" },
    { question: "You all ate", answer: "మీరు తిన్నారు", type: "SV" },
    { question: "They (people) ate", answer: "వాళ్ళు తిన్నారు", type: "SV" },
    { question: "They (animals) ate", answer: "అవి తిన్నాయి", type: "SV" },
    { question: "I will drink", answer: "నేను తాగుతాను", type: "SV" },
    { question: "You (informal) will drink", answer: "నువ్వు తాగుతావు", type: "SV" },
    { question: "You (formal) will drink", answer: "మీరు తాగుతారు", type: "SV" },
    { question: "He (informal) will drink", answer: "వాడు తాగుతాడు", type: "SV" },
    { question: "He (formal) will drink", answer: "అతను తాగుతారు", type: "SV" },
    { question: "He (v. formal) will drink", answer: "ఆయన తాగుతారు", type: "SV" },
    { question: "She (informal) will drink", answer: "అది తాగుతుంది", type: "SV" },
    { question: "She (formal) will drink", answer: "ఆమె తాగుతారు", type: "SV" },
    { question: "She (v. formal) will drink", answer: "ఆవిడ తాగుతారు", type: "SV" },
    { question: "It will drink", answer: "అది తాగుతుంది", type: "SV" },
    { question: "We (inclusive) will drink", answer: "మనం తాగుతాం", type: "SV" },
    { question: "We (exclusive) will drink", answer: "మెం తాగుతాం", type: "SV" },
    { question: "You all will drink", answer: "మీరు తాగుతారు", type: "SV" },
    { question: "They (people) will drink", answer: "వాళ్ళు తాగుతారు", type: "SV" },
    { question: "They (animals) will drink", answer: "అవి తాగుతాయి", type: "SV" },
    { question: "I will do", answer: "నేను చేస్తాను", type: "SV" },
    { question: "You (informal) will do", answer: "నువ్వు చేస్తావు", type: "SV" },
    { question: "You (formal) will do", answer: "మీరు చేస్తారు", type: "SV" },
    { question: "He (informal) will do", answer: "వాడు చేస్తాడు", type: "SV" },
    { question: "He (formal) will do", answer: "అతను చేస్తారు", type: "SV" },
    { question: "He (v. formal) will do", answer: "ఆయన చేస్తారు", type: "SV" },
    { question: "She (informal) will do", answer: "అది చేస్తుంది", type: "SV" },
    { question: "She (formal) will do", answer: "ఆమె చేస్తారు", type: "SV" },
    { question: "She (v. formal) will do", answer: "ఆవిడ చేస్తారు", type: "SV" },
    { question: "It will do", answer: "అది చేస్తుంది", type: "SV" },
    { question: "We (inclusive) will do", answer: "మనం చేస్తాం", type: "SV" },
    { question: "We (exclusive) will do", answer: "మెం చేస్తాం", type: "SV" },
    { question: "You all will do", answer: "మీరు చేస్తారు", type: "SV" },
    { question: "They (people) will do", answer: "వాళ్ళు చేస్తారు", type: "SV" },
    { question: "They (animals) will do", answer: "అవి చేస్తాయి", type: "SV" },
    { question: "I will put", answer: "నేను పెడతాను", type: "SV" },
    { question: "You (informal) will put", answer: "నువ్వు పెడతావు", type: "SV" },
    { question: "You (formal) will put", answer: "మీరు పెడతారు", type: "SV" },
    { question: "He (informal) will put", answer: "వాడు పెడతాడు", type: "SV" },
    { question: "He (formal) will put", answer: "అతను పెడతారు", type: "SV" },
    { question: "He (v. formal) will put", answer: "ఆయన పెడతారు", type: "SV" },
    { question: "She (informal) will put", answer: "అది పెడుతుంది", type: "SV" },
    { question: "She (formal) will put", answer: "ఆమె పెడతారు", type: "SV" },
    { question: "She (v. formal) will put", answer: "ఆవిడ పెడతారు", type: "SV" },
    { question: "It will put", answer: "అది పెడుతుంది", type: "SV" },
    { question: "We (inclusive) will put", answer: "మనం పెడతాం", type: "SV" },
    { question: "We (exclusive) will put", answer: "మెం పెడతాం", type: "SV" },
    { question: "You all will put", answer: "మీరు పెడతారు", type: "SV" },
    { question: "They (people) will put", answer: "వాళ్ళు పెడతారు", type: "SV" },
    { question: "They (animals) will put", answer: "అవి పెడతాయి", type: "SV" },
    { question: "I will eat", answer: "నేను తింటాను", type: "SV" },
    { question: "You (informal) will eat", answer: "నువ్వు తింటావు", type: "SV" },
    { question: "You (formal) will eat", answer: "మీరు తింటారు", type: "SV" },
    { question: "He (informal) will eat", answer: "వాడు తింటాడు", type: "SV" },
    { question: "He (formal) will eat", answer: "అతను తింటారు", type: "SV" },
    { question: "He (v. formal) will eat", answer: "ఆయన తింటారు", type: "SV" },
    { question: "She (informal) will eat", answer: "అది తింటుంది", type: "SV" },
    { question: "She (formal) will eat", answer: "ఆమె తింటారు", type: "SV" },
    { question: "She (v. formal) will eat", answer: "ఆవిడ తింటారు", type: "SV" },
    { question: "It will eat", answer: "అది తింటుంది", type: "SV" },
    { question: "We (inclusive) will eat", answer: "మనం తింటాం", type: "SV" },
    { question: "We (exclusive) will eat", answer: "మెం తింటాం", type: "SV" },
    { question: "You all will eat", answer: "మీరు తింటారు", type: "SV" },
    { question: "They (people) will eat", answer: "వాళ్ళు తింటారు", type: "SV" },
    { question: "They (animals) will eat", answer: "అవి తింటాయి", type: "SV" }
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
