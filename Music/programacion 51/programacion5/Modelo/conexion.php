<?php
class CConexion{
public static function ConexionBD(){
    $host = "host=localhost";
    $port = "port=5432";
    $dbname = "dbname=Academia_Proyecto";
    $user = "user=postgres";
    $password = "password=159753";

    $db = pg_connect("$host $port $dbname $user $password");

    return $db;
} 
}
?>