// Sound effects provided by freesound.org
// Modal assembly provided by
//  https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/1_front_end_development/w03d02/morning_exercise
$(() => {
    $('.openModal1').css({'display':'none'})
    $('.title').css({'display':'none'})
    $('.difficulty').css({'display':'none'})
    $('.game-canvas').css({'display':'none'})
    $('.shipname').css({'display':'none'})
    $('#modal1').css({'display':'none'})
    $('#endModal').css({'display':'none'})

    const $intro = $('#intro');
    const $closeIntro = $('#closeintro');
    const $openBtn = $('.openModal1');
    const $modal1 = $('#modal1');
    const $closeBtn = $('#close');
    const $end = $('#endModal');
    const $refresh = $('#refresh');
    const $closeEnd = $('#closeEnd');

    const reLoad = () => {
        location.reload()
    }
    const baskInGlory = () => {
        $end.css({'display':'none'})
    }

    const exitIntro = () => {
        $intro.css({'display':'none'});
        $('.title').css({'display':''});
        $('.difficulty').css({'display':''})
        $('.openModal1').css({'display':''})
    }
    const openAbout = () => {
        $modal1.css({'display':'block'})
    }
    const closeAbout = () => {
        $modal1.css({'display':'none'})
    }
    $closeIntro.on('click', exitIntro)
    $openBtn.on('click', openAbout)
    $closeBtn.on('click', closeAbout)
    $refresh.on('click', reLoad)
    $closeEnd.on('click', baskInGlory)
    
    $('form').on('submit', (event) => {
        event.preventDefault();
        const playerName = $('.namebox').val();
        player.name = playerName;
        buttonUse.play();
        $('#player-ship').text(player.name);
        $('#hull').text('Hull : ' + player.hull);
        $('#firepower').text('Firepower : ' + player.firepower);
        $('#accuracy').text('Accuracy : ' + player.accuracy);
        $('.shipname').css({'display':'none'});
        $('.game-canvas').css({'display':''})
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
        $('.fleebattle').on('click', runAway)
        $('.repair').on('click', repairHull)
})
const fire = new Audio('audio/laser-blast-short.wav')
const hit = new Audio('audio/impact-boom-short.wav')
const destroyed = new Audio('audio/explosion-2.wav')
const victory = new Audio('audio/woohoo.mp3')
const buttonUse = new Audio('audio/buttons.wav')


//code for delay setup recieved from 
//https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line/14226807#14226807
// const delay = ms => new Promise(res => setTimeout(res, ms));

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    battle(enemy) {
        fire.play();
        $('.info').text(this.name + ' attacks ' + enemy.name);
        alert(this.name + ' attacks ' + enemy.name)
        console.log(this.name + ' attacks ' + enemy.name);
        if (this.accuracy > Math.random()) {
            hit.play();
            enemy.hull -= this.firepower;
            $('#hull').text('Hull : ' + player.hull);
        } else {
            $('.info').text('Missed!  Shot didn\'t connect!')
            alert('Missed!  Shot didn\'t connect!')
            console.log('Missed!  Shot didn\'t connect!')
            return
        }
        if (enemy.hull > 0) {
            $('.info').text('Direct hit!  ' +enemy.name+ '\'s hull integrity is at ' + enemy.hull)
            alert('Direct hit!  ' +enemy.name+ '\'s hull integrity is at ' + enemy.hull)    
            console.log('Direct hit!  ' +enemy.name+ '\'s hull integrity is at ' + enemy.hull);
            } else {
                $('.info').text('Direct hit!  ' +enemy.name+ ' is destroyed!')
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
        buttonUse.play();
        $difficulty.css({'display':'none'})
        $('.shipname').css({'display':'inline-block'})
    }
}

const shipBattle=(num)=>{
    player.battle(aliens.aliens[num])
    if (aliens.aliens[num].hull <= 0) {
        destroyed.play();
        winner++;
        (event.target).remove()
    } else {
        $(event.target).text('Hull: ' + aliens.aliens[num].hull)
        aliens.aliens[num].battle(player)
    }
    didIWin()
}

const winScreen = () => {
    $('#endHeader').text('You Won!');
    $('#endMessage').text('You defeated all the pirates!  You are a true Space Ranger!')
    $('#endModal').css({'display':'block'})
}
const loseScreen = () => {
    $('#endHeader').text('You Lost!');
    $('#endMessage').text('The pirates will loot and pillage across the system!')
    $('#endModal').css({'display':'block'})
}

const didIWin = () => {
    if (winner === winCon) {
        victory.play();
        winScreen();
        // alert("You Win!  The pirates are defeated!")
        $('.info').text("You Win!  The pirates are defeated!")
    }else if (player.hull <= 0) {
        loseScreen();
        // alert("You Lost!  The pirates will loot and pillage across the system!")
        $('.info').text("You Lost!  The pirates will loot and pillage across the system!")
    } 
    else {
        return
    }
}

const runAway=()=>{
    let coward = prompt("Are you sure?","yes or no")
        if (coward === "yes") {
            alert("You abandoned your post!  You'll be stripped of your command for this!")
            location.reload()
        }
        else {
            alert("You decided to stand your ground like a true Space Ranger!")
        }
}

const repairHull = () => {
    if (player.hull <= 10) {
        player.hull += 5
        alert("Diverting power to the main coupling!")
        $('#hull').text('Hull : ' + player.hull);
        alert("Your hull strength is now " + player.hull + "!")
    }
    else if (player.hull >= 15) {
        alert("We're givin' 'er all she's got, Capt'n!!")
        alert("You can only boost shield if your hull is less than 10")
    }
}