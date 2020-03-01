import { refs } from "./link/refs";

const greeting = () => {
	refs.output.textContent = refs.input.value;
	if (refs.input.value === "") {
		refs.output.textContent = "незнакомец";
	}
};

refs.input.addEventListener("change", greeting);
