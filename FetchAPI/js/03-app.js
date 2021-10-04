const cargarJSONArray = document.querySelector('#cargarJSONArray');
cargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/empleados.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(empleado => {
                console.log(empleado);
            });
        })
}