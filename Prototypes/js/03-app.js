function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Agregando funciones al prototype de Cliente.
// Es importante en estos casos usar function y no una arrow function ya que la primera nos permitira buscar dentro del mismo objeto con this. Mientras que las arrow function buscan en el ambito global
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

// Intancia de Cliente
const pedro = new Cliente('Pedro', 6000);

console.log(pedro.tipoCliente());
console.log(pedro.retiraSaldo(1000));
console.log(pedro.nombreClienteSaldo());
console.log(pedro);


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en Linea');
console.log(CCJ);