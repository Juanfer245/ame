<?php

require_once('../Modelo/operacion.php');

$codigo_curso=$_POST['codigo_curso'];
$nombre_curso=$_POST['nombre_curso'];
$duracion=$_POST['duracion'];
$fecha_inicio=$_POST['fecha_inicio'];
$fecha_final=$_POST['fecha_final'];
$cedula_estudiante=$_POST['cedula_estudiante'];



$obj=new cursos();
$obj -> insertar($codigo_curso, $nombre_curso, $duracion, $fecha_inicio, $fecha_final, $cedula_estudiante);
header('Location: ../Vista/index.html.');
 ?>