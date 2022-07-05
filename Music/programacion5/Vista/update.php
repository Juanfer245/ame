<?php 
include_once '../Modelo/conexion.php';
require_once '../Controlador/ac.php';


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Categorias</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<header>
    <h1 class="text-center">ACTUALIZAR INFORMACIÓN</h1>
</header>

<body>
    <div class="container">

        <form action="../Controlador/ac.php" class="form" id="form" autocomplete="off" method="POST">

            <div class="form-group">
                <label for="codig_curso">Codigo del curso</label>
                <input type="is_integer" name="codigo_curso" required>
            </div>

            <div class="form-group">
                <label for="nombre_curso">Nombre del curso</label>
                <input type="text" name="nombre_curso" required>
            </div>

            <div class="form-group">
                <label for="duracion">Duracion del curso</label>
                <input type="text" name="duracion">
            </div>

            <div class="form-group">
                <label for="fecha_inicial">Fecha de inicializacion</label>
                <input type="text" name="fecha_inicio">
            </div>

            <div class="form-group">
                <label for="fecha_final">Fecha de finalización</label>
                <input type="text" name="fecha_final">
            </div>

            <div class="form-group">
                <label for="cedula_estudiante">Cedula del estudiante</label>
                <input type="is_integer" maxlength="10" name="cedula_estudiante">
            </div>
            <input type="submit" value="Actualizar" href="../Vista/prin.php">

        </form>

    </div>
</body>

</html>