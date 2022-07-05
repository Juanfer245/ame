<?php
include_once "../Modelo/operacion.php";

  $obj=new cursos();
  $registros=$obj->seleccionar();
  

  require_once "../Vista/prin.php";

  ?>
  