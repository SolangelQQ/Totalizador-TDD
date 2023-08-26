function cantidad(cant) {
  return cant;
}

function precio(precio_item){
  return precio_item;
}

function precio_neto(cant, precio_item){
  return cant*precio_item;

}
function estado(e){
  return e;
}

function impuesto(e){
  let diccionario_estado = new Map([
    ['CA', [8.25]],
    ['UT', [6.65]],
    ['NV', [8.00]],
    ['TX', [6.25]],
    ['AL', [4.00]]
  ]);
  return (diccionario_estado.has(e)) ? diccionario_estado.get(e)[0]: 0;
}
function descuento(precio_neto) {
  const diccionario_descuento = new Map([
    [1000, 0.03],
    [3000, 0.05],
    [7000, 0.07],
    [10000, 0.10],
    [30000, 0.15]
  ]);

  return (diccionario_descuento.has(precio_neto)) ? diccionario_descuento.get(precio_neto): 0;
}

function precio_total(precio_neto, descuento, total_impuesto){
  return ((precio_neto+total_impuesto)-(precio_neto*descuento));
}
function total_impuesto(precio_neto, impuesto){
  return (precio_neto*impuesto)/100;
}
export {cantidad, precio, estado, impuesto, precio_neto, total_impuesto, descuento,precio_total};
