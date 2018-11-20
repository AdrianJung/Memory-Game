
'use strict=1';

const cards = [
  { id: 1, cardclass: 'cards card-1', image: './images/apple.png' },
  { id: 2, cardclass: 'cards card-1', image: './images/apple.png' },
  { id: 4, cardclass: 'cards card-2', image: './images/carrot.png' },
  { id: 5, cardclass: 'cards card-2', image: './images/carrot.png' },
  { id: 7, cardclass: 'cards card-3', image: './images/orange.png' },
  { id: 8, cardclass: 'cards card-3', image: './images/orange.png' },
  { id: 10, cardclass: 'cards card-4', image: './images/grapes.png' },
  { id: 11, cardclass: 'cards card-4', image: './images/grapes.png' },
  { id: 13, cardclass: 'cards card-5', image: './images/strawberry.png' },
  { id: 14, cardclass: 'cards card-5', image: './images/strawberry.png' },
  { id: 16, cardclass: 'cards card-6', image: './images/.png' },
  { id: 17, cardclass: 'cards card-6', image: './images/grapes.png' },
  { id: 19, cardclass: 'cards card-7', image: './images/grapes.png' },
  { id: 20, cardclass: 'cards card-7', image: './images/grapes.png' },
  { id: 22, cardclass: 'cards card-8', image: './images/kiwi.png' },
  { id: 23, cardclass: 'cards card-8', image: './images/kiwi.png' }
]

shuffle(cards);
let firstcard = 0;
let secondcard = 0;
const container = document.querySelector('.container')
const shufflebutton = document.querySelector('.shuffle')
const done = [];
const makeCard = (id,cardclass, image) => {
	return `<div data-id="${id}" class="${cardclass}">
	</div>`;
}

for (let i = 0; i < cards.length; i++) {
    const card = makeCard(cards[i].id, cards[i].cardclass, cards[i].image);
    container.innerHTML += card;
};

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

let isselected = 0

document.querySelectorAll('.cards').forEach((card) => {
	const checkMatch = (firstcard, secondcard) => {
		if (firstcard-1 == secondcard || secondcard-1 == firstcard) {
			card.classList.add('active')
		} else {
			console.log("no match")
		}
	}
	card.addEventListener('click', () => {
		console.log(isselected)
		if (isselected == 2) {
			console.log("You already chose 2!")

		} else {
			isselected++
		}

			if (firstcard === 0) {
				firstcard = card.dataset.id

			}
			else {
				secondcard = card.dataset.id
				checkMatch(firstcard, secondcard)
				isselected = 0;
				firstcard = 0;
				secondcard = 0;
			}
	})
});
