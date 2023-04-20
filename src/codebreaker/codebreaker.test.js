import CodeBreaker from "./codebreaker";

describe("codebreaker", () => {
  it("Saludar a Andrés en idioma default por la mañana", () => {
    const cb = new CodeBreaker('1357')

    expect(cb.obtenerPistas()).toEqual("- - - -");
  });
  it("Encuentra una exacta", () => {
    const cb = new CodeBreaker('1357')
    // cb.adivinar('1246')
    // expect(cb.obtenerPistas()).toEqual("! - - -");
  });
});