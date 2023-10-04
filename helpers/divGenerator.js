import { BGCOLOURS } from "./constants.js";

const d = document;

const $root = d.getElementById("root"),
  $body = d.querySelector("body"),
  $fragment = d.createDocumentFragment(),
  $container = d.createElement("main");

const divGenerator = (collection) => {
  collection.forEach((color) => {
    let $divTemp = d.createElement("div");

    $divTemp.classList.add(`box-${color}`);
    $container.classList.add("container");
    $container.appendChild($divTemp);
    $fragment.appendChild($container);
    $root.appendChild($fragment);
  });
};

const divDrawBG = (collection) => {
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.add("bg");
    collection[i].style.backgroundColor = BGCOLOURS[i];
    collection[i].addEventListener("click", () => {
      $body.style.backgroundColor = BGCOLOURS[i];
    });
  }
};

export { divGenerator, divDrawBG };
