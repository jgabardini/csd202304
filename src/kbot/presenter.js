import KBot from "./kbot";

const input = document.querySelector("#input");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const kbot = new KBot("en");

div.innerHTML = "<p>" + kbot.bienvenida() + "</p>";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input_text = input.value;
  
  div.innerHTML = "<p>" + kbot.saludar(input_text) + "</p>";
});
