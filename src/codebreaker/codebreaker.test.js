import CodeBreaker from "./codebreaker";

describe("codebreaker", () => {
  it("Mustra los guiones", () => {
    const cb = new CodeBreaker("1357");
    cb.adivinar("0987");
    expect(cb.obtenerPistas()).toEqual("- - - -");
  });
  it("Encuentra una exacta", () => {
    const cb = new CodeBreaker("1357");
    cb.adivinar("1246");
    expect(cb.obtenerPistas()).toEqual("! - - -");
  });
});
