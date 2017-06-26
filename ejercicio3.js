// Escriba una funcion que reciba como parametro un arreglo y que sus elementos 
// sean agregados a un objeto llamado texto retornar las propiedad encadenadas en un string

function aObjeto(array) {
    var res = '';
    var texto = array.reduce(function(total, actual, indice) {
        total["propiedad" + (indice + 1)] = actual;
        res += "propiedad" + (indice + 1) + "-->" + actual + ";";
        return total;
    }, {});
    return res;
}
console.log(aObjeto([6, 5, 4, 3, 2, 1]));