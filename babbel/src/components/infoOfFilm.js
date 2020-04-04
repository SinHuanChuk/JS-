import { link } from "../refs/refs";
import Swal, { swal } from "sweetalert2/dist/sweetalert2.js";

let mass = [];

const whatIsThis = e => {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	} else {
		Swal.fire({
			title: `${e.target.dataset.title}`,
			text: `${e.target.dataset.description}`,
			imageUrl: `${e.target.dataset.img}`,
			imageHeight: 450,
			imageWidth: 300,
			backdrop: `rgba(0, 0, 0, 0.75)`,
			showCloseButton: true,
			confirmButtonText: "add to your watched"
		}).then(result => {
			if (result.value) {
				Swal.fire({
					icon: "success",
					title: "Added to your watched",
					showConfirmButton: false,
					timer: 1800
				});
			}

			const id = e.target.closest("li").dataset.id;

			fetch(
				`https://api.themoviedb.org/3/movie/${id}?api_key=e9f6322f77334e3f0406d6b8eabd79ce`
			)
				.then(response => response.json())
				.then(data => {
					if (localStorage.getItem("favorite") === null) {
						localStorage.setItem("favorite", JSON.stringify([]));
						mass = JSON.parse(localStorage.getItem("favorite"));

						if (
							localStorage
								.getItem("favorite")
								.includes(JSON.stringify(data)) === false
						) {
							mass.push(data);
						}

						localStorage.setItem("favorite", JSON.stringify(mass));
					} else {
						mass = JSON.parse(localStorage.getItem("favorite"));

						if (
							localStorage
								.getItem("favorite")
								.includes(JSON.stringify(data)) === false
						) {
							mass.push(data);
						}

						localStorage.setItem("favorite", JSON.stringify(mass));
					}
				});
		});
	}
};

link.list.addEventListener("click", whatIsThis);
