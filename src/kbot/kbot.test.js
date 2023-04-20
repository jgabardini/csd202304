const Kbot = require("./kbot2");
/*
console.log("Saludar a Andrés en idioma default por la mañana".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés", 8) == "Buenos días Andrés");

console.log("Saludar a Andrés en ingles por la mañana".toUpperCase());
kbot = new Kbot("EN");
console.log(kbot.saludar("Andrés", 10) == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot();
console.log(kbot.saludar("Andrés", 14) == "Buenas tardes Andrés");

console.log("Saludar a Andrés en espanol por la noche".toUpperCase());
kbot = new Kbot();
console.log(kbot.saludar("Andrés", 22) == "Buenas noches Andrés");
*/
describe("Kbot", () => {
  it("Saludar a Andrés en idioma default por la mañana", () => {
    //Arrange (configuracion)
    let kbot = new Kbot();
    //Act (ejecucion)
    let mensaje = kbot.saludar("Andrés", 8);
    //Assert (verificacion)
    expect(mensaje).toEqual("Buenos días Andrés");
  });
  it("Saludar a Andrés en idioma default por la tarde", () => {
    //Arrange (configuracion)
    let kbot = new Kbot();
    //Act (ejecucion)
    let mensaje = kbot.saludar("Andrés", 16);
    //Assert (verificacion)
    expect(mensaje).toEqual("Buenas tardes Andrés");
  });
  it("Saludar a Andrés en idioma default por la noche", () => {
    //Arrange (configuracion)
    let kbot = new Kbot();
    //Act (ejecucion)
    let mensaje = kbot.saludar("Andrés", 22);
    //Assert (verificacion)
    expect(mensaje).toEqual("Buenas noches Andrés");
  });
it("Saludar a Andrés en idioma default por la mañana", () => {
  //Arrange (configuracion)
  let kbot = new Kbot("EN");
  //Act (ejecucion)
  let mensaje = kbot.saludar("Andrés", 8);
  //Assert (verificacion)
  expect(mensaje).toEqual("Good morning Andrés");
});
});