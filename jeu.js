let choices = ['rock', 'paper', 'scissors'];
let index = Math.floor(Math.random() * choices.length);
let random = choices[index];    
let choixAdverse = document.getElementsByClassName('random-choice')
choixAdverse[0].id=random
console.log(random);

function testPierre (){
    let choix = document.getElementById("rock-1")
    choixFinal(choix.id);
}

function testFeuille (){
    let choix = document.getElementById("paper-1")
    choixFinal(choix.id);
}

function testCiseau (){
    let choix = document.getElementById("scissors-1")
    choixFinal(choix.id);
}

function choixFinal(choice){
    let affichage = document.getElementById('result')
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
     let random = choices[index];    
    let choixAdverse = document.getElementsByClassName('random-choice');
    if(choixAdverse[0].id == 'rock') {
        choixAdverse[0].innerHTML = '<img src="rock.png" alt="Rock" class="random-img">';
    } else if (choixAdverse[0].id == 'paper') {

        choixAdverse[0].innerHTML = '<img src="paper.jpg" alt="Paper" class="random-img">';
    } else {

        choixAdverse[0].innerHTML = '<img src="scissors.jpg" alt="Scissors" class="random-img">';
    }


   if((choixAdverse[0].id == "rock" && choice=='paper-1') || (choixAdverse[0].id == "paper" && choice=='scissors-1') || (choixAdverse[0].id == "scissors" && choice=='rock-1')){
    
    affichage.innerHTML = 'Tu as gagné la partie '
    choixAdverse[0].id=random
   }
   else if((choixAdverse[0].id == "rock" && choice=='rock-1') || (choixAdverse[0].id == "paper" && choice=='paper-1') || (choixAdverse[0].id == "scissors" && choice=='scissors-1')){
    
    affichage.innerHTML = 'Tu as fait une Egalité. '
    choixAdverse[0].id=random
   }
   else{
    
    affichage.innerHTML = 'Tu as perdu la partie ! '
    choixAdverse[0].id=random

   }
    
}
