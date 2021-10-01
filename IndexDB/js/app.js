document.addEventListener('DOMContentLoaded', () => {
    initDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})
// Instancia global de la DB
let DB;

function initDB(){
    const init = window.indexedDB.open('crm', 1);
    // En caso de ser exitosa la creacion de la db
    init.onsuccess = function (e) {
        DB = e.target.result;
    }
    // En caso de error
    init.onerror = function (e) {
        console.log('Hubo un error al crear la DB');
    }
    // Una vez creada la base de datos este codigo se ejecutara una sola vez
    init.onupgradeneeded = function (e) {
        // Obtengo la DB
        DB = e.target.result;
        // Creo el Object Store
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });
        // Creo las columnas
        console.log(objectStore);
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
    }
}
// IndexDB funciona con transacciones
function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function (){
        console.log('Transaccion Completada');
    }
    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }
    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {
        telefono: 2236690789,
        nombre: 'Ilan',
        email: 'fritzlerilan@gmail.com'
    }
    const peticion = objectStore.add(nuevoCliente);
}