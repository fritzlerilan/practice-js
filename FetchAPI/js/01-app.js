const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    url = 'data/datos.txt';
    fetch(url)
        .then(res => {
            return res.text();
        })
        .then(data => {
            console.log(data);  
        })
        .catch(err => {
            console.log(err);
        });
}