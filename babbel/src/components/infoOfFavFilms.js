import { link } from "../refs/refs";
import Swal from "sweetalert2/dist/sweetalert2.js";

const showInfoFavoriteFilm = e => {
	e.preventDefault();
	const id = e.target.closest("li").dataset.id;

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
			confirmButtonText: "remove from watched?",
			confirmButtonColor: "#f03a61",
			background: "#f6f4f3"
		}).then(result => {
			if (result.value) {
				Swal.fire({
					icon: "success",
					title: "removed from watched",
					showConfirmButton: false,
					timer: 1800,
					background: "#f6f4f3"
				});

				fetch(
					`https://api.themoviedb.org/3/movie/${id}?api_key=e9f6322f77334e3f0406d6b8eabd79ce`
				)
					.then(response => response.json())
					.then(data => {
						let array = JSON.parse(localStorage.getItem("favorite"));
						let arrayPush = [];
						array.map(elem => arrayPush.push(elem.id));
						let index = arrayPush.indexOf(data.id);
						if (index > -1) {
							array.splice(index, 1);
						}
						localStorage.setItem("favorite", JSON.stringify(array));

						link.listLibrary.innerHTML = `${array
							.map(elem => {
								return `<li class = 'list-item--watched' data-id = '${elem.id}'><div class = 'overage'>${elem.vote_average}</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/${elem.poster_path}' data-title = "${elem.title}" data-description = "${elem.overview}" data-img = "https://image.tmdb.org/t/p/w500/${elem.poster_path}""><h3 class = 'heading'>${elem.title}</h3></li>`;
							})
							.join("")}`;

						if (link.listLibrary.children.length < 1) {
							link.listLibrary.innerHTML =
								'<img src="https://znaiwifi.com/wp-content/uploads/2018/01/hqdefault.jpg" alt="" class="artem">';
						} else if (link.listLibrary.children.length >= 1) {
							link.artem.remove();
						}
					});
			}
		});
	}
};

link.listLibrary.addEventListener("click", showInfoFavoriteFilm);
