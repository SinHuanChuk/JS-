import { refs } from "./link/refs";

const fontSizeChange = () => {
	refs.fontSizeOutPut.style = `font-size: ${refs.fontSizeControl.value}px`;
};

refs.fontSizeControl.addEventListener("change", fontSizeChange);
