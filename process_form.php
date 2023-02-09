<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$mail_body = "Name : ".$name."<br>"; 
$mail_body .= "Email : " . $email . "<br>";
$mail_body .= "Subject : " . $subject . "<br>";
$mail_body .= "Message : " . $message . "<br>";
if(mail("aiaamgad77@gmail.com","From: Contact Form Your name",$mail_body,$headers)){
    $thanks_mail_body = "Hello " . $name ."<br>";
    
    $thanks_mail_body .= "Hey! Thanks for your email!<br>";
    $thanks_mail_body .= "I will get back to you soon.<br>";
    $thanks_mail_body .= "Thank You,<br>";
    $thanks_mail_body .= "Your Name.";

    if(mail($email,"Contact Request Notification Email",$thanks_mail_body,$headers)){
        echo "1";
        die();
    }
    echo "1";    
}else{
    echo "0";
}
