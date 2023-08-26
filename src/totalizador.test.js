import {cantidad, precio, estado} from "./totalizador.js";

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
});
