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

    let questionArea = `
    <h2>Game over!</h2>
    <h3>You're score is'` + score +  ` /100!</h3>
    <h3>You got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

    questionA = questionArea;
};

