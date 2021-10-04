const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleado.json')
        .then(res => res.json())
        .then(data => mostrarHTML(data));
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>Empresa: ${empresa}</p>
        <p>ID: ${id}</p>
    `

}