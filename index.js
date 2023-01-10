let homeScore = 0;
let guestScore = 0;
let homeCounter = document.querySelector("#home-counter h3");
let guestCounter = document.querySelector("#guest-counter h3");
let homeScreen = document.querySelector("#home-counter");
let guestScreen = document.querySelector("#guest-counter");


function increment(user, amount) {
    switch(user) {
        case 'home':
            homeScore += amount;
            break;
        case 'guest':
            guestScore += amount;
            break;
        default:
            return;
    }
    updateScore();
    updateLeader();
}

function updateScore() {
    homeCounter.textContent = homeScore;
    guestCounter.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    updateScore();
}

function updateLeader() {
    homeScreen.classList.remove("highlight-yellow");
    guestScreen.classList.remove("highlight-yellow");
    homeScreen.classList.remove("highlight-green");
    guestScreen.classList.remove("highlight-green");
    if(homeScore > guestScore){ 
        homeScreen.classList.add("highlight-yellow")
    }
    else if(homeScore === guestScore) {
        homeScreen.classList.remove("highlight-yellow");
        guestScreen.classList.remove("highlight-yellow");
        homeScreen.classList.add("highlight-green");
        guestScreen.classList.add("highlight-green");
    }
    else {guestScreen.classList.add("highlight-yellow")}
}