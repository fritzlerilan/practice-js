// Callbacks

const paises = ['francia', 'españa', 'portugal', 'australia', 'inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 1000);
}


// Si cuando se esta mostrando la lista de clientes se añade un pais nuevo. este no formaria parte de la lista impresa por la funcion mostrarPaises(). Aqui es donde son utiles los callback

mostrarPaises();
nuevoPais('Alemania', mostrarPaises);