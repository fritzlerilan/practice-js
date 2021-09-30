// Symbols son nuevos en ES6 permiten crear una propiedad unica y no hay simbolos que sean iguales
// El symbol no se crea con la palabra new

const sym = Symbol('1');
const sym2 = Symbol('1');

if(sym === sym2){
    console.log('Son iguales');
}else {
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol;

const persona = {};

// Usar symbols como llaves de un objeto
persona[nombre] = 'Ilan';
persona[apellido] = 'Fritzler';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);

// Para poder acceder a un valor el cual esta protegido con una llave symbol se realiza de la siguiente manera
console.log(persona.nombre); // undefined
console.log(persona[nombre]); // Ilan

// Las propiedades que tengamos definidas por un symbol no son iterables
for(let i in persona){
    console.log(i);
}

// Se le puede crear una descripcion al symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};
cliente[nombreCliente] = 'Pedro';
console.log(cliente);