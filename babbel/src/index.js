import "./styles.css";
import { link } from "./refs/refs";
import swal from "sweetalert";

let amount = 2;
let counter = 2;
const mass = [];

link.fetcher.then(value => {
	console.log(value);
	value.map(elem => {
		if (elem.poster_path === null) {
			return;
		} else if (elem.poster_path !== null) {
			link.list.insertAdjacentHTML(
				"beforeend",
				`<li class = 'list-item' data-id = '${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></li>`
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
							return `<li class = 'list-item ${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></li>`;
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
						return `<li class = 'list-item ${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></li>`;
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
							`<li class = 'list-item ${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></li>`
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
							`<li class = 'list-item ${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></li>`
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

const goHome = e => {
	e.preventDefault();

	counter = 2;

	link.fetcher.then(value => {
		value.map(elem => {
			link.list.innerHTML = `${value
				.map(elem => {
					if (elem.poster_path === null) {
						return;
					} else if (elem.poster_path !== null) {
						return `<li class = 'list-item ${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}"><h3 class = 'heading'>${elem.title}</h3></li>`;
					}
				})
				.join("")}`;
		});
	});

	link.output.value = "";
};

localStorage.setItem("favorite", JSON.stringify(mass));

const close = e => {
	const id = e.target.closest("li").dataset.id;

	fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=e9f6322f77334e3f0406d6b8eabd79ce`
	)
		.then(response => response.json())
		.then(data => {
			const favoriteId = JSON.parse(localStorage.getItem("favorite"));

			if (!favoriteId.every(elem => elem.id === id)) {
				return;
			} else {
				mass.push(data);
				localStorage.setItem("favorite", JSON.stringify(mass));
			}
		});
};

link.home.addEventListener("click", goHome);
link.list.addEventListener("click", whatIsThis);
link.btnToLoadMoreFilms.addEventListener("click", loadMoreFilms);
link.form.addEventListener("submit", changeFindFilm);
link.list.addEventListener("click", close);

const rotate = () => {
	link.nav.classList.toggle("open");
	link.trigger.classList.toggle("rotate-trigger");
};

link.trigger.addEventListener("click", rotate);
