function aObjeto(array) {
    return array.reduce(function(total, actual, indice) {
        total["propiedad" + (indice + 1)] = actual;
        return total;
    }, {});
}