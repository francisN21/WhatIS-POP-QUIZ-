// Questions ARRAY: creates the container for the questions, choices and correct answer
let questions = [
    {
        title: "",
        choices: [],
        answer: "",
    },
    {
        title: "",
        choices: [],
        answer: "",
    },
    {
        title: "",
        choices: [],
        answer: "",
    },
    {
        title: "",
        choices: [],
        answer: "",
    },
    {
        title: "",
        choices: [],
        answer: "",
    }
];

// contains the variables for the functions below
let score = 0;
let currentQuestion = -1;
let timeLeft = 0;
let timer;
let counter = document.getElementById("#count");
let questionA = document.getElementById("#questionA");

// countdown starts as the user hit the start button
function start(){
    timeLeft = 100;
    counter = timeLeft;

    timer = setInterval(function(){
        timeLeft--;
        counter = timeLeft;
        // if statement once the counter falls to 0
        if (timeLeft <=0){
            clearInterval(timer);
            endgame();
        }
        // sets 1.5 seconds delay
    }, 1500);
    console.log(timeLeft);
    next();
}

function endGame() {
    clearInterval(timer);

    var questionArea = `
    <h4>Game over!</h4>
    <p>You're score is'` + score +  ` /100!</p>
    <p>You got ` + score / 20 +  ` questions correct!</p>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    questionA = questionArea;
};

// Setscore and getscore function, saves on the local storage //
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}
function getScore() {
    var questionArea = `
    <p>` + localStorage.getItem("highscoreName") + `'s highscore is:</p>
    <p>` + localStorage.getItem("highscore") + `</p><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;
    questionA = questionArea;
};
// Clears the score from the local storage //
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
    resetGame();
}
// we cannot have a game without a reset //
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    counter = timeLeft;

    var questionArea = `
    <p>Are you ready to test your knowledge about Javascript?</p>
    <p>Hit start to play!</p>
    <button id="start" onclick="start()" class="btn btn-outline-primary">Start</button>`;

    questionA = questionArea;
};




// question function //
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var questionArea = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        questionArea += buttonCode;
    }
    questionA = questionArea;
};