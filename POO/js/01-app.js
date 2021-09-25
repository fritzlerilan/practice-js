// Class declaration + Popular

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente('Juan', 400);
console.log('juan:', juan)

// Class Expresion

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const ilan = new Cliente2('Ilan', 500);
console.log('ilan:', ilan)
