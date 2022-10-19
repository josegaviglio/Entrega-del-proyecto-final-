/*FORMULARIO DE PRESUPUESTO*/

let opciones = []
let formulario1;
let inputTipoSalto;
let inputAdicional;
let presupuesto;

class salto {
    constructor(tipoSalto, adicional){
        this.tipoSalto = tipoSalto;
        this.adicional = adicional;
   }
}

let opcion1 = 40000;
let opcion2 = 52000;
let alturaExtra = 6000;
let vinoEnElAire = 5000;



/*FORMULARIO DE CONTACTO*/
let datos = []
let formulario2;
let inputNombre;
let inputApellido;
let inputEdad;
let inputPeso;
let inputDocumentacion;
let inputEmail;
let inputTelefono;
let inputFecha;
let inputCantidadDePersonas;
let inputMasculino;
let inputFemenino;


class Dato {
    constructor(nombre, apellido, edad, peso, documentacion, email, telefono, fecha, cantidadDePersonas, masculino, femenino){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.documentacion = documentacion;
        this.email = email;
        this.telefono = telefono
        this.fecha = fecha;
        this.cantidadDePersonas = cantidadDePersonas;
        this.masculino = masculino;
        this.femenino = femenino;
    }
}