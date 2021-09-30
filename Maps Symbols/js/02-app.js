// WeakSet tiene la caracteristica que solo se le pueden pasar objetos

const weakset = new WeakSet();

const cliente = {
    nombre: 'Ilan',
    saldo: 100
}
// const nombre = 'Ilan';

weakset.add(cliente);
//weakset.add(nombre); // Uncaught TypeError: WeakSet value must be an object, got nombre
console.log(weakset);

console.log(weakset.has(cliente)); // Podremos ver si existe un objeto solo con pasarselo
// Eliminar un objeto
weakset.delete(cliente);