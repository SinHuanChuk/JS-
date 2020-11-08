import { link } from "../refs/refs";

const showFavoriteFilms = e => {
	e.preventDefault();
	link.form.classList.add("none");
	link.btnToLoadMoreFilms.classList.add("none");
	link.listLibrary.classList.remove("none");
	link.list.classList.add("none");
	link.nav.classList.toggle("open");
	link.trigger.classList.toggle("rotate-trigger");

	const localObject = JSON.parse(localStorage.getItem("favorite"));

	link.listLibrary.innerHTML = `${localObject
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
};

link.library.addEventListener("click", showFavoriteFilms);
