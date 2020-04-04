import { link } from "../refs/refs";

const rotate = () => {
	link.nav.classList.toggle("open");
	link.trigger.classList.toggle("rotate-trigger");
};

link.trigger.addEventListener("click", rotate);
