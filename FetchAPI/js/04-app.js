const cargarApi = document.querySelector('#cargarAPI');

cargarApi.addEventListener('click', cargarDatos);


function cargarDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarHTML(data));
}

function mostrarHTML(data){
    const contenido = document.querySelector('.contenido');
    const nuevoDiv = document.createElement('div');
    
    data.forEach(e => {
        const {id, author, filename} = e;
        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.innerHTML = `${id} - ${author} - ${filename}`;
        nuevoDiv.appendChild(nuevoParrafo);
        contenido.appendChild(nuevoDiv);
    });
}