import {cantidad, precio } from "./totalizador";

const cant = document.querySelector("#cantidad");
const precioitem = document.querySelector("#precio-item")
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadProducto = Number.parseInt(cant.value);
  const precioPorItem = Number.parseInt(precioitem.value);

  div.innerHTML = "<p>" + "Cantidad: " + cantidad(cantidadProducto) + "</p>" + 
                  "<p>" + "Precio por item: " + precio(precioPorItem) + "</p>";
});
