/*FORMULARIO 1*/

function inicializarFormulario1() {
    formulario1 = document.getElementById('formulario1');
    inputTipoSalto = document.getElementById('tipoSalto');
    inputAdicional = document.getElementById('adicional');
}
inicializarFormulario1();

formulario1.onsubmit = (event) => {
    event.preventDefault();

    let nuevoSalto = new salto(inputTipoSalto.value, inputAdicional.value);
    let opcion = inputTipoSalto.value

    switch (opcion) {
        case 'opcion 1':
            opcion1MasAdicional(adicional);
            opciones.push(nuevoSalto)
            agregarOpciones();
            formulario1.reset();
            break;
        case 'opcion 2':
            opcion2MasAdicional(adicional);
            opciones.push(nuevoSalto)
            agregarOpciones();
            formulario1.reset();
            break;
        default:
            Swal.fire({
                title: 'Selecciona adecuadamente los campos',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
            });
            break;
    }
}

function agregarOpciones() {
    opciones.forEach(salto => {
        console.log(salto.tipoSalto)
        console.log(salto.adicional)
    })
}

const opcion1MasAdicional = () => {

    let adicional = inputAdicional.value;
    switch (adicional) {
        case 'alturaExtra':
            subopcion1 = opcion1 + alturaExtra;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;
        case 'degustacion':
            subopcion1 = opcion1 + vinoEnElAire;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;
        case 'ambos':
            subopcion1 = opcion1 + alturaExtra + vinoEnElAire;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;
        case 'ningunAdicional':
            subopcion1 = opcion1;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;

        default:
            Swal.fire({
                title: 'Selecciona adecuadamente los campos',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
            });
            break;
    }
}

const opcion2MasAdicional = () => {

    let adicional = inputAdicional.value;
    switch (adicional) {
        case 'alturaExtra':
            subopcion1 = opcion2 + alturaExtra;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;
        case 'degustacion':
            subopcion1 = opcion2 + vinoEnElAire;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;
        case 'ambos':
            subopcion1 = opcion2 + alturaExtra + vinoEnElAire;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;
        case 'ningunAdicional':
            subopcion1 = opcion2;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center text-focus-in">El precio total es de $${subopcion1}<p>`
            break;

        default:
            Swal.fire({
                title: 'Selecciona adecuadamente los campos',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
            });
            break;
    }
}

/*FORMULARIO 2*/

function inicializarFormulario2() {
    formulario2 = document.getElementById("formulario2");
    inputNombre = document.getElementById("nombre");
    inputApellido = document.getElementById("apellido");
    inputEdad = document.getElementById("edad");
    inputPeso = document.getElementById("peso");
    inputDocumentacion = document.getElementById("documentacion");
    inputEmail = document.getElementById("email");
    inputTelefono = document.getElementById("telefono");
    inputFecha = document.getElementById("fecha");
    inputCantidadDePersonas = document.getElementById("cantidadDePersonas");
    inputMasculino = document.getElementById("masculino");
    inputFemenino = document.getElementById("femenino");
}
inicializarFormulario2();



datosJSON = JSON.parse(localStorage.getItem('datos')) || [];
console.log(datosJSON)



formulario2.onsubmit = (event) => {
    event.preventDefault();

    let nuevoDato = new Dato(inputNombre.value, inputApellido.value, inputEdad.value, inputPeso.value, inputDocumentacion.value, inputEmail.value, inputTelefono.value, inputFecha.value, inputCantidadDePersonas.value, inputMasculino, inputFemenino);

    if (inputNombre.value != "" && inputApellido.value != "" && inputEdad.value != "" && inputPeso.value != "" && inputDocumentacion.value != "" && inputEmail.value != "" && inputTelefono.value != "" && inputFecha.value != "" && inputCantidadDePersonas !== "") {

        datos.push(nuevoDato)
        let datosJSON = JSON.stringify(datos)

        localStorage.setItem('datos', datosJSON)
        agregarDatos();
        formulario2.reset()

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'envio de formulario',
                body: JSON.stringify(datos),
                user: 1,
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))

        Swal.fire({
            title: 'Tu formulario fue enviado correctamente',
            text: 'A la brevedad te vamos a contactar',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        });


    } else {
        Swal.fire({
            title: 'Completa adecuadamente el formulario',
            text: 'Revisá y llena todos los campos',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
    }
}

function agregarDatos() {
    datos.forEach(dato => {
        console.log(dato.nombre)
        console.log(dato.apellido)
        console.log(dato.edad)
        console.log(dato.peso)
        console.log(dato.documentacion)
        console.log(dato.email)
        console.log(dato.telefono)
        console.log(dato.fecha)
        console.log(dato.cantidadDePersonas)
        inputMasculino.checked ? console.log('masculino') : console.log('femenino')
    })
}