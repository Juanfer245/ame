<?php
include_once "conexion.php";


class cursos{
    
    function insertar($codigo_curso, $nombre_curso, $duracion, $fecha_inicio, $fecha_final, $cedula_estudiante)
   { return pg_query (CConexion::ConexionBD(),"INSERT INTO cursos Values ($codigo_curso, '$nombre_curso', '$duracion', '$fecha_inicio', '$fecha_final', $cedula_estudiante)");}

    static public function seleccionar(){
        $resp = pg_query(CConexion::ConexionBD(),"SELECT * FROM cursos");
        $datos=pg_fetch_all($resp);
        return $datos;
       }
       function actualizar($codigo_curso, $nombre_curso, $duracion, $fecha_inicio, $fecha_final, $cedula_estudiante){
        return pg_query(CConexion::ConexionBD(),"UPDATE cursos SET  nombre_curso='$nombre_curso', duracion='$duracion', fecha_inicio='$fecha_inicio', fecha_final='$fecha_final', cedula_estudiante= '$cedula_estudiante' where codigo_curso='$codigo_curso' ");
        
      }
      function eliminar($codigo_curso){
        return pg_query(CConexion::ConexionBD(),"DELETE FROM cursos WHERE codigo_curso = '$codigo_curso' ");
      }


}


?>