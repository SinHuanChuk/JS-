const link = {
  body: document.querySelector("body")
};

let randomRgb = () => {
  let o = Math.round,
    r = Math.random,
    s = 255;
  link.body.style.background =
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")";
};

setInterval(() => {
  for (let i = 0; i < 1000; i++) {
    randomRgb();
  }
}, 3000);
