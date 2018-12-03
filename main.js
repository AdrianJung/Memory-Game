'use strict=1';

const cards = [
  { id: 1, cardclass: 'card card-1'},
  { id: 1, cardclass: 'card card-1'},
  { id: 2, cardclass: 'card card-2'},
  { id: 2, cardclass: 'card card-2'},
  { id: 3, cardclass: 'card card-3'},
  { id: 3, cardclass: 'card card-3'},
  { id: 4, cardclass: 'card card-4'},
  { id: 4, cardclass: 'card card-4'},
  { id: 5, cardclass: 'card card-5'},
  { id: 5, cardclass: 'card card-5'},
  { id: 6, cardclass: 'card card-6'},
  { id: 6, cardclass: 'card card-6'},
  { id: 7, cardclass: 'card card-7'},
  { id: 7, cardclass: 'card card-7'},
  { id: 8, cardclass: 'card card-8'},
  { id: 8, cardclass: 'card card-8'}
]

let firstcard = 0;
let previoustarget = 0;
let secondcard = 0;
let counter = 0;
const startbutton = document.querySelector('startbutton');
const container = document.querySelector('.container')
const shufflebutton = document.querySelector('#brick')
const finishGame = document.querySelector('.finish')
const video = document.querySelector('video');
const mainAudio = document.querySelector('#main-audio')
const secondAudio = document.querySelector('#second-audio')

const makeCard = (id, cardclass) => {
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
		const card = makeCard(cards[i].id, cards[i].cardclass,);
		container.innerHTML += card;
	};
}
startbutton.addEventListener('mouseover', () => {

})

// shuffle(cards);
// printcards(cards);

shufflebutton.addEventListener('click', () => {
	removecards(cards);
	shuffle(cards);
	printcards(cards);
});

const checkMatch = (firstcard, secondcard, firstcardEle, secondcardEle) => {
	if (firstcard === secondcard) {
		firstcardEle.classList.add('match')
		secondcardEle.classList.add('match')
		finishCounter++
		console.log(finishCounter)

		if (finishCounter == 1) {
			mainAudio.parentNode.removeChild(mainAudio);
			secondAudio.muted = false;

			removecards(cards);
			let finishCounter = 0;
			console.log(finishCounter)

		}
	} else {
		firstcardEle.classList.remove('active')
		secondcardEle.classList.remove('active')
		firstcardEle.classList.remove('activeimage')
		secondcardEle.classList.remove('activeimage')

	}
}

let finishCounter = 0;
const clickFix = (e) => {
	if (e.target.matches('.card') && counter < 2) {
		if (e.target.classList.contains('match')) {

		}
		else {
			if (previoustarget !== e.target || counter == 0) {
				e.target.classList.add('active')
				setTimeout(() => {
					e.target.classList.add('activeimage')
				}, 300);
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
						}, 1100)
					}
				}
			}
			previoustarget = e.target
		}
	}
}

container.addEventListener('click', clickFix)
