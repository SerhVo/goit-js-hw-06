let counterValue = 0;
const valueElement = document.querySelector("#value");

const btnDecrement = document.querySelector('[data-action="decrement"]');
btnDecrement.addEventListener("click", counterDecrement);

const btnIncrement = document.querySelector('[data-action="increment"]');
btnIncrement.addEventListener("click", counterIncrement);

function counterDecrement() {
  counterValue -= 1;
  valueElement.textContent = counterValue;
}

function counterIncrement() {
  counterValue += 1;
  valueElement.textContent = counterValue;
}
