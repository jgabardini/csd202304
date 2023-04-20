import fs from "fs";

describe("Codebreaker", () => {
  it("Nombre del juego", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");

    const nombre = document.querySelector("#nombre");
    expect(nombre.innerHTML).toEqual("Codebreaker");
  });
  it("Ingreso un numero", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    require("../codebreaker/presenter");

    // arriesgar
    const numero_elem = document.querySelector("#numero");
    const boton_elem = document.querySelector("#arriesgo");
    const arriesgo = '1234'
    numero_elem.value = arriesgo;
    boton_elem.click();

    const resultado_elem = document.querySelector("#resultado");
    expect(resultado_elem.innerHTML).toEqual(`Ingresaste ${arriesgo} y estos son los indicadores - - - -`);
  });
})