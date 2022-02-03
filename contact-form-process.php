<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['name'];

    $email_from = 'admin@stocktrackerau.com';
    $email_subject= 'Stock Tracker Contact';
    $email_body = "Name: $name.\n".
                    "Email: $name.\n".
                        "Message: $name.\n".;

    $to = "contact@stocktrackerau.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>
