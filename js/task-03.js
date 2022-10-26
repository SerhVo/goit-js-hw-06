const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryElem = document.querySelector(".gallery");
const markup = images
  .map(
    ({ url, alt }) => `<li>
<img src="${url}" alt="${alt}" width = 760px>
</li>`
  )
  .join("");

console.log(markup);

galleryElem.insertAdjacentHTML("beforeend", markup);

galleryElem.style.listStyle = "none";
galleryElem.style.display = "flex";
galleryElem.style.flexWrap = "wrap";
galleryElem.style.gap = "10px";
galleryElem.style.background = "darkseagreen";
