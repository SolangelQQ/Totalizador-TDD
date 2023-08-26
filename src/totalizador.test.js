import {cantidad, precio, estado, descuento, precio_neto} from "./totalizador.js";

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
    expect(descuento("CA")).toEqual(8.25);
  });
  it("Deberia seleccionar estado no valido y mostrar 0 descuento ", () => {
    expect(descuento("CL")).toEqual(0);
  });
  it("Deberia mostrar el precio neto ", () => {
    expect(precio_neto(3, 10)).toEqual(30);
  });
});
