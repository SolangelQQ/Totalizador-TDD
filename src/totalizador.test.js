import cantidad from "./totalizador.js";

describe("Totalizador de venta", () => {
  it("Deberia mostrar la cantdad", () => {
    expect(cantidad(3)).toEqual(3);
  });
});
