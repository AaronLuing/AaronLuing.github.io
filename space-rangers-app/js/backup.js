$(() => {
    $('.game-canvas').css({'display':'none'})
    $('.shipname').css({'display':'none'})
    
    $('form').on('submit', (event) => {
        const playerName = $('.namebox').val();
        player.name = playerName;
        $('#player-ship').text(player.name);
        $('#hull').text('Hull : ' + player.hull);
        $('#firepower').text('Firepower : ' + player.firepower);
        $('#accuracy').text('Accuracy : ' + player.accuracy);
        $('.shipname').css({'display':'none'});
        $('.game-canvas').css({'display':'inline-block'})
        event.preventDefault();
        console.log($('#ship1'))
        $('#ship1').on('click', shipBattle())
        $('#ship2').on('click', shipBattle())
        $('#ship3').on('click', shipBattle())
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
    $('<div>').addClass('pirate').attr('id','ship'+this.aliens.length) .text('Hull: ' + newAlien.hull).appendTo('.enemyFleet')
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
const alien = new AlienFactory("Space Pirate")

const EventHandlers = {
    makeEnemies: (ammount) => {
        let $difficulty = $('.difficulty')
        alien.generateAliens(ammount);
        $difficulty.css({'display':'none'})
        $('.shipname').css({'display':'inline-block'})
    }
}

const shipBattle=(num)=>{
    player.battle(alien.aliens[num])
    if (alien.aliens[num].hull < 0) {
        alien.aliens.splice(num, 1)
    } else {
    alien.aliens[num].battle(player)
    }
    didIWin()
}
const didIWin = () => {
    if (Array.isArray(alien.aliens) && alien.aliens.length === 0) {
        alert("You Win!  The Borg are defeated!")
    }else if (player.hull === 0) {
        alert("You Lose!  The Borg will assimilate Earth!")
    } 
    else {
        return
    }
}
// function shipBattle() {
//     let $target = $(event.target)
//     player.battle($target)
//     if ($target.hull < 0) {
//             $target.splice()
//             } else {
//             $target.battle(player)
//             }
//             didIWin()
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

//////// ACTUAL CODE
// $(() => {
//     $('.game-canvas').css({'display':'none'})
//     $('.shipname').css({'display':'none'})
    
//     $('form').on('submit', (event) => {
//         const playerName = $('.namebox').val();
//         player.name = playerName;
//         $('#player-ship').text(player.name);
//         $('#hull').text('Hull : ' + player.hull);
//         $('#firepower').text('Firepower : ' + player.firepower);
//         $('#accuracy').text('Accuracy : ' + player.accuracy);
//         $('.shipname').css({'display':'none'});
//         $('.game-canvas').css({'display':'inline-block'})
//         event.preventDefault();
        $('#ship1').on('click', Battle.fightOne)
        $('#ship2').on('click', EventHandlers.shipBattle(1))
        $('#ship3').on('click', EventHandlers.shipBattle(2))
//     })
// })


// class Ship {
//     constructor(name, hull, firepower, accuracy) {
//         this.name = name
//         this.hull = hull
//         this.firepower = firepower
//         this.accuracy = accuracy
//     }
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
//     }
// }
// class AlienFactory {    
//     constructor(alienname) {        
//     this.name = alienname        
//     this.aliens = [] 
//     }    
//     generateAliens(ammount) {
//     for (let i = 0; i < ammount; i++) {       
//     const newAlien = new Ship(this.name + ' ' + (this.aliens.length+1),randomNumber(3, 6), randomNumber(2, 4), randomFloat(.6, .8))        
//     this.aliens.push(newAlien)
//     $('<div>').addClass('pirate').attr('id','ship'+this.aliens.length) .text('Hull: ' + newAlien.hull).appendTo('.enemyFleet')
//     }       
//     return this.name
//     }
// }

// const randomNumber = (min, max) => {    
//     return Math.floor(Math.random() * (max - min + 1)) + min;}

// const randomFloat = (min, max) => {    
//     let num = Math.random() * (max - min) + min;    
//     return num.toFixed(1);}

// const player = new Ship("playerName", 20, 5, .7)
// const alien = new AlienFactory("Space Pirate")

// const EventHandlers = {
//     makeEnemies: (ammount) => {
//         let $difficulty = $('.difficulty')
//         alien.generateAliens(ammount);
//         $difficulty.css({'display':'none'})
//         $('.shipname').css({'display':'inline-block'})
//     },
    shipBattle: (num) => {
        player.battle(alien.aliens[num])
        if (alien.aliens[num].hull < 0) {
            alien.aliens.splice(num, 1)
        } else {
        alien.aliens[num].battle(player)
        }
        didIWin()
    }
}

// const shipBattle=(num)=>{
//     player.battle(alien.aliens[num])
//     if (alien.aliens[num].hull < 0) {
//         alien.aliens.splice(num, 1)
//     } else {
//     alien.aliens[num].battle(player)
//     }
//     didIWin()
// }

const Battle = {
    fightOne: () => {
        player.battle(alien.aliens[0])
        if (alien.aliens[0].hull < 0) {
            alien.aliens.splice(0, 1)
        } else {
        alien.aliens[0].battle(player)
        }
        didIWin()
    },
    fightTwo: () => {
        player.battle(alien.aliens[1])
        if (alien.aliens[1].hull < 0) {
            alien.aliens.splice(1, 2)
        } else {
        alien.aliens[1].battle(player)
        }
        didIWin()
    },
    fightThree: () => {
        player.battle(alien.aliens[2])
        if (alien.aliens[2].hull < 0) {
            alien.aliens.splice(2)
        } else {
        alien.aliens[2].battle(player)
        }
        didIWin()
    },
}

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

////////Code 2
$(() => {
    $('.game-canvas').css({'display':'none'})
    $('.shipname').css({'display':'none'})
    
    $('form').on('submit', (event) => {
        const playerName = $('.namebox').val();
        player.name = playerName;
        $('#player-ship').text(player.name);
        $('#hull').text('Hull : ' + player.hull);
        $('#firepower').text('Firepower : ' + player.firepower);
        $('#accuracy').text('Accuracy : ' + player.accuracy);
        $('.shipname').css({'display':'none'});
        $('.game-canvas').css({'display':'inline-block'})
        event.preventDefault();
        // $('#ship1').on('click', shipBattle(0))
        // $('#ship2').on('click', shipBattle(1))
        // $('#ship3').on('click', shipBattle(2))
    })
})

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    battle = (enemy) => {
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
    $('<div>').addClass('pirate').attr('id','ship'+this.aliens.length) .text('Hull: ' + newAlien.hull).appendTo('.enemyFleet')
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
const alien = new AlienFactory("Space Pirate")

const EventHandlers = {
    makeEnemies: (ammount) => {
        let $difficulty = $('.difficulty')
        alien.generateAliens(ammount);
        $difficulty.css({'display':'none'})
        $('.shipname').css({'display':'inline-block'})
    }
}

const shipBattle=(num)=>{
    player.battle(alien.aliens[num])
    if (alien.aliens[num].hull < 0) {
        alien.aliens.splice(num, 1)
    } else {
    alien.aliens[num].battle(player)
    }
    didIWin()
}
const didIWin = () => {
    if (Array.isArray(alien.aliens) && alien.aliens.length === 0) {
        alert("You Win!  The Borg are defeated!")
    }else if (player.hull === 0) {
        alert("You Lose!  The Borg will assimilate Earth!")
    } 
    else {
        return
    }
}
// function shipBattle() {
//     let $target = $(event.target)
//     player.battle($target)
//     if ($target.hull < 0) {
//             $target.splice()
//             } else {
//             $target.battle(player)
//             }
//             didIWin()
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
