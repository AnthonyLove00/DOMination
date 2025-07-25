const quizData = [
  {
    question: "What does DOM stand for?",
    answers: ["Document Object Model", "Data Object Model", "Digital Ordinance Model", "Desktop Oriented Module"],
    correct: 0
  },
  {
    question: "Which method is used to select an element by ID?",
    answers: ["getElementByClassName", "getElementById", "querySelectorAll", "getElementsByTagName"],
    correct: 1
  },
  {
    question: "Which event is triggered when a button is clicked?",
    answers: ["onhover", "onchange", "onclick", "onsubmit"],
    correct: 2
  },
  {
    question: "How do you create a new element in JavaScript?",
    answers: ["document.createElement()", "document.newElement()", "document.makeElement()", "document.element()"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('result');

function showQuestion() {
  const q = quizData[currentQuestion];
  let html = `<h2>Question ${currentQuestion + 1} of ${quizData.length}</h2>`;
  html += `<p>${q.question}</p>`;
  q.answers.forEach((ans, i) => {
    html += `<button class='answerBtn' onclick='selectAnswer(${i})'>${ans}</button><br>`;
  });
  quizContainer.innerHTML = html;
  resultContainer.innerHTML = "";
}

window.selectAnswer = function(index) {
  if (index === quizData[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizContainer.innerHTML = "";
  resultContainer.innerHTML = `<h2>Your score: ${score} / ${quizData.length}</h2><button onclick='restartQuiz()'>Restart Quiz</button>`;
}

window.restartQuiz = function() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
};

// Initial render
showQuestion();
