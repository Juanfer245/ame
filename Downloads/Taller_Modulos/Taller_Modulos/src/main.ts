import { IEstudiante } from "./entity/Estudiante";
import { IDocente } from "./entity/Docente";
import{IActividades} from "./entity/Actividades"
import{ILibroCalificaciones} from "./entity/LibroCalificaciones"

let estudiantes: IEstudiante[] = [];
let docente: IDocente[] = [];
let actividades: IActividades[] = [];
let agregar: ILibroCalificaciones[] = [];
enum Curso {
    Programacion = "Base de datos",
    Metodologias = "Diseño de interfaz",
    Analisis = "Analisis de sistemas",
}

enum Actividad{
    Cuaderno  = "Cuaderno",
        Trabajos = "Trabajos",
        Guias = "Guias"
        }
function agregarEstudiante(): void {
    //console.log("añadir estudiante");
    //console.log((<HTMLInputElement> document.getElementById("cedula"))!.value);
    let estudianteActual: IEstudiante = {

        cedula:parseInt(leerHtml("cedula_estudiante")),
        nombre:leerHtml("nombre_estudiante"),
        edad:parseInt(leerHtml("edad_estudiante")),
        codigoMatricula:leerHtml("codigoMatricula"),
        nivel:leerHtml("nivel"),
    }
    estudiantes.push(estudianteActual);
    console.log(estudianteActual);
    console.table(estudianteActual);
}

function leerHtml(id:string):string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}

function agregarDocente(): void {
    let docenteActual: IDocente = {

        cedula:parseInt(leerHtml("cedula_docente")),
        nombre:leerHtml("nombre_docente"),
        edad:parseInt(leerHtml("edad_docente")),
        titulo:(leerHtml("titulo_docente")),
        asignatura:leerHtml("asignatura_docente") as "Programamcion" | "Metodologias " |"Analisis"  
      };
    docente.push(docenteActual);
    console.log(docente);
    console.table(docente);
}

function agregarActividad():void{
    let actividadActual:IActividades={
        nombre:leerHtml("nombre_actividad")
    }
    actividades.push(actividadActual);
    console.log(actividades);
    console.table(actividades);
}

seleccionarOpcion();
function agregarLibroCalf():void{
    let libroCalActual:ILibroCalificaciones={
        valor:parseInt(leerHtml("valor_libroCalf")),
        curso:leerHtml("curso_libroCalf") as "Programacion " | "Metodologias" | "Analisis" ,
        actividad:leerHtml("actividad_libroCalf"),
        notaMaxima: parseInt(leerHtml("notaMaxima_libroCalf")),
        
    }
    
    agregar.push(libroCalActual);
    console.log(agregar);
    console.table(agregar);
  

}


function seleccionarOpcion():void{
    let cursolibroCalf = document.getElementById("curso_libroCalf") as HTMLSelectElement;
    let cursos = Object.values(Curso);
    let actividadlibroCalf = document.getElementById("actividad_libroCalf") as HTMLSelectElement;

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
    
