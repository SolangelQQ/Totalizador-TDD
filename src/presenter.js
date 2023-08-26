import {cantidad, descuento, estado, precio, precio_neto, total_impuesto} from "./totalizador";

const cant = document.querySelector("#cantidad");
const precioitem = document.querySelector("#precio-item");
const codestado = document.querySelector("#estado");
const form = document.querySelector("#Totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadProducto = Number.parseInt(cant.value);
  const precioPorItem = Number.parseInt(precioitem.value);
  const codigoEstado = codestado. value
  const pNeto = precio_neto(cantidadProducto, precioPorItem);
  const desc = descuento(codigoEstado);

  div.innerHTML = "<p>" + "Cantidad: " + cantidad(cantidadProducto) + "</p>" + 
                  "<p>" + "Precio por item: $" + precio(precioPorItem) + "</p>"+ 
                  "<p>" + "Estado: " + estado(codigoEstado) + "</p>"+
                  "<p>" + "Descuento segun estado: " + desc +"%"+ "</p>"+
                  "<p>" + "Precio neto " + cantidadProducto + "* $" + precioPorItem+": $" + pNeto + "</p>"+
                  "<p>" + "Impuesto para "+ codigoEstado + "(%"+ desc +")" +": $" + total_impuesto(pNeto, desc) + "</p>";
});
