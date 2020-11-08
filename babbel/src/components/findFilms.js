import { link } from "../refs/refs";
import Swal from "sweetalert2";
import services from "../services";

const changeFindFilm = e => {
	e.preventDefault();

	if (e.target.elements[0].value.toLowerCase() !== "") {
		services.getValue(e.target.elements[0].value);

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=1&include_adult=false&query=${e.target.elements[0].value.toLowerCase().trim()}`
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

				if (data.results.length === 0) {
					Swal.fire({
						icon: "warning",
						title: "not found films",
						showConfirmButton: false,
						timer: 1000
					});

					const goHome = () => {
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

					goHome();
				}
			});
	} else if (e.target.elements[0].value === "") {
		Swal.fire({
			icon: "error",
			title: "not found films",
			showConfirmButton: false,
			timer: 1000
		});
	}
};

link.form.addEventListener("submit", changeFindFilm);
