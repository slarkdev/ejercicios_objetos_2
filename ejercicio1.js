var assert = require('assert');


// Escriba una funcion que reciba como parametro numInicial y numFinal.
// Cree un objeto literal llamado objeto que tenga las propiedades inicio y fin
// con los valores de los parámetros indicados anteriormente.
// Retornar la suma de los numeros pertenecientes al rango entregado

function ejercicio1(numInicial, numFinal) {
    // creamos el objeto literal
    var objeto = {
        inicio: (!isNaN(numInicial)) ? numInicial : numFinal, //validamos que haya campos ingresados
        fin: (!isNaN(numFinal)) ? numFinal : numInicial,
        //propiedad que calcula la suma
        suma: function() {
            var suma = 0;
            var i = this.inicio < this.fin ? this.inicio : this.fin;
            var j = this.inicio < this.fin ? this.fin : this.inicio;
            for (i; i <= j; i++)
                suma += i;
            return suma;
        }
    };
    return objeto.suma();
}

describe('Ejercicio 1: ', function() { // agrupamos las pruebas
    it('numInicial = 1 y numFinal = 10 deberia ser 55', function() { //primera prueba en orden ascendente
        var resultado = ejercicio1(1, 10);
        assert.equal(55, resultado);
    })
    it('numInicial = 20 y numFinal = 0 deberia ser 210', function() { //segunda prueba en orden descendente
        var resultado = ejercicio1(20, 0);
        assert.equal(210, resultado);
    })
    it('numInicial = 20 y numFinal = nada deberia ser 20', function() { //tercera prueba
        var resultado = ejercicio1(20);
        assert.equal(20, resultado);
    })
    it('numInicial = nada y numFinal = nada deberia ser 0', function() { //cuarta prueba
        var resultado = ejercicio1();
        assert.equal(0, resultado);
    })
});