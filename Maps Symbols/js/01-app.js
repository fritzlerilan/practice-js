// Sets
const carrito = new Set();

// Agregar elementos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); // Los set no permiten valores duplicados

console.log('Tamaño del set: ', carrito.size) // Permite conocer la cantidad de elementos en nuestro set. a diferencia del metodo .lenght de los Array

// Comprobar si un valor existe
console.log('Tiene el elemento "Camisa": ', carrito.has('Camisa')); // Devuelve un valor boolean
console.log('Tiene el elemento "Guitarra": ', carrito.has('Guitarra')); // Devuelve un valor boolean

// Eliminar elementos se hace con el medoto detele
carrito.delete('Camisa'); // Este metodo tiene la particularidad que devuelve True o False segun haya eliminado o no el elemento solicitado
console.log('Eliminar Disco #4: ', carrito.delete('Disco #4'));


// Los sets son iterables
carrito.forEach((producto, index, pertenece) => { // Primer parametro y segundo son iguales. Tercer parametro imprime el set completo al que pertence el iterado
    console.log(producto, index);
    console.log(pertenece);
})

// Eliminar elementos del carrito
carrito.clear();
console.log(carrito);


// Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(numeros);
console.log(noDuplicados);
