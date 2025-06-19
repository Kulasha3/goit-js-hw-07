const myElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${myElem.length}`);

const mySubtitle = document.querySelectorAll(".item > h2");

mySubtitle.forEach((elem) => {
  console.log(`Category: ${elem.textContent}`);
  console.log(`Elements: ${elem.nextElementSibling.children.length}`);
});
