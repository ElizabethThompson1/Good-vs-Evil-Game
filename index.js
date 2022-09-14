
const heroElement = "hero"
const heroName = "wizard"
const heroAvatar = "images/wizard.jfif"
let heroHealth = 0
let heroDiceScore = 0

const monsterElement = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.jfif"
let monsterHealth = 0
let monsterDiceScore = 0

function renderCharacter(element, name, avatar, health, diceScore) {
    document.getElementById(element).innerHTML = `
    <div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src= "${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"><div class="dice"> ${diceScore} </div></div>
    </div>   
    `
}

renderCharacter(heroElement, heroName, heroAvatar, heroHealth, heroDiceScore);

renderCharacter(monsterElement, monsterName, monsterAvatar, monsterHealth, monsterDiceScore)



