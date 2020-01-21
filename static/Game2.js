var goodWords = ['Good','Happiness','Love','Life','People','Friends'];
var badWords  = ['Loneliness','Worthless','Hate','Bad','Sad','Fear'];
var neutralWords = ['Cars','Bikes','Food','Water','Class',];
var selectedStack = []; //not in use 
score = -1; // person score
rounds = 0;
endGame = 12; //maximum no of rounds
GBtn = document.getElementById('Good')
NBtn = document.getElementById('Neutral')
BBtn = document.getElementById('Bad') 
var displayBad,displayGood,displayNeutral 
var gameover = document.getElementById('gameOver')
var ShowScore = document.getElementById('Score')
var restartBtn = document.getElementById('restartBtn')   
function collectScore(points){
       score +=points;
       console.log(score)
       selectWords()
       GBtn.innerText = displayGood
       NBtn.innerText = displayNeutral
       BBtn.innerText = displayBad
       rounds++;
       if(rounds>endGame){
          gameover.style.display = "block";
          ShowScore.innerText = "Your Score is:"+score
          GBtn.style.display = "none";
          NBtn.style.display = "none";
          BBtn.style.display ="none";
          restartBtn.style.display ="inline";
       }
}
function selectWords(){
      let max = 5,min = 1; 
      rand1 = parseInt(Math.random() * (max - min) + min); 
      rand2 = parseInt(Math.random() * (max - min) + min);
      rand3 =  parseInt(Math.random() * (max - min) + min);
      console.log("Rnad"+Math.random(1,6))
      displayBad = badWords[rand1];
      console.log("BAd"+displayBad)
      displayGood = goodWords[rand2];
      displayNeutral = neutralWords[rand3];
   

}