export const link = {
	list: document.querySelector(".list"),
	form: document.querySelector(".form"),
	output: document.querySelector(".output"),
	btnToLoadMoreFilms: document.querySelector(".load-more--films"),
	img: document.querySelectorAll(".list-item__image"),
	trigger: document.querySelector(".trigger"),
	nav: document.querySelector(".navigation"),
	library: document.querySelector(".library"),
	home: document.querySelector(".home"),
	container: document.querySelector(".wrapperer"),
	listLibrary: document.querySelector(".list-library"),
	previous: document.querySelector(".previous"),
	next: document.querySelector(".next"),
	btn: document.querySelector(".btn"),
	artem: document.querySelector(".artem"),

	amount: 1,
	counter: 1,

	fetcher: fetch(
		"https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=1"
	)
		.then(response => {
			return response.json();
		})
		.then(data => {
			return data.results;
		})
};
