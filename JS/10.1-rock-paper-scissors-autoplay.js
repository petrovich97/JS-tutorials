

let score =JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties:0
};
/*
if(score===null){ //ili !score
  score = {
    wins: 0,
    losses: 0,
    ties:0
  };
}
  */     

updateScore();
  
function pickComputerMove(){
  let randNmbr = Math.random();

  if(randNmbr>=0 && randNmbr < 1/3){
    return 'rock';
  }
  else if (randNmbr >= 1/3 && randNmbr <2/3){
    return 'paper';
  }
  else if(randNmbr>= 2/3 && randNmbr<1){
    return 'scissors';
  }
  
}


let isAutoPlaying = false;
let intervalID;

function autoPlay(){

  if(!isAutoPlaying){
   intervalID = setInterval(function(){  //cuvamo povratnu vrednost (id) da bismo zaustavili setInterval
    const playerMove= pickComputerMove();
    playGame(playerMove);
  },2000);
  isAutoPlaying=true;
  }
  else{
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

function playGame(playerMove){
  const compMove = pickComputerMove();
  let result='';

  if(playerMove === 'rock'){
    if(compMove === 'rock'){
      result = 'Tie!';
      score.ties++;
    }
    else if(compMove === 'paper'){
      result = 'You lose!';
      score.losses++; 
    }
    else if(compMove === 'scissors'){
      result = 'You win!';
      score.wins++;
    }
  }
  else if (playerMove=='paper'){
    if(compMove === 'rock'){
      result = 'You win!';
      score.wins++;
    }
    else if(compMove === 'paper'){
      result = 'Tie!'; 
      score.ties++;
    }
    else if(compMove === 'scissors'){
      result = 'You lose!';
      score.losses++;
    }
  }
  else if(playerMove=='scissors'){
    if(compMove === 'rock'){
      result = 'You lose!';
      score.losses++;
    }
    else if(compMove === 'paper'){
      result = 'You win!'; 
      score.wins++;
    }
    else if(compMove === 'scissors'){
      result = 'Tie!';
      score.ties++;
    }
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML= result;
  document.querySelector('.js-moves').innerHTML= `You picked
<img src="Images/${playerMove}-emoji.png" class="move-icon">  , computer picked
<img src="Images/${compMove}-emoji.png" class="move-icon">`;
  
}




function updateScore(){
  document.querySelector('.js-score')
  .innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

    