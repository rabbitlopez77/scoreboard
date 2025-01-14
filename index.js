function addOnePointHome() {
    let currentScore = Number(document.getElementById('home-score').textContent)
    currentScore += 1
    document.getElementById('home-score').textContent = currentScore
}
function addTwoPointHome() {
    let currentScore = Number(document.getElementById('home-score').textContent)
    currentScore += 2
    document.getElementById('home-score').textContent = currentScore
}
function addThreePointHome() {
    let currentScore = Number(document.getElementById('home-score').textContent)
    currentScore += 3
    document.getElementById('home-score').textContent = currentScore
}
function addOnePointGuest() {
    let currentScore = Number(document.getElementById('guest-score').textContent)
    currentScore += 1
    document.getElementById('guest-score').textContent = currentScore
}
function addTwoPointGuest() {
    let currentScore = Number(document.getElementById('guest-score').textContent)
    currentScore += 2
    document.getElementById('guest-score').textContent = currentScore
}
function addThreePointGuest() {
    let currentScore = Number(document.getElementById('guest-score').textContent)
    currentScore += 3
    document.getElementById('guest-score').textContent = currentScore
}