$(() => {
    $('.game-canvas').css({'display':'none'})
    $('.player-ship').text(player.name)
    
})

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    battle(enemy) {
        alert(this.name + ' attacks ' + enemy.name)
        console.log(this.name + ' attacks ' + enemy.name)
        if (this.accuracy > Math.random()) {
            enemy.hull -= this.firepower
        } else {
            alert('Missed!  Shot didn\'t connect!')
            console.log('Missed!  Shot didn\'t connect!')
            return
        }
        if (enemy.hull > 0) {
            alert('Direct hit!  ' +enemy.name+ '\'s hull integrity is at ' + enemy.hull)    
            console.log('Direct hit!  ' +enemy.name+ '\'s hull integrity is at ' + enemy.hull);
            } else {
                alert('Direct hit!  ' +enemy.name+ ' is destroyed!')
                console.log('Direct hit!  ' +enemy.name+ ' is destroyed!');
            }
    }
}
class AlienFactory {    
    constructor(alienname) {        
    this.name = alienname        
    this.aliens = [] 
    }    
    generateAliens(ammount) {
    for (let i = 0; i < ammount; i++) {       
    const newAlien = new Ship(this.name + ' ' + (this.aliens.length+1),randomNumber(3, 6), randomNumber(2, 4), randomFloat(.6, .8))        
    this.aliens.push(newAlien) }       
    return this.name
    }
}

const randomNumber = (min, max) => {    
    return Math.floor(Math.random() * (max - min + 1)) + min;}
const randomFloat = (min, max) => {    
    let num = Math.random() * (max - min) + min;    
    return num.toFixed(1);}

const player = new Ship("USS Reliant", 20, 5, .7)
const alien = new AlienFactory("Space Pirate")
// alien.generateAliens(6)
// console.log(player)
// console.log(alien.aliens)

// const shipBattle=()=>{
//     player.battle(alien.aliens[0])
//     if (alien.aliens[0].hull < 0) {
//         alien.aliens.splice(0, 1)
//     } else {
//     alien.aliens[0].battle(player)
//     }
//     didIWin()
// }

// const runAway=()=>{
//     let coward = prompt("Are you sure?","yes or no")
//         if (coward === "yes") {
//             alert("You fled the battle and doomed Earth to assimilation!")
//             location.reload()
//         }
//         else {
//             alert("You decided to stand your ground like a true Starfleet Officer!")
//         }
// }

// const didIWin = () => {
//     if (Array.isArray(alien.aliens) && alien.aliens.length === 0) {
//         alert("You Win!  The Borg are defeated!")
//     }else if (player.hull === 0) {
//         alert("You Lose!  The Borg will assimilate Earth!")
//     } 
//     else {
//         return
//     }
// }

// const boostShield = () => {
//     if (player.hull <= 10) {
//         player.hull += 5
//         alert("Diverting power to the main coupling!")
//         alert("Your hull strength is now " + player.hull + "!")
//     }
//     else if (player.hull >= 15) {
//         alert("We're givin' 'er all she's got, Capt'n!!")
//         alert("You can only boost shield if your hull is less than 10")
//     }
// }

const EventHandlers = {
    makeEnemies: (ammount) => {
        let $difficulty = $('.difficulty')
        alien.generateAliens(ammount);
        $difficulty.css({'display':'none'})
        $('.game-canvas').css({'display':'inline-block'})
    }
}