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
let finishCounter = 0;
let clickCounter = 0;
let firstcard = 0;
let previoustarget = 0;
let secondcard = 0;
let counter = 0;
const cloudguy = document.querySelector('.cloudguy')
const cloudbox = document.querySelector('.cloudbox')
const cloudtext = document.querySelector('.cloudtext')
const startimage = document.querySelector('.start')
const startbutton = document.querySelector('.startbutton')
const mushroomicon = document.querySelector('.mushroomicon')
const container = document.querySelector('.container')
const shufflebutton = document.querySelector('#brick')
const finishGame = document.querySelector('.finish')
const video = document.querySelector('video')
const mainAudio = document.querySelector('#main-audio')
const secondAudio = document.querySelector('#second-audio')
let audio = new Audio('themesong.mp3');
let audio2 = new Audio('levelcomplete.mp3')

// function that creates cards
const makeCard = (id, cardclass) => {
	return `<div data-id="${id}" class="${cardclass}">
	</div>`;
}
// function to remove cards
const removecards = () => {
	container.innerHTML = "";
	clickCounter = 0;
}
// function to shuffle the array
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
// function that prints cards
function printcards(cards) {
	for (let i = 0; i < cards.length; i++) {
		const card = makeCard(cards[i].id, cards[i].cardclass, );
		container.innerHTML += card;
	};
}
// makes memory visible on start game click
startbutton.addEventListener('click', () => {
	shuffle(cards);
	printcards(cards);
	startbutton.classList.add('hidden');
	startimage.classList.add('hidden');
	cloudbox.classList.add('visible');
	cloudguy.classList.add('visible');
	audio.loop = true;
	audio.play();
})
// hover effect with mushroom icon
startbutton.addEventListener('mouseover', () => {
	mushroomicon.classList.add('active');
})
startbutton.addEventListener('mouseout', () => {
	mushroomicon.classList.remove('active');
})
// reset button function
shufflebutton.addEventListener('click', () => {
	removecards(cards);
	shuffle(cards);
	printcards(cards);
	let clickCounter = 0;
	cloudtext.textContent = "CLICKS: " + clickCounter;
	audio.play();
});
// function that checks if the cards match
const checkMatch = (firstcard, secondcard, firstcardEle, secondcardEle) => {
	if (firstcard === secondcard) {
		firstcardEle.classList.add('match')
		secondcardEle.classList.add('match')
		finishCounter++
		console.log(finishCounter)

		if (finishCounter == 8) {
			let finishCounter = 0;
			audio.pause();
			audio.currentTime = 0.0;
			audio2.play();
			shufflebutton.classList.add('visible');
		}
	} else {
		firstcardEle.classList.remove('active')
		secondcardEle.classList.remove('active')
		firstcardEle.classList.remove('activeimage')
		secondcardEle.classList.remove('activeimage')

	}
}

// main function that checks if the cards id match with eachother
const clickFix = (e) => {
	clickCounter++;
	cloudtext.textContent = "CLICKS: " + clickCounter;

	if (e.target.matches('.card') && counter < 2) {
		if (e.target.classList.contains('match')) {

		} else {
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
