<?php
include_once('../Vista/update.php');
include_once('../Modelo/operacion.php');

if(isset($_POST['codigo_curso'])){

$codigo_curso=$_POST['codigo_curso'];
$nombre_curso=$_POST['nombre_curso'];
$duracion=$_POST['duracion'];
$fecha_inicio=$_POST['fecha_inicio'];
$fecha_final=$_POST['fecha_final'];
$cedula_estudiante=$_POST['cedula_estudiante'];

$obj= new cursos();
$obj->actualizar($codigo_curso, $nombre_curso, $duracion, $fecha_inicio, $fecha_final, $cedula_estudiante);
}
?>