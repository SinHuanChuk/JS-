import { link } from "../refs/refs";
import Swal from "sweetalert2";

const changeFindFilm = e => {
	e.preventDefault();
	console.log(e.target.elements);

	if (e.target.elements[0].value !== "") {
		console.log(link.output.value);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=1&include_adult=false&query=${e.target.elements[0].value}`
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
	} else if (e.target.elements[0].value === "") {
		Swal.fire({
			icon: "error",
			title: "not found films"
		});

		// link.fetcher.then(value => {
		// 	link.list.innerHTML = `${value
		// 		.map(elem => {
		// 			if (elem.poster_path === null) {
		// 				return;
		// 			} else if (elem.poster_path !== null) {
		// 				return `<li class = 'list-item' data-id = '${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}" data-img = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}'><h3 class = 'heading'>${elem.title}</h3></li>`;
		// 			}
		// 		})
		// 		.join("")}`;
		// });
	}
};

link.form.addEventListener("submit", changeFindFilm);
