// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputElement = document.querySelector("#name-input");
inputElement.addEventListener("input", onSearch);

function onSearch(evt) {
  const spanName = document.querySelector("#name-output");
  evt.currentTarget.value.length
    ? (spanName.textContent = evt.currentTarget.value)
    : (spanName.textContent = "Anonymous");
}
