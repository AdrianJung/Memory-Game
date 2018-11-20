


const cards = document.querySelectorAll('.card');
let firstcard = 0;
let secondcard = 0;

const checkMatch = () => {
	return firstcard === secondcard;
}
Array.from(cards).forEach((card) => {
  card.addEventListener('click', () => {
		console.log("click")
	card.classList.toggle('active');
	if (firstcard === 0) {
		firstcard = card.dataset.cardId
	}
	else {
		secondcard = card.dataset.cardId
		if (checkMatch(firstcard, secondcard)) {
			console.log("same");
		}
	firstcard = 0;
	secondcard = 0;

		}
	})
});
