// var button = document.querySelector(".btn");
// button.addEventListener("click", start);
// var randomnumber1 = 6;
// var randomnumber2 = 6;
// if(randomnumber1 == 6 && randomnumber2 == 6)
// {
//     document.querySelector(".rfrsh").innerHTML = "Refresh Me";
// }
// randomnumber1 = Math.floor((Math.random()*6)+1);
// randomnumber2 = Math.floor((Math.random()*6)+1);
// console.log(randomnumber1);
// console.log(randomnumber2);
// var randiceimg1 = "dice"+randomnumber1+".png";
// var randiceimg2 = "dice"+randomnumber2+".png";
// var randimg1src = "images/"+randiceimg1;
// var randimg2src = "images/"+randiceimg2;
// var img1 = document.querySelector(".i1");
// var img2 = document.querySelector(".i2");
// img1.setAttribute("src",randimg1src);
// img2.setAttribute("src",randimg2src);
// if(randomnumber1>randomnumber2)
// {
//     document.querySelector(".rfrsh").innerHTML = "🚩Player 1 Wins";
// }
// else if(randomnumber1<randomnumber2)
// {
//     document.querySelector(".rfrsh").innerHTML = "Player 2 Wins🚩";
// }
// else
// {
//     document.querySelector(".rfrsh").innerHTML = "Draw!";
// }

var button = document.querySelector(".btn");
button.addEventListener("click", start);

function start() {
  // First Dice
  var randomNumber1 = (Math.floor(Math.random() * 6) + 1); // 1-6
  document.querySelector(".i1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // dice1.png - dice6.png

  // Second Dice
  var randomNumber2 = (Math.floor(Math.random() * 6) + 1); // 1-6
  document.querySelector(".i2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Results
  // player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".rfrsh").innerHTML = "&#128681; Player 1 Wins!";
  }
  // player 2 wins
  else if (randomNumber1 < randomNumber2) {
    document.querySelector(".rfrsh").innerHTML = "Player 2 Wins! &#128681;";
  }
  // draw 
  else {
    document.querySelector(".rfrsh").innerHTML = "Draw!";
  }

}
