
'use strict=1';

const cards = [
  { id: 1, image: './images/apple.png' },
  { id: 1, image: './images/banana.png' },
  { id: 2, image: './images/carrot.png' },
  { id: 2, image: './images/strawberry.png' },
  { id: 3, image: './images/orange.png' },
  { id: 3, image: './images/grapes.png' },
  { id: 4, image: './images/grapes.png' },
  { id: 4, image: './images/grapes.png' },
  { id: 5, image: './images/grapes.png' },
  { id: 5, image: './images/grapes.png' },
  { id: 6, image: './images/grapes.png' },
  { id: 6, image: './images/grapes.png' },
  { id: 7, image: './images/grapes.png' },
  { id: 7, image: './images/grapes.png' },
  { id: 8, image: './images/grapes.png' },
  { id: 8, image: './images/kiwi.png' }
]
const container = document.querySelector('.container')
const cardsArr = [];
let firstcard = 0;
let secondcard = 0;

const shufflebutton = document.querySelector('.shuffle')

for (var i = cards.length; i--; cardsArr.unshift(cards[i]));

const makeCard = (id,image) => {
	return `<div class="cards" data-id="${id}">
	</div>`;
}

for (let i = 0; i < cards.length; i++) {
	const card = makeCard(cards[i].id, cards[i].image);
	container.innerHTML += card;
};

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

shufflebutton.addEventListener('click', () => {
	shuffle(cardsArr);
	console.log(cardsArr);

})
//
// const checkMatch = () => {
// 	return firstcard === secondcard;
// }
//
//
// Array.from(cards).forEach((card) => {
//   card.addEventListener('click', () => {
// 		console.log("click")
// 		card.classList.toggle('active');
// 		if (firstcard === 0) {
// 			firstcard = card.dataset.cardId
// 		}
// 		else {
// 			secondcard = card.dataset.cardId
// 			if (checkMatch(firstcard, secondcard)) {
//
// 				console.log("same");
// 			}
// 			firstcard = 0;
// 			secondcard = 0;
// 		}
// 	})
// });
