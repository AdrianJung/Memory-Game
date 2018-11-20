
'use strict=1';


const cards = [
  { id: 1, cardclass: 'cards card-1', image: './images/apple.png' },
  { id: 2, cardclass: 'cards card-1', image: './images/apple.png' },
  { id: 4, cardclass: 'cards card-2', image: './images/carrot.png' },
  { id: 5, cardclass: 'cards card-2', image: './images/carrot.png' },
  { id: 7, cardclass: 'cards card-3', image: './images/orange.png' },
  { id: 8, cardclass: 'cards card-3', image: './images/orange.png' },
  { id: 10, cardclass: 'cards card-4', image: './images/grapes.png' },
  { id: 11, cardclass: 'cards card-5', image: './images/grapes.png' },
  { id: 13, cardclass: 'cards card-5', image: './images/strawberry.png' },
  { id: 14, cardclass: 'cards card-6', image: './images/strawberry.png' },
  { id: 16, cardclass: 'cards card-6', image: './images/.png' },
  { id: 17, cardclass: 'cards card-7', image: './images/grapes.png' },
  { id: 19, cardclass: 'cards card-7', image: './images/grapes.png' },
  { id: 20, cardclass: 'cards card-8', image: './images/grapes.png' },
  { id: 22, cardclass: 'cards card-8', image: './images/kiwi.png' },
  { id: 23, cardclass: 'cards card-4', image: './images/kiwi.png' }
]
let firstcard = 0;
let secondcard = 0;
const container = document.querySelector('.container')
const cardsArr = [];
const shufflebutton = document.querySelector('.shuffle')
for (var i = cards.length; i--; cardsArr.unshift(cards[i]));
const removecards = () => {
	container.innerHTML = "";
}
const makeCard = (id,cardclass, image) => {
	return `<div data-id="${id}" class="${cardclass}">
	</div>`;
}
function printcards(cardsArr){
    for (let i = 0; i < cardsArr.length; i++) {
        const card = makeCard(cardsArr[i].id, cardsArr[i].cardclass, cardsArr[i].image);
        container.innerHTML += card;
    };
}
shuffle(cardsArr);
removecards(cardsArr);
printcards(cardsArr);

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const checkMatch = (firstcard, secondcard) => {
	if (firstcard-1 == secondcard || secondcard-1 == firstcard) {
		console.log("HEJ")
	}
}

document.querySelectorAll('.cards').forEach((card) => {
	card.addEventListener('click', () => {
		card.classList.toggle('active');
		if (firstcard === 0) {
			firstcard = card.dataset.id
			console.log(firstcard)
		}
		else {
			secondcard = card.dataset.id
			console.log(secondcard)
			checkMatch(firstcard, secondcard)

			firstcard = 0;
			secondcard = 0;
		}
	})
});
