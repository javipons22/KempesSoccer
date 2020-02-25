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

$errorMSG = "";

// TELEFONO
if (empty($nombre) || empty($pais) || empty($email) || empty($mensaje)) {
    $errorMSG = "1";
}

$nombre1 = ValidarDatos($nombre);
$pais1 = ValidarDatos($pais);
$email1 = ValidarDatos($email);
$mensaje1 = ValidarDatos($mensaje);

$nombre2 = filter_var( $nombre, FILTER_SANITIZE_STRING);
$email2 = filter_var( $email, FILTER_VALIDATE_EMAIL);
$pais2 = filter_var( $pais, FILTER_SANITIZE_STRING);
$mensaje2 = filter_var( $mensaje, FILTER_SANITIZE_STRING);

// ---------------------
// INFORMACION DEL EMAIL
// ---------------------
$sender = 'hola@kempessoccer.info';
$EmailTo = "hola@kempessoccer.info";
$Subject = "Nuevo mensaje de consulta de la web";

// Cuerpo del email
$Body = "";
$Body .= "<strong>Nombre: </strong> " . $nombre2 . "<br>";
$Body .=  "<strong>Email: </strong> " . $email2 . "<br>";
$Body .= "<strong>Pais: </strong> " . $pais2 . "<br>";
$Body .= "<strong>" . $nombre2 . " escribió el siguiente mensaje:</strong><br> " . $mensaje2;

// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
$headers = 'From:' . $sender. "\n";
// $headers = "X-Mailer: PHP5\n";
// $headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";




if ($nombre1 === false || $pais1 === false || $email1 === false || $mensaje1 === false) {
    header("Location: http://www.kempessoccer.info/?error=true");
} else {
    // Si se paso la MEDIDA DE SEGURIDAD 1 enviar email
    $success = mail($EmailTo, $Subject, $Body, $headers);
    $success2 = mail('buffajuanalfredo@gmail.com', $Subject, $Body, $headers);
    // $response = array();

    if ($success && $errorMSG == "") {
        header("Location: http://www.kempessoccer.info/?error=false");
        // $response['status'] = 'success';
        // $response['message'] = 'Tu mensaje fue enviado con exito!!';
    } else {
        header("Location: http://www.kempessoccer.info/?error=true");
    }
}

// 1 - Completa todos los campos
// 2 - el mensaje contiene headers
?>
