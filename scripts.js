let homeScore = 0;
let guestScore = 0;

let homeScoreText = document.getElementById("home-score-text");
let guestScoreText = document.getElementById("guest-score-text");

let plusOneHome = document.getElementById("plus-one-home");
let plusTwoHome = document.getElementById("plus-two-home");
let plusThreeHome = document.getElementById("plus-three-home");

let plusOneGuest = document.getElementById("plus-one-guest");
let plusTwoGuest = document.getElementById("plus-two-guest");
let plusThreeGuest = document.getElementById("plus-three-guest");

let clearScore = document.getElementById("clear-score-btn")

plusOneHome.addEventListener("click", function() {
    homeScore += 1;
    homeScoreText.textContent = homeScore;
    console.log(homeScore);
});

plusTwoHome.addEventListener("click", function() {
    homeScore += 2;
    homeScoreText.textContent = homeScore;
    console.log(homeScore);
});

plusThreeHome.addEventListener("click", function() {
    homeScore += 3;
    homeScoreText.textContent = homeScore;
    console.log(homeScore);
});


plusOneGuest.addEventListener("click", function() {
    guestScore += 1;
    guestScoreText.textContent = guestScore;
    console.log(guestScore);
});

plusTwoGuest.addEventListener("click", function() {
    guestScore += 2;
    guestScoreText.textContent = guestScore;
    console.log(guestScore);
});

plusThreeGuest.addEventListener("click", function() {
    guestScore += 3;
    guestScoreText.textContent = guestScore;
    console.log(guestScore);
});

clearScore.addEventListener("click", function() {
    homeScore = 0;
    guestScore = 0;
    homeScoreText.textContent = guestScore;
    guestScoreText.textContent = guestScore;


})

