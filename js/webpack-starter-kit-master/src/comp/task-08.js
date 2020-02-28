import { refs } from "./link/refs";

let size = 30;
let amount = 0;

const howManeCreate = () => {
	if (refs.howMany.value > 100) {
		amount = 0;
	} else if (refs.howMany.value < -1) {
		amount = 0;
	} else if (refs.howMany.value >= 1 && refs.howMany.value <= 100) {
		amount = refs.howMany.value;
	}
};

const createBox = () => {
	for (let i = 0; i <= amount - 1; i++) {
		refs.innerWrapper.insertAdjacentHTML(
			"afterbegin",
			`<div style = "width: ${size}px; height: ${size}px; background-color: ${random_rgba()};"></div>`
		);
		size += 10;
	}
};

const handelRemoveBoxes = () => {
	refs.innerWrapper.innerHTML = ``;
	size = 30;
};

function random_rgba() {
	let o = Math.round,
		r = Math.random,
		s = 255;
	return (
		"rgba(" +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		r().toFixed(1) +
		")"
	);
}

refs.howMany.addEventListener("change", howManeCreate);
refs.createdContainers.addEventListener("click", createBox);
refs.destroyedContainers.addEventListener("click", handelRemoveBoxes);
