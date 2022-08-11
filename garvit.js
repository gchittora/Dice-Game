//Player 1
var random0 = Math.floor(Math.random() * 6) + 1;
var image0 = document.querySelectorAll("img")[0];
var diceimage0 = "images/" + "dice" + random0 + ".png";
image0.setAttribute("src", diceimage0);

//Player 2
var random1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomimage = "dice" + random1 + ".png"; //dice1-dice6
var diceimage1 = "images/" + randomimage; //images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", diceimage1);

if (random0 > random1) {
    document.querySelector("h2").innerHTML = "🏁Player 1 wins";
} else if (random1 > random0) {
    document.querySelector("h2").innerHTML = "🏁Player 2 wins";

} else {
    document.querySelector("h2").innerHTML = "Draw!";

}