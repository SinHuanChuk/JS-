import "./styles.css";
import { link } from "./refs/refs";
import swal from "sweetalert";

let amount = 2;
let counter = 2;

link.fetcher.then(value => {
	console.log(value);
	value.map(elem => {
		if (elem.poster_path === null) {
			return;
		} else if (elem.poster_path !== null) {
			link.list.insertAdjacentHTML(
				"beforeend",
				`<div class = 'list-item'><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></div>`
			);
		}
	});
});

const changeFindFilm = e => {
	e.preventDefault();

	if (link.output.value !== "") {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=1&include_adult=false&query=${link.output.value}`
		)
			.then(response => {
				return response.json();
			})
			.then(data => {
				link.list.innerHTML = `${data.results
					.map(elem => {
						if (elem.poster_path === null) {
							return;
						} else if (elem.poster_path !== null) {
							return `<div class = 'list-item'><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></div>`;
						}
					})
					.join("")}`;
			});
	} else if (link.output.value === "") {
		link.fetcher.then(value => {
			link.list.innerHTML = `${value
				.map(elem => {
					if (elem.poster_path === null) {
						return;
					} else if (elem.poster_path !== null) {
						return `<div class = 'list-item'><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></div>`;
					}
				})
				.join("")}`;
		});
	}
};

const loadMoreFilms = e => {
	e.preventDefault();

	if (link.output.value !== "") {
		counter = 2;

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${amount++}&include_adult=false&query=${
				link.output.value
			}`
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
							`<div class = 'list-item'><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></div>`
						);
					}
				});
			});
	} else if (link.output.value === "") {
		amount = 2;

		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${counter++}`
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
							`<div class = 'list-item'><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></div>`
						);
					}
				});
			});
	}
};

const whatIsThis = e => {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	} else {
		swal(`${e.target.dataset.title}`, `${e.target.dataset.description}`, {
			button: "close"
		});
	}
};

link.list.addEventListener("click", whatIsThis);
link.btnToLoadMoreFilms.addEventListener("click", loadMoreFilms);
link.form.addEventListener("submit", changeFindFilm);
