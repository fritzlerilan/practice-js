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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}

const empresa = new Empresa('Codigo con Juan', 500, '1232412412', 'Aprendizaje en Linea');
console.log(Empresa.bienvenida());
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
