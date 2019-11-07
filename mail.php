<?php
function ValidarDatos($campo){
//Array con las posibles cabeceras a utilizar por un spammer
$badHeads = array("Content-Type:",
"MIME-Version:",
"Content-Transfer-Encoding:",
"Return-path:",
"Subject:",
"From:",
"Envelope-to:",
"To:",
"bcc:",
"cc:");

$value = array();
//Comprobamos que entre los datos no se encuentre alguna de
//las cadenas del array. Si     se encuentra alguna cadena se
//dirige a una página de Forbidden
    foreach($badHeads as $valor){
        if(strpos(strtolower($campo), strtolower($valor)) !== false){
            $value[] = 1;
            
        } else {
            $value[] = 0;
        }
    }
if (array_search(1,$value) === false) {
    return true;
} else {
    return false;
}
}

// //Ejemplo de llamadas a la funcion
$nombre = $_POST['firstname'];
$pais = $_POST['pais'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$nombre1 = ValidarDatos($_POST['firstname']);
$pais1 = ValidarDatos($_POST['pais']);
$email1 = ValidarDatos($_POST['email']);
$mensaje1 = ValidarDatos($_POST['mensaje']);

$nombre2 = filter_var( $nombre, FILTER_SANITIZE_STRING);
$email2 = filter_var( $email, FILTER_VALIDATE_EMAIL);
$pais2 = filter_var( $pais, FILTER_SANITIZE_STRING);
$mensaje2 = filter_var( $mensaje, FILTER_SANITIZE_STRING);

if ($nombre1 === false || $pais1 === false || $email1 === false || $mensaje1 === false) {
    echo "el mensaje contiene headers";
} else {
    echo $mensaje2;
}


?>
