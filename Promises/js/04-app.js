const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        console.log(paises);
        resolve(`Agregado: ${pais}`);
    }, 3000);
})

nuevoPais('Alemania')
    .then( resultado => {
        console.log(resultado);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        return nuevoPais('Argentina');
    })
    .then(resultado => {
        console.log(resultado);
    })