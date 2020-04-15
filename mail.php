
<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;
// use PHPMailer\PHPMailer\SMTP;

//require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
//require 'PHPMailer/src/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->SMTPDebug = 0;
// //Ejemplo de llamadas a la funcion
$nombre = $_POST['firstname'];
$pais = $_POST['pais'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];


    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    // $mail->isSMTP();                                            // Send using SMTP
    // $mail->Host       = 'dtcwin155.ferozo.com';                    // Set the SMTP server to send through
    // $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    // $mail->Username   = 'no-reply@w1551599.ferozo.com';                     // SMTP username
    // $mail->Password   = 'wivifu83VE';                               // SMTP password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    // $mail->Port       = 25;                                 // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('hola@kempessoccer.info', 'Formulario KEMPES SOCCER');
    $mail->addAddress('hola@kempessoccer.info', 'Kempes');     // Add a recipient
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Nuevo contacto desde el formulario de KEMPES SOCCER';
    $mail->Body = "<h3>Contacto desde formulario<h3/>"
                . "<div style='display:block'>" . "<strong>Nombre: </strong> " . $nombre . "</div><br>"
                . "<div style='display:block'>" . "<strong>Email: </strong> " . $email . "</div><br>"
                . "<div style='display:block'>" . "<strong>Pais: </strong> " . $pais . "</div><br>"
                . "<div style='display:block'>" . "<strong>" . $nombre . " escribio el siguiente mensaje:</strong></div><br> " . $mensaje;

    $mail->AltBody = $nombre . " " . $email . " " . $pais . " " . $mensaje; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //
    $status = $mail->send();
    if(!$status) {
        echo'<script>window.location.href="http://www.kempessoccer.info/?error=true"; </script>';
        exit(); 
    } else {
        echo'<script>window.location.href="http://www.kempessoccer.info/?error=false"; </script>';
        exit();
    }
?>