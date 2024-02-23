let screen = document.querySelector(".screen");
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.num;
    display.value += value;
    screen.value += value;
  });
});
equal.addEventListener("click", () => {
  screen.value = eval(screen.value);
});
clear.addEventListener("click", () => {
  screen.value = " ";
  display.value = " ";
});
