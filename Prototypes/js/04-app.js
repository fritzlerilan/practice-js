function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
} 

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


// Inheritance (Only the proto constructor)

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Functions inheritance
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.costructor = Cliente;

// Instanciando
const ilan = new Persona('Ilan', 10000, '2236690789');
console.log(ilan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de ${this.nombre} es ${this.telefono}`;
}
console.log(ilan.mostrarTelefono());
