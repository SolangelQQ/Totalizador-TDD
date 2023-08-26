import {cantidad, impuesto, estado, precio, precio_neto, total_impuesto,descuento, precio_total} from "./totalizador";

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
  const imp = impuesto(codigoEstado);
  const desc = descuento(pNeto);
  const impTotal = total_impuesto(pNeto, imp);

  div.innerHTML = "<p>" + "Impuesto segun estado: " + imp +"%"+ "</p>"+
                  "<p>" + "Precio neto " + cantidadProducto + "* $" + precioPorItem+": $" + pNeto + "</p>"+
                  "<p>" + "Impuesto para " + codigoEstado + "(%"+ imp +")" +": $" + impTotal + "</p>"+
                  "<p>" + "Precio total (descuento e impuesto): " + precio_total(pNeto,desc, impTotal)+ "</p>";
});
