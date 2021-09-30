// Maps son listas ordenadas en llave y valor (dictionaries) y pueden ser de cualquier tipo de dato
// Tienen mejor performance que un objeto
const cliente = new Map();

//Añadiendo datos
cliente.set('nombre', 'Ilan');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(false, true);
cliente.set([0], false); // Se puede colocar cualquier tipo de dato como llave del valor

console.log(cliente);

// Se puede conocer la extension del map
console.log(cliente.size);
console.log(cliente.has(false)); // Se busca por llave

// Buscar en el map
console.log(cliente.get('nombre'));

console.log(cliente.delete('saldo')); // --> true
console.log(cliente.get('saldo')); // --> undefined, al intentar buscar por una llave valor que ya no existe nos devuelve undefined

// Limpiar el map
cliente.clear();

// Declarar un map con valores al inicio
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);
console.log(paciente);

//  Los maps son iterables
paciente.forEach((valor, llave, mapOriginal) => {
    console.log(valor, llave, mapOriginal);
})