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
            <input type="submit" value="Eliminar" class="formulario-eliminar" method="POST" href="../Vista/prin.php">
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
    title: 'Estas Seguro/a?',
    text: "Una vez eliminado no se podra recuperar la información!",
    icon: 'Precaución',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok, Eliminar!'
})
</script>