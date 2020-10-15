$(() => {
    $('.game-canvas').css({'display':'none'})
    $('.shipname').css({'display':'none'})
    
    $('form').on('submit', (event) => {
        event.preventDefault();
        const playerName = $('.namebox').val();
        player.name = playerName;
        $('#player-ship').text(player.name);
        $('#hull').text('Hull : ' + player.hull);
        $('#firepower').text('Firepower : ' + player.firepower);
        $('#accuracy').text('Accuracy : ' + player.accuracy);
        $('.shipname').css({'display':'none'});
        $('.game-canvas').css({'display':'inline-block'})
        $('#ship1').on('click', e => {
            shipBattle(0)})
        $('#ship2').on('click', e => {
            shipBattle(1)})
        $('#ship3').on('click', e => {
            shipBattle(2)})
        $('#ship4').on('click', e => {
            shipBattle(3)})
        $('#ship5').on('click', e => {
            shipBattle(4)})
        $('#ship6').on('click', e => {
            shipBattle(5)})
        $('#ship7').on('click', e => {
            shipBattle(6)})
        $('#ship8').on('click', e => {
            shipBattle(7)})
        $('#ship9').on('click', e => {
            shipBattle(8)})
        $('#ship10').on('click', e => {
            shipBattle(9)})
        })
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
            $('#hull').text('Hull : ' + player.hull);
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
    this.aliens.push(newAlien)
    $('<div>').addClass('pirate').attr('id','ship'+this.aliens.length).attr('value', this.aliens.length-1).text('Hull: ' + newAlien.hull).appendTo('.enemyFleet')
    }       
    return this.name
    }
}

const randomNumber = (min, max) => {    
    return Math.floor(Math.random() * (max - min + 1)) + min;}

const randomFloat = (min, max) => {    
    let num = Math.random() * (max - min) + min;    
    return num.toFixed(1);}

const player = new Ship("playerName", 20, 5, .7)
const aliens = new AlienFactory("Space Pirate")
let winner = 0
let winCon

const EventHandlers = {
    makeEnemies: (ammount) => {
        let $difficulty = $('.difficulty')
        winCon = ammount;
        aliens.generateAliens(ammount);
        $difficulty.css({'display':'none'})
        $('.shipname').css({'display':'inline-block'})
    }
}

const shipBattle=(num)=>{
    player.battle(aliens.aliens[num])
    if (aliens.aliens[num].hull < 0) {
        winner++;
        // aliens.aliens.splice(num, 1);
        (event.target).remove()
    } else {
        //Knowledge on using &(this) in place of (event.target) gained from
        //https://stackoverflow.com/questions/21415436/setting-the-value-text-of-event-target-with-jquery
        $(this).text('Hull: ' + aliens.aliens[num].hull)
        aliens.aliens[num].battle(player)
    }
    didIWin()
}


const didIWin = () => {
    if (winner === winCon) {
        alert("You Win!  The Borg are defeated!")
    }else if (player.hull === 0) {
        alert("You Lose!  The Borg will assimilate Earth!")
    } 
    else {
        return
    }
}

// const didIWin = () => {
//     if (Array.isArray(aliens.aliens) && aliens.aliens.length === 0) {
//         alert("You Win!  The Borg are defeated!")
//     }else if (player.hull === 0) {
//         alert("You Lose!  The Borg will assimilate Earth!")
//     } 
//     else {
//         return
//     }
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