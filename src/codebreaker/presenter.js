import CodeBreaker from "./codebreaker";

const numero_elem = document.querySelector("#numero");
const boton_elem = document.querySelector("#arriesgo");
const div = document.querySelector("#resultado");

// const kbot = new KBot("en");

boton_elem.addEventListener("click", (event) => {
  event.preventDefault();

  // const input_text = input.value;
  const cb = new CodeBreaker('1357')
  // cb.adivinar(numero_elem.value)
  // expect(cb.obtenerPistas()).toEqual(‘! * - -’)
  // expect(cb.ganoElJuego()).toEqual(false)

  div.innerHTML = `Ingresaste ${numero_elem.value} y estos son los indicadores ${cb.obtenerPistas()}`
});
