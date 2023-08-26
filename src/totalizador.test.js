import {cantidad, precio, estado, impuesto, precio_neto, total_impuesto, descuento,precio_total} from "./totalizador.js";

describe("Totalizador de venta", () => {
  it("Deberia mostrar la cantdad", () => {
    expect(cantidad(3)).toEqual(3);
  });
  it("Deberia mostrar el precio por item", () => {
    expect(precio(55)).toEqual(55);
  });
  it("Deberia mostrar el estado", () => {
    expect(estado("CA")).toEqual("CA");
  });
  it("Deberia seleccionar estado y mostrar el porcentaje de impuesto que tiene ese estado", () => {
    expect(impuesto("CA")).toEqual(8.25);
  });
  it("Deberia seleccionar estado no valido y mostrar 0 descuento ", () => {
    expect(impuesto("CL")).toEqual(0);
  });
  it("Deberia mostrar el precio neto ", () => {
    expect(precio_neto(3, 10)).toEqual(30);
  });
  it("Deberia mostrar el precio total del impuesto según el precio neto y el porcentaje de CA ", () => {
    expect(total_impuesto(30, 8.25)).toEqual(2.475);
  });
  it("Deberia aplicar descuento de 3% para precio_neto de 1000", () => {
    expect(descuento(1000)).toEqual(0.03);
  });
  
  it("Deberia aplicar descuento de 5% para precio_neto de 3000", () => {
    expect(descuento(3000)).toEqual(0.05);
  });
  it("Deberia aplicar descuento de 0% para precio_neto no valido", () => {
    expect(descuento(500)).toEqual(0);
  });
  it("Deberia mostrar el precio total con el Porcentaje de descuento que corresponde a 1000 ", () => {
    expect(precio_total(60, 0, 3.75)).toEqual(63.75);
  });
  it("Deberia mostrar el precio total con el Porcentaje de descuento que corresponde a 1000 ", () => {
    expect(precio_total(1000, 0.03, 62.5)).toEqual(1032.5);
  });
  
});
