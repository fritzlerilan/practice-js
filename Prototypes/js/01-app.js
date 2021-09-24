// Al trabajar con objetos la sintaxis mas comun es la de object literals

const cliente = {
    nombre: 'Juan',
    saldo: 500,
}

console.log(cliente);

// Pero esta sintaxis es muy estatica y no nos permite crear objetos dinamicos y reutilizables
// Object Constructor

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);
console.log(juan);

