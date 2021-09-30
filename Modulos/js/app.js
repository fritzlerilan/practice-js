import { nombreCliente, ahorro, tieneSaldo, Cliente } from './cliente.js';
import { mostrarInformacion } from './cliente.js';

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());