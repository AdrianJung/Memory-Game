'use strict=1';

const cards = [
  { id: 1, cardclass: 'card card-1', image: './images/apple.png' },
  { id: 1, cardclass: 'card card-1', image: './images/apple.png' },
  { id: 2, cardclass: 'card card-2', image: './images/carrot.png' },
  { id: 2, cardclass: 'card card-2', image: './images/carrot.png' },
  { id: 3, cardclass: 'card card-3', image: './images/orange.png' },
  { id: 3, cardclass: 'card card-3', image: './images/orange.png' },
  { id: 4, cardclass: 'card card-4', image: './images/grapes.png' },
  { id: 4, cardclass: 'card card-4', image: './images/grapes.png' },
  { id: 5, cardclass: 'card card-5', image: './images/strawberry.png' },
  { id: 5, cardclass: 'card card-5', image: './images/strawberry.png' },
  { id: 6, cardclass: 'card card-6', image: './images/.png' },
  { id: 6, cardclass: 'card card-6', image: './images/grapes.png' },
  { id: 7, cardclass: 'card card-7', image: './images/grapes.png' },
  { id: 7, cardclass: 'card card-7', image: './images/grapes.png' },
  { id: 8, cardclass: 'card card-8', image: './images/kiwi.png' },
  { id: 8, cardclass: 'card card-8', image: './images/kiwi.png' }
]

let firstcard = 0;
let previoustarget = 0;
let secondcard = 0;
let counter = 0;
const container = document.querySelector('.container')
const shufflebutton = document.querySelector('.reset')
const makeCard = (id, cardclass, image) => {
	return `<div data-id="${id}" class="${cardclass}">
	</div>`;
}

const removecards = () => {
	container.innerHTML = "";
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function printcards(cards) {
	for (let i = 0; i < cards.length; i++) {
		const card = makeCard(cards[i].id, cards[i].cardclass, cards[i].image);
		container.innerHTML += card;
	};
}

shuffle(cards);
removecards(cards);
printcards(cards);

shufflebutton.addEventListener('click', () => {
	removecards(cards);
	shuffle(cards);
	printcards(cards);
})

const checkMatch = (firstcard, secondcard, firstcardEle, secondcardEle) => {
	if (firstcard === secondcard) {
		finishCounter++
		if (finishCounter == 8) {

		}

	} else {
		firstcardEle.classList.remove('active')
		secondcardEle.classList.remove('active')
	}
}
let finishCounter = 0;
const clickFix = (e) => {
	if (e.target.matches('.card')) {

		if (previoustarget !== e.target || counter == 0) {
			e.target.classList.add('active')
				++counter

			if (firstcard === 0) {
				firstcard = e.target.dataset.id
				firstcardEle = e.target
			} else {
				secondcard = e.target.dataset.id
				secondcardEle = e.target
				if (counter == 2) {
					setTimeout(() => {
						checkMatch(firstcard, secondcard, firstcardEle, secondcardEle)
						counter = 0;
						firstcard = 0;
						secondcard = 0;
					}, 600)
				}
			}
		}
		previoustarget = e.target
	}
}

container.addEventListener('click', clickFix)
