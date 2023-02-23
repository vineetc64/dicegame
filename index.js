var randomnumber1 = Math.floor((Math.random()*6)+1);
var randomnumber2 = Math.floor((Math.random()*6)+1);
var randiceimg1 = "dice"+randomnumber1+".png";
var randiceimg2 = "dice"+randomnumber2+".png";
var randimg1src = "images/"+randiceimg1;
var randimg2src = "images/"+randiceimg2;
var img1 = document.querySelector(".i1");
var img2 = document.querySelector(".i2");
img1.setAttribute("src",randimg1src);
img2.setAttribute("src",randimg2src);
if(randomnumber1>randomnumber2)
{
    document.querySelector(".rfrsh").innerHTML = "🚩Player 1 Wins";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector(".rfrsh").innerHTML = "Player 2 Wins🚩";
}
else
{
    document.querySelector(".rfrsh").innerHTML = "Draw!";
}