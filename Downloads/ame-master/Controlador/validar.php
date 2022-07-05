<?php
include('../Modelo/db.php');
$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];
session_start();
$_SESSION['usuario']=$usuario;


$conexion=pg_connect("host=localhost port=5432 dbname=ejercicio02 user=postgres password=159753");

$consulta="SELECT*FROM usuarios where usuario='$usuario' and contraseña='$contraseña'";
$resultado=pg_query($conexion,$consulta);

$filas=pg_num_rows($resultado);

if($filas){
  
    header("location:../Vista/home.php");

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
