class CodeBreaker {
  constructor(codigo) {
    this.codigo = codigo;
  }
  adivinar(intento) {
    this.intento = intento;
  }

  obtenerPistas() {
    let pistas = "";
    for (let i = 0; i < this.intento.length; i++) {
      if (this.intento[i] == this.codigo[i]) {
        pistas += "! ";
      } else {
        pistas += "- ";
      }
    }
    pistas = pistas.substring(0, pistas.length - 1);
    return pistas;
  }
}
export default CodeBreaker;
