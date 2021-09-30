// Generador es una funciton que retorna un iterador

// function *crearGenerador() {
//     yield 1;
//     yield 'Ilan';
//     yield 3+3;
//     yield true;
// }

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value); // 1
// console.log(iterador.next().done);  // false
// console.log(iterador.next().value); // 6
// console.log(iterador.next()); // true
// console.log(iterador.next()); 
// console.log(iterador);

// Generador para carrito de compras
function *generadorCarrito( carrito ) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Prod 1','Prod 2','Prod 3'];
const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
