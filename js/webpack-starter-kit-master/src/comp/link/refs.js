export const refs = {
	item: document.querySelectorAll(".item"),
	cockedList: document.querySelector("#ingredients"),
	gallery: document.querySelector("#gallery"),
	container: document.querySelector("#counter"),
	value: document.querySelector("#value"),
	plus: document.querySelector(".plus"),
	minus: document.querySelector(".minus"),
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
	valid: document.querySelector("#validation-input"),
	fontSizeControl: document.querySelector("#font-size-control"),
	fontSizeOutPut: document.querySelector("#text"),
	wrapper: document.querySelector("#controls"),
	howMany: document.querySelector(".howmanycreate"),
	createdContainers: document.querySelector(".create"),
	destroyedContainers: document.querySelector(".destroy"),
	innerWrapper: document.querySelector("#boxes")
};

export const ingredients = [
	"Картошка",
	"Грибы",
	"Чеснок",
	"Помидоры",
	"Зелень",
	"Приправы"
];

export const images = [
	{
		url:
			"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat"
	},
	{
		url:
			"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish"
	},
	{
		url:
			"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running"
	}
];
