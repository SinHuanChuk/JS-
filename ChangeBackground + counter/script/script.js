const refs = {
  decriment: document.querySelector(".decriment"),
  increment: document.querySelector(".increment"),
  counter: document.querySelector(".counter")
};

let amount = 0;

const handelDecriment = () => {
  amount -= 1;
  refs.counter.textContent = amount;
};

const handelincrement = () => {
  amount += 1;
  refs.counter.textContent = amount;
};

refs.increment.addEventListener("click", handelincrement);
refs.decriment.addEventListener("click", handelDecriment);
