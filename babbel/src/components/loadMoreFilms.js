import { link } from "../refs/refs";
import services from "../services";

const loadMoreFilms = e => {
	if (services.value) {
		link.counter = 1;
		link.form.reset();

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${(link.amount += 1)}&include_adult=false&query=${services.value.toLowerCase()}`
		)
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data.results.map(elem => {
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
	} else if (services.value === "") {
		link.amount = 1;

		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${(link.counter += 1)}`
		)
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data.results.map(elem => {
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
	}
};

const removeBrute = e => {
	e.preventDefault();

	link.amount = 1;
};

link.form.addEventListener("submit", removeBrute);
link.btnToLoadMoreFilms.addEventListener("click", loadMoreFilms);
