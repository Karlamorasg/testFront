// Implementar la función sumaArray para calcular, de forma genérica, la suma de los elementos de un array numérico (incluyendo varios niveles).
// 	function sumaArray(lista) {…}
// Ejemplos de arrays a pasar en la función:
// 	var lista1 = [1, 4, 3, 0];
// 	var lista2 = [1, 2, [5, 8], 4];
// 	var lista3 = [0, [6, 2], null, 7, 1];

const sumaArray = (lista) => {
  return lista.reduce((acum, num) => {
    const numArr = Array.isArray(num) ? sumaArray(num) : num;
    return acum + numArr;
  }, 0);
};

var lista1 = [1, 4, 3, 0];
var lista2 = [1, 2, [5, 8], 4];
var lista3 = [0, [6, 2], null, 7, 1];

console.log(sumaArray(lista2));
