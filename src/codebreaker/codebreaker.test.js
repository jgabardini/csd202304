import CodeBreaker from "./codebreaker";

describe("codebreaker", () => {
  it("Mustra los guiones", () => {
    const cb = new CodeBreaker("1359");
    cb.adivinar("0987");
    expect(cb.obtenerPistas()).toEqual("- - - -");
  });
  it("Encuentra una coincidencia exacta", () => {
    const cb = new CodeBreaker("1357");
    cb.adivinar("1246");
    expect(cb.obtenerPistas()).toEqual("! - - -");
  });

  it("Encuentra varias coincidencias exactas", () => {
    const cb = new CodeBreaker("1357");
    cb.adivinar("1256");
    expect(cb.obtenerPistas()).toEqual("! - ! -");
  });
});
