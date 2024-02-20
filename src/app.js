/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[randomSuitIndex];
  const numbers = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Queen", "King"];
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomNumber = numbers[randomNumberIndex];
  const selectedCardDiv = document.getElementById("card");
  //selectedCardDiv.innerHTML = `${randomSuit} ${randomNumber}`;
  const suit1 = document.getElementById("suit1");
  suit1.innerHTML = randomSuit;
  const suit2 = document.getElementById("suit2");
  suit2.innerHTML = randomSuit;
  const number = document.getElementById("number");
  number.innerHTML = randomNumber;
  if (randomSuit === "♥" || randomSuit === "♦") {
    document.getElementById("suit1").style.color = "red";
    document.getElementById("suit2").style.color = "red";
  } else {
    document.getElementById("suit1").style.color = "black";
    document.getElementById("suit2").style.color = "black";
  }
}
document.getElementById("changeCard").addEventListener("click", newCard);
function changeWidth() {
  const width = document.getElementById("width").value;
  document.getElementById("card").style.width = width + "px";
}
function changeHeight() {
  const height = document.getElementById("height").value;
  document.getElementById("card").style.height = height + "px";
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const activeElement = document.activeElement;
    if (activeElement.id === "width") {
      changeWidth();
    } else if (activeElement.id === "height") {
      changeHeight();
    }
  }
});
