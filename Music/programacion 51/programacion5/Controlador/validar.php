<?php
include('../Modelo/db.php');
$codigo_curso=$_POST['codigo_curso'];
$cedula_estudiante=$_POST['cedula_estudiante'];
session_start();
$_SESSION['codigo_curso']=$codigo_curso;


$conexion=pg_connect("host=localhost port=5432 dbname=Academia_Proyecto user=postgres password=159753");

$consulta="SELECT*FROM cursos where codigo_curso='$codigo_curso' and cedula_estudiante='$cedula_estudiante'";
$resultado=pg_query($conexion,$consulta);

$filas=pg_num_rows($resultado);

if($filas){
  
    header("location:../Vista/prin.php");

}else{
    ?>
    <?php
    include("../Vista/index.html");

  ?>
  <h1 class="bad">ERROR DE AUTENTIFICACION</h1>
  <?php
}
pg_free_result($resultado);
pg_close($conexion);
