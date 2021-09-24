// Las fechas residen en un objeto llamado Date

let fecha = new Date();

fecha = new Date('January 5 2000'); // Se puede asignar una fecha en especifico pasando la string con la fecha m/d/y


console.log(fecha);


// Mostrar el año actual
year = fecha.getFullYear();
month = fecha.getMonth();
hours = fecha.getHours();
minutes = fecha.getMinutes();
seconds = fecha.getSeconds();
timestamp = fecha.getTime();


console.log(year, month, hours, minutes, seconds, timestamp);

// Timestamp actual

console.log(Date.now());