function Paciente(nombre, apellido, edad, genero, ciudad, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;
    this.ficha = function() {
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Pais: " + this.pais;
    }
}

var blanca = new Paciente("Blanca", "Perez", 19, "Femenino", "Santiago", "Chile");
console.log(blanca.ficha());