
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEL = document.getElementById("message-el")
let cardsEL = document.getElementById("cards-el")
let sumEL = document.getElementById("sum-el")
let player = {
    name:"Han",
    chips:145
}


let playerEL = document.getElementById("player-el")
playerEL.textContent += player.name +": $"+player.chips
function getRandomCard(){
    let randomValue =  Math.floor(Math.random()*13)+1
    if(randomValue>10){
        return 10
    }
    else if(randomValue===1){
        return 11
    }
    else{
        return randomValue
    }
}
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    cardsEL.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEL.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum
    messageEL.innerText = message

}

function newCard(){
    if(isAlive===true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

