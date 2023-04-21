class CodeBreaker {
  constructor(codigo) {
    this.codigo = codigo;
  }
  adivinar(intento) {
    this.intento = intento;
  }

  obtenerPistas() {
    if (this.intento[0] == this.codigo[0]) {
      return "! - - -";
    } else {
      return "- - - -";
    }
  }
}
export default CodeBreaker;
