// Questions ARRAY: creates the container for the questions, choices and correct answer
let questions = [
    {
        title: "What are JavaScript data types?",
        choices: ["String","Cord","Cable","Chocolate"],
        answer: "String",
    },
    {
        title: "Which company developed JavaScript?",
        choices: ["Netscape","Escape","Broscape","Memeland"],
        answer: "Netscape",
    },
    {
        title: "Which symbol is used for comments in JavaScript?",
        choices: ["//","<>","!!","{}"],
        answer: "//",
    },
    {
        title: "Does JavaScript support automatic type conversion?",
        choices: ["Yes","No","Maybe","None of the above"],
        answer: "Yes",
    },
    {
        title: "What is the loop structure in JavaScript?",
        choices: ["For","Always","Four","Never"],
        answer: "For",
    }
];

// contains the variables for the functions below
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;


// countdown starts as the user hit the start button
function start(){
    timeLeft = 100;
    document.getElementById("count").innerHTML = timeLeft;

    timer = setInterval(function(){
        timeLeft--;
        document.getElementById("count").innerHTML = timeLeft;
        // if statement once the counter falls to 0
        if (timeLeft <=0){
            clearInterval(timer);
            endGame();
        }
        // sets 1 seconds delay
    }, 1000);
    next();
};

function endGame() {
    clearInterval(timer);

    var questionArea = `
    <h4>Game over!</h4>
    <p>You're score is'` + score +  ` /100!</p>
    <p>You got ` + score / 20 +  ` questions correct!</p>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("questionA").innerHTML = questionArea;
};

// Setscore and getscore function, saves on the local storage //
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
};

function getScore() {
    var questionArea = `
    <p>` + localStorage.getItem("highscoreName") + `'s highscore is:</p>
    <p>` + localStorage.getItem("highscore") + `</p><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button><button onclick="leaderboard()">Leaderboard</button>
    
    `;

    document.getElementById("questionA").innerHTML = questionArea;
};
// Clears the score from the local storage //
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
    location.reload();
    resetGame();
};
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
    <button onclick="start()">Start</button>`;

    document.getElementById("questionA").innerHTML = questionArea;

};
// time penalty for every wrong answer
function incorrect() {
    timeLeft -= 15; 
    next();
};
// bonus time for every correct answer
function correct() {
    score += 20;
    next();
};



// question function //
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var questionArea = "<p>" + questions[currentQuestion].title + "</p>"

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
    // question = questionArea;
    // document.getElementById("#questionA").innerHTML = question;
    document.getElementById("questionA").innerHTML = questionArea;
    console.log(typeof(questionArea));
};

// leaderboard link
function leaderboard(){
    window.location= `./highscores.html`;
};
function home(){
    window.location= `./index.html`;
};



    