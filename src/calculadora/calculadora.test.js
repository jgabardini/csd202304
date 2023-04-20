import calculadora from "./calculadora";

// “5”=5 
// “513123123”=513123123 
// “-5”=-5
// “cinco”= ???
// “3 4”= ???
// “1+2”=3 
// “4+2”=6 
// “3+8+7”=18
// “1+2+4\n+5+6”=18

describe("Calculadora", () => {
  it("Un string vacio es 0", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("Un numero es evaluado", () => {
    expect(calculadora("-5")).toEqual(-5);
  });
});