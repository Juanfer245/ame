<?php
include_once ('../Vista/delete.php');
include_once ('../Modelo/operacion.php');


if(isset($_POST['codigo_curso'])){

    $codigo_curso=$_POST['codigo_curso'];
    
    
    $obj= new cursos();
    $obj->eliminar($codigo_curso);

    header('Location: ../Vista/prin.php');
    }
    
?>