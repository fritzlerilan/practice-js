// Como agregar elementos al localStorage


// Es un espacio de guardado permanente en el almacenamiento local del cliente. Los datos persistiran hasta que sean limpiados o eliminados.
localStorage.setItem('nombre', 'Ilan');

const prod = {
    nombre: 'Monitor 24 Pulgadas',
    precio: 300,
}
// Los datos que almacena el local storage son siempre strings. Por lo que hay forma de guardar objetos o arreglos completos en forma de string utilizando una utilidad que se llama 'stringify' de la libreria de JS 'JSON'.

localStorage.setItem('producto', JSON.stringify(producto));

// Tambien puedo guardar arreglos.
const meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('meses', JSON.stringify(meses));
