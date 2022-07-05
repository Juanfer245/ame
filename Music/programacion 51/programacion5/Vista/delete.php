<?php
include_once "../Modelo/conexion.php";
include_once "../Controlador/deletecontrolador.php";

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar ID</title>
    <link rel="stylesheet" type="text/css" href="styledelete.css">
</head>
<header>
    <h1 class="text-center">ELIMINAR</h1>
</header>

<body>
    <div class="container">
        <form action="../Controlador/deletecontrolador.php" class="form" id="form" autocomplete="off" method="POST">
            <div class="form-group">
                <label for="codigo_curso">codigo curso</label>
                <input type="is_integer" placeholder="Ingrese el id" name="codigo_curso" required>
            </div>
            <input type="submit" value="Eliminar" class="formulario-eliminar" method="POST" href="prin.php">
            <a href="../Vista/prin.php">regresar</a>
        </form>
    </div>
</body>

</html>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
/*$('.formulario-eliminar').submit(function(e) {
    e.preventDefault();
})*/
Swal.fire({
    title: 'Sus datos seràn borrados permanentemente',
    showClass: {
        popup: 'animate_animated animate_fadeInDown'
    },
    hideClass: {
        popup: 'animate_animated animate_fadeOutUp'
    }
})
/*.then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
            'Eliminado!',
            'Los Datos Fueron Eliminados.',
            'Eliminación Exitosa'
        )
    }
})*/
</script>