import cantidad from "./totalizador";

const cant = document.querySelector("#cantidad");
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadProducto = Number.parseInt(cant.value);

  div.innerHTML = "<p>" + "Cantidad: " + cantidad(cantidadProducto) + "</p>";
});
