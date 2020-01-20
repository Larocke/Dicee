let player1Result = Math.ceil(Math.random() * 6);
let player2Result = Math.ceil(Math.random() * 6);
let h1Text;

if(player1Result > player2Result){
  h1Text = "Player 1 Wins";
}else if(player1Result < player2Result){
  h1Text = "Player 2 Wins";
}else{
  h1Text="Draw";
}

document.getElementsByClassName("img1")[0].src = "images/dice" + player1Result +".png";
document.getElementsByClassName("img2")[0].src = "images/dice" + player2Result +".png";
document.querySelector("h1").innerHTML = h1Text;
