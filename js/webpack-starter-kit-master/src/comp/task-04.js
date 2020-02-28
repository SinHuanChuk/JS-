import { refs } from "./link/refs";

let counterValue = 0;

const increment = () => {
	counterValue += 1;
	refs.value.textContent = counterValue;
};

const decrement = () => {
	counterValue -= 1;
	refs.value.textContent = counterValue;
};

refs.plus.addEventListener("click", increment);
refs.minus.addEventListener("click", decrement);
