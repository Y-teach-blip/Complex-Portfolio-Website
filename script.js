let slideIndex = 0;
carousel();

function carousel() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

let score = 0;
let currentQuestionIndex = 0;
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the tallest mammal?",
    options: ["Elephant", "Giraffe", "Rhino", "Horse"],
    correctAnswer: "Giraffe"
  }
];

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').innerText = question.question;
  for (let i = 0; i < 4; i++) {
    document.getElementById(`option${i + 1}`).innerText = question.options[i];
  }
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestionIndex];
  if (selectedOption === `option${question.options.indexOf(question.correctAnswer) + 1}`) {
    score += 10;
    document.getElementById('result').innerText = "Correct!";
  } else {
    document.getElementById('result').innerText = "Incorrect!";
  }
  document.getElementById('scoreValue').innerText = score;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    document.getElementById('question').innerText = "Quiz Completed!";
    document.querySelector('.options').innerHTML = "";
  }
}



// Display first question
displayQuestion();



const submitVote = () => {
    const selectedLanguage = document.querySelector('input[name="language"]:checked');
    if (selectedLanguage) {
      const language = selectedLanguage.value;
      // Here you can implement the logic to submit the vote to your backend or store it locally
      document.getElementById('result').innerText = `Thank you for voting! Your choice: ${language}`;
    } else {
      document.getElementById('result').innerText = "Please select a language to vote.";
    }
  };
  