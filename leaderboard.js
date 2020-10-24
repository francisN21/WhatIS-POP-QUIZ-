// leaderboard
var sName = localStorage.getItem("highscoreName");
var hScore = localStorage.getItem("highscore");
var highscore = document.querySelector("#highscore");

highscore.textContent = sName + ": " + hScore;