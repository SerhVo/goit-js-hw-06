const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const liElements = [];

for (const ingredient of ingredients) {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = ingredient;
  liElements.push(liElement);
}
listIngredients.append(...liElements);
console.log(listIngredients);
