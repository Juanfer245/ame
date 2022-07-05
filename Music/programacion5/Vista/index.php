<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    
    <title>Document</title>

</head>
<header>
    <h1 class="text-center">DATOS DE PARTICIPANTES</h1>
</header>

<body>
    <form action="../Controlador/lectura.php" method="POST">
        <div class="col-6 col-sm-4">
            <div class="form-group">
                <label for="codigo_curso">Codigo del curso</label>
                <input type="is_integer" placeholder="" name="codigo_curso" required>
            </div>
        </div>

        <div class="col-6 col-sm-4">
            <div class="form-group">
                <label for="nombre_curso">Nombre del curso</label>
                <input type="text" name="nombre_curso" required>
            </div>
        </div>

        <div class="col-6 col-sm-4">
            <div class="form-group">
                <label for="duracion">Duracion del curso</label>
                <input type="text" name="duracion" class="form-control">
            </div>
        </div>

        <div class="col-6 col-sm-4">
            <div class="form-group">
                <label el for="fecha_inicio">Fecha de inicializacion del curso</label>
                <input type="text" name="fecha_inicio" class="form-control">
            </div>
        </div>

        <div class="form-group">
            <label for="fecha_final">Fecha de finalizacion del curso</label>
            <input type="is_integer" name="fecha_final" class="form-control">
        </div>

        <div class="col-6 col-sm-4">
            <div class="form-group">
                <label for="cedula_estudiante">Cedula del estudiante</label>
                <input type="is_integer" maxlength="10" name="cedula_estudiante" class="form-control">
            </div>
        </div>
        <input type="submit" class="btn btn-primary float-right" value="Enviar datos">
    </form>

</body>

</html>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
Swal.fire({
    title: 'Registro de Personas!',
    text: 'Completa el formulario de Registro.',
    imageUrl: 'data:image/jpeg;base64,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',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})
</script>