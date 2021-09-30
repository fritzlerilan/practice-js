import { nombreCliente, ahorro, tieneSaldo, Cliente, mostrarInformacion } from './cliente.js';
import { Empresa } from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Codigo con Juan', 100, 'Aprendizaje en Linea');
console.log(empresa);
empresa.mostrarInformacion();