// Eliminar elementos del local storage es muy facil

localStorage.removeItem('nombre');

// Si eliminamos un valor que no existe en el mismo no nos arrojara ningun error.

localStorage.removeItem('nombre2');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

mesesArray.push('Nuevo Mes');
localStorage.setItem('meses', mesesArray); // Sobreescribe el valor original


// Como limpiar el local storage?
localStorage.clear();
