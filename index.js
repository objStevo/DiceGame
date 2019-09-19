/*jshint esversion: 6 */

var returnDiceImg = (randomNumber) => {
  return "./images/dice" + randomNumber + ".png";
}

var returnRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = returnRandomNumber();
document.querySelector(".img1").setAttribute("src",returnDiceImg(randomNumber1));

var randomNumber2 = returnRandomNumber();
document.querySelector(".img2").setAttribute("src",returnDiceImg(randomNumber2));

if(randomNumber1 == randomNumber2){
  document.querySelector("h1").textContent = "draw";
}else if(randomNumber2<randomNumber1){
  document.querySelector("h1").textContent = "Player 1 Wins!";
}else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
