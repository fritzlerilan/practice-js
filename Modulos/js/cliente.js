// IIFE

// (function() {
//     console.log('Desde un IIFE');
//     const nombreCliente = 'Ilan';
// })();

export const nombreCliente = 'Juan';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: $${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0) {
        console.log('Tiene saldo');
    }else {
        console.log('El cliente no tiene saldo');
    }
}