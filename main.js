var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = {};

alert("Helo friends!");

/*

if(cardOne===cardTwo) {
	alert("You found a match!");
}
else if(cardThree===cardFour) {
	alert("You found a match!")
}
else {
	alert("Sorry try again.")
}
*/


var board = document.getElementById('game-board');

var createBoard = function() {
	for(var i = 0; i<cards.length; i++) {
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		board.appendChild(cardElement)
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
	}
}

var isMatch = function () {
	 cardsInPlay.push(this.getAttribute('data-card'));

	 console.log(this.getAttribute('data-card'));
	 if(this.getAttribute('data-card')===king) {
	 	this.innerHTML = <img src="https://a.fsdn.com/con/app/proj/vector-cards/screenshots/KH.png" alt="King of Spades">
	 }
	 else {
	 	this.innerHTML = <img src="http://ecx.images-amazon.com/images/I/41YPuqi7LFL.jpg" alt="Queen of hearts">;
	 }

	 if (cardsInPlay.length === 2) {
	 	isMatch(cardsInPlay);
	 	cardsInPlay = [];
}