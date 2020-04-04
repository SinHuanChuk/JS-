import { link } from "../refs/refs";
import services from "../services";

const goHome = e => {
	e.preventDefault();

	link.form.classList.remove("none");
	link.btnToLoadMoreFilms.classList.remove("none");
	link.listLibrary.classList.add("none");
	link.list.classList.remove("none");
	services.value = "";
	link.form.reset();

	fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=`
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
						return `<li class = 'list-item' data-id = '${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}" data-img = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}'><h3 class = 'heading'>${elem.title}</h3></li>`;
					}
				})
				.join("")}`;
		});

	link.amount = 1;
	link.counter = 1;
};

link.home.addEventListener("click", goHome);
