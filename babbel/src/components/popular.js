import { link } from "../refs/refs";

link.fetcher.then(value => {
	console.log(value);
	value.map(elem => {
		if (elem.poster_path === null) {
			return;
		} else if (elem.poster_path !== null) {
			link.list.insertAdjacentHTML(
				"beforeend",
				`<li class = 'list-item' data-id = '${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}" data-img = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}'><h3 class = 'heading'>${elem.title}</h3></li>`
			);
		}
	});
});
