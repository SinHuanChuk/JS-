import { images, refs } from "./link/refs";

const imagesToDom = images
	.map(
		elem =>
			`<li class = 'gallery--item'><img src = '${elem.url}' alt = '${elem.alt}'></li>`
	)
	.join("");

refs.gallery.insertAdjacentHTML("afterbegin", imagesToDom);
