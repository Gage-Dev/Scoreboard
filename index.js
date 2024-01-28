let home1Pt = document.getElementById("home-btn-1");
let home2pt = document.getElementById("home-btn-2");
let home3pt = document.getElementById("home-btn-3");
let guest1pt = document.getElementById("guest-btn-1");
let guest2pt = document.getElementById("guest-btn-2");
let guest3pt = document.getElementById("guest-btn-3");
let resetScore = document.getElementById("reset-btn");
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0; 

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetFullGameScore() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}