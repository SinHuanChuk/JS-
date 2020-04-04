import "./styles.css";
import { link } from "./refs/refs";
import "./components/popular";
import "./components/findFilms";
import "./components/animationToNav";
import "./components/loadMoreFilms";
import "./components/infoOfFilm";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import swal from "sweetalert";

const showFavoriteFilms = e => {
	e.preventDefault();
	link.form.classList.add("none");
	link.btnToLoadMoreFilms.classList.add("none");
	link.listLibrary.classList.remove("none");
	link.list.classList.add("none");

	const localObject = JSON.parse(localStorage.getItem("favorite"));

	link.listLibrary.innerHTML = `${localObject
		.map(elem => {
			return `<li class = 'list-item--watched' data-id = '${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}" data-img = "https://image.tmdb.org/t/p/w500/${elem.poster_path}""><h3 class = 'heading'>${elem.title}</h3></li>`;
		})
		.join("")}`;
};

const showInfoWatchedFilm = e => {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	} else {
		Swal.fire({
			imageUrl: `${e.target.dataset.img}`,
			title: `${e.target.dataset.title}`,
			text: `${e.target.dataset.description}`,
			showCloseButton: true,
			imageHeight: 450,
			imageWidth: 300,
			backdrop: `rgba(0, 0, 0, 0.75)`,
			confirmButtonText: "remove from watched?"
		}).then(result => {
			if (result.value) {
				Swal.fire({
					icon: "success",
					title: "remove from watched",
					showConfirmButton: false,
					timer: 1800
				});
			}
		});
	}
};

const goHome = e => {
	e.preventDefault();

	link.form.classList.remove("none");
	link.btnToLoadMoreFilms.classList.remove("none");
	link.listLibrary.classList.add("none");
	link.list.classList.remove("none");
	link.output.value = "";

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

	link.counter = 1;
};

console.log(link.form.elements);

link.home.addEventListener("click", goHome);
link.library.addEventListener("click", showFavoriteFilms);
link.listLibrary.addEventListener("click", showInfoWatchedFilm);
