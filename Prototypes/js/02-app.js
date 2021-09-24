function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);


function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}


console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en Linea');
console.log(formatearEmpresa(CCJ));


// Los prototypes vienen a solucionar lo visto en el codigo arriba ⬆️.
// A medida que mas desarrolladores van metiendo mano en el codigo nadie sabe bien que funcion utilizar con que objeto u instancia de objeto
// Con los prototypes podemos crear funciones especificas para cada uno de estos objetos de alguna manera expandiendolos.
// Permitiendo a otros desarrolladores un mejor entendimiento y mantenimiento del codigo
