import { refs } from "./link/refs";

const changeColor = () => {
	if (refs.valid.value.length > refs.valid.dataset.length) {
		refs.valid.id = "validation-inputInvalid";
	} else {
		refs.valid.id = "validation-inputValid";
	}
};

refs.valid.addEventListener("blur", changeColor);
