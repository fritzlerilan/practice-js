// Class declaration + Popular

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de $${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

console.log(Cliente.bienvenida());

const juan = new Cliente('Juan', 400);
console.log('juan:', juan)
console.log(juan.mostrarInformacion());

// Class Expresion

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de $${this.saldo}`;
    }
}

const ilan = new Cliente2('Ilan', 500);
console.log('ilan:', ilan)
console.log(ilan.mostrarInformacion());
