<?php 
    include_once ('../Controlador/in.php'); 
    include_once ('../Modelo/operacion.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="styleprin.css">
</head>

<header class="h">
    <h1>REGISTRO DE CURSOS DE UNA ACADEMIA DE BAILE</h1>
</header>

<body>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Codigo del curso</th>
                <th scope="col">Nombre del curso</th>
                <th scope="col">Duracion del curso</th>
                <th scope="col">Fecha de inicializacion</th>
                <th scope="col">Fecha de finalizacion</th>
                <th scope="col">Cedula del estudiante</th>
            </tr>
        </thead>

        <tbody>
            <?php foreach($registros as $record){ ?>
            <tr>
                <td class="is_integer"><?php echo "$record[codigo_curso]"?></td>
                <td class="texto"><?php echo "$record[nombre_curso]"?></td>
                <td class="texto"><?php echo "$record[duracion]"?></td>
                <td class="texto"><?php echo "$record[fecha_inicio]"?></td>
                <td class="is_integer"><?php echo "$record[fecha_final]"?></td>
                <td class="is_integer"><?php echo "$record[cedula_estudiante]"?></td>
                <td>
                    <a href="update.php?update=<?=$record['codigo_curso']?>" class="btn btn-secondary btn-sm">editar</a>
                    <a href="delete.php?delete=<?=$record['codigo_curso']?>" class="btn btn-danger  btn-sm">Eliminar</a>

                </td>
            </tr>
            <?php } ?>

        </tbody>
    </table>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                <a class="btn btn-info bg-info p-2" href="../Vista/index.php"><h6>Desea agregar mas datos?</h6></a>                </div>
            </div>
        </div>
    </footer>
</body>

</html>