import { nombreCliente, ahorro, tieneSaldo } from './cliente.js';
import { mostrarInformacion } from './cliente.js';

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);
