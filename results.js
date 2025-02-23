// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const correctAnswers = urlParams.get('correct');
const stats = JSON.parse(decodeURIComponent(urlParams.get('stats')));

// Display the results
document.getElementById('correct-count').textContent = correctAnswers;

// Display question type breakdown
const statsContainer = document.getElementById('question-type-stats');
for (const type in stats) {
    const total = stats[type].total;
    const correct = stats[type].correct;
    const statElement = document.createElement('p');
    statElement.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: ${correct}/${total}`;
    statsContainer.appendChild(statElement);
}

// Function to restart the game by redirecting to index.html
function restartGame() {
    window.location.href = "index.html";  // Redirect back to the quiz page
}
