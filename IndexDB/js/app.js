document.addEventListener('DOMContentLoaded', () => {
    initDB();
})


function initDB(){
    const init = window.indexedDB.open('crm', 1);
    // En caso de ser exitosa la creacion de la db
    init.onsuccess = function (e) {
        console.log(e.target);
    }
    // En caso de error
    init.onerror = function (e) {
        console.log('Hubo un error al crear la DB');
    }
    // Una vez creada la base de datos este codigo se ejecutara una sola vez
    init.onupgradeneeded = function (e) {
        // Obtengo la DB
        const db = e.target.result;
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