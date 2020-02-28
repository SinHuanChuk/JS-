import { refs } from "./link/refs";
import { ingredients } from "./link/refs";

const ingredientsToDom = ingredients.map(elem => `<li>${elem}</li>`).join("");

refs.cockedList.insertAdjacentHTML("afterbegin", ingredientsToDom);
