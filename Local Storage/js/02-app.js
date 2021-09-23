// Obtener los datos del local storage

// const nombre = localStorage.getItem('nombre');
// console.log(nombre); // --> "Ilan"


// Si le pido un valor que no esta dentro del local storage me devolvera un null
const nombre2 = localStorage.getItem('nombre2');
console.log(nombre2); // --> null

// Tambien puedo usar destructuring ya que el localStorage es un objeto.
const { nombre, producto } = localStorage;
console.log(nombre);
console.log(producto);

// Obtener los JSON para luego obtener el objeto de forma nativa
const productoJSON = localStorage.getItem('producto');
const productoParseado = JSON.parse(productoJSON);
console.log(productoParseado);

// Tambien podemos traer arreglos y parsearlos
const mesesJSON = localStorage.getItem('meses');
const mesesParseado = JSON.parse(mesesJSON);
console.log(mesesParseado);