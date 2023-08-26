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

function descuento(e){
  let diccionario_estado = new Map([
    ['CA', [8.25]],
    ['UT', [6.65]],
    ['NV', [8.00]],
    ['TX', [6.25]],
    ['AL', [4.00]]
  ]);
  return (diccionario_estado.has(e)) ? diccionario_estado.get(e)[0]: 0;
}


export {cantidad, precio, estado, descuento, precio_neto};
