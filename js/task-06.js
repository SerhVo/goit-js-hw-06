// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEL = document.querySelector("#validation-input");
const chekOn = (event) => {
  event.currentTarget.classList.remove("invalid");
  if (
    event.currentTarget.value.trim().length < event.currentTarget.dataset.length
  ) {
    event.currentTarget.classList.add("invalid");
  }
  event.currentTarget.classList.add("valid");
};
inputEL.addEventListener("blur", chekOn);
