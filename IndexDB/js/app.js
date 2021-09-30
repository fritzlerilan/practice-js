document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})

function crmDB(){
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la DB');
    }
    // Si se creo bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada');
    }
    // Configuracion de la DB
    crmDB.onupgradeneeded = function() {
        console.log('Este metodo solo se ejecuta una vez');
    }
}