"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estudiantes = [];
let docente = [];
let actividades = [];
let agregar = [];
var Curso;
(function (Curso) {
    Curso["Programacion"] = "Base de datos";
    Curso["Metodologias"] = "Dise\u00F1o de interfaz";
    Curso["Analisis"] = "Analisis de sistemas";
})(Curso || (Curso = {}));
var Actividad;
(function (Actividad) {
    Actividad["Cuaderno"] = "Cuaderno";
    Actividad["Trabajos"] = "Trabajos";
    Actividad["Guias"] = "Guias";
})(Actividad || (Actividad = {}));
function agregarEstudiante() {
    //console.log("añadir estudiante");
    //console.log((<HTMLInputElement> document.getElementById("cedula"))!.value);
    let estudianteActual = {
        cedula: parseInt(leerHtml("cedula_estudiante")),
        nombre: leerHtml("nombre_estudiante"),
        edad: parseInt(leerHtml("edad_estudiante")),
        codigoMatricula: leerHtml("codigoMatricula"),
        nivel: leerHtml("nivel"),
    };
    estudiantes.push(estudianteActual);
    console.log(estudianteActual);
    console.table(estudianteActual);
}
function leerHtml(id) {
    return document.getElementById(id).value;
}
function agregarDocente() {
    let docenteActual = {
        cedula: parseInt(leerHtml("cedula_docente")),
        nombre: leerHtml("nombre_docente"),
        edad: parseInt(leerHtml("edad_docente")),
        titulo: (leerHtml("titulo_docente")),
        asignatura: leerHtml("asignatura_docente")
    };
    docente.push(docenteActual);
    console.log(docente);
    console.table(docente);
}
function agregarActividad() {
    let actividadActual = {
        nombre: leerHtml("nombre_actividad")
    };
    actividades.push(actividadActual);
    console.log(actividades);
    console.table(actividades);
}
seleccionarOpcion();
function agregarLibroCalf() {
    let libroCalActual = {
        valor: parseInt(leerHtml("valor_libroCalf")),
        curso: leerHtml("curso_libroCalf"),
        actividad: leerHtml("actividad_libroCalf"),
        notaMaxima: parseInt(leerHtml("notaMaxima_libroCalf")),
    };
    agregar.push(libroCalActual);
    console.log(agregar);
    console.table(agregar);
}
function seleccionarOpcion() {
    let cursolibroCalf = document.getElementById("curso_libroCalf");
    let cursos = Object.values(Curso);
    let actividadlibroCalf = document.getElementById("actividad_libroCalf");
    let actividad = Object.values(Actividad);
    cursos.forEach((dato) => {
        let opcion = document.createElement("option");
        opcion.value = dato;
        opcion.text = dato;
        cursolibroCalf.add(opcion);
    });
    actividad.forEach((dato) => {
        let opcion = document.createElement("option");
        opcion.value = dato;
        opcion.text = dato;
        actividadlibroCalf.add(opcion);
    });
    //cursolibroCalf.add(Option);
}
