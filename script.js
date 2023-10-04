import { divGenerator, divDrawBG } from "./helpers/divGenerator.js";
import { BGCOLOURS } from "./helpers/constants.js";

const d = document;

divGenerator(BGCOLOURS);

const $main = d.querySelector(".container");

divDrawBG($main.children);

d.addEventListener("DOMContentLoaded", () => {
  const $body = d.querySelector("body");
  $body.style.backgroundColor = localStorage.getItem("bg-theme") || "#222";
});
