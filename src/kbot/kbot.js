class KBot {
  constructor(idioma) {
    this.idioma = idioma
    if (this.idioma == "es") {
      this.hi = "Hola"
    }
    else {
      this.hi = "Hello"
    }
  }

  saludar(nombre){
    return `${this.hi} ${nombre}`
  }
  bienvenida(){
    if (this.idioma == "es") {
      return 'Me dices tu nombre'
    }
    else {
      return 'Tell me your name'
    }
  }
}

export default KBot;
