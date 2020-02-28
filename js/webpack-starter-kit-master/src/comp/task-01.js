import { refs } from "./link/refs";

console.log(`в списке ${refs.item.length} категории`);
console.log(`категория: ${refs.item[0].firstElementChild.textContent}`);
console.log(
	`количество элементов: ${refs.item[0].firstElementChild.nextElementSibling.children.length}`
);
