// Definir un Promise
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
})

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error))


// Hay 3 valores posibles en los promises
// fulfilled - El promise se cumplio
// rejected - El promise no se cumplio
// pending - Es que aun no se cumple ni tampoco fue rechazado

function descuento(mensaje){
    console.log(mensaje);
}