const refs = {
  item: document.querySelectorAll(".item"),
  cockedList: document.querySelector("#ingredients"),
  gallery: document.querySelector("#gallery"),
  container: document.querySelector("#counter"),
  counter: document.querySelector("#value"),
  plus: document.querySelector(".plus"),
  minus: document.querySelector(".minus")
};

const counterValue = 0;

const plusClick = () => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
  refs.counter.textContent = counterValue;
};

refs.plus.addEventListener("click", plusClick);
