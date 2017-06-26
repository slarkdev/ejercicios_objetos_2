var assert = require('assert');

function SuperCoder(nombre, edad, ocupacion, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
    this.mensaje = function() {
        return (this.edad > 17 && this.genero.toLowerCase() == "femenino" &&
            (this.ocupacion.toLowerCase() == "web developer" ||
                this.ocupacion.toLowerCase() == "estudiante laboratoria")) ? "You're awesome" : "Upsiii";
    }
}

describe("Ejercicio 2", function() {
    it("para Tamara deberia ser You're awesome", function() {
        var coder = new SuperCoder("Tamara", 22, "Estudiante Laboratoria", "Femenino");
        assert.equal("You're awesome", coder.mensaje());
    })
    it("para Ester deberia ser Upsiii", function() {
        var coder = new SuperCoder("Ester", 22, "Enfermera", "Femenino");
        assert.equal("Upsiii", coder.mensaje());
    })

    it("para Lucia deberia ser Upsiii por que su edad es menor de 17", function() {
        var coder = new SuperCoder("Lucia", "5", "Enfermera", "Femenino");
        assert.equal("Upsiii", coder.mensaje());
    })
})