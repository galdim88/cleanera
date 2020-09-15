<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (isset($_POST['userName'])) {$userName = $_POST['userName'];}
	if (isset($_POST['userPhone'])) {$userPhone = $_POST['userPhone'];}
    if (isset($_POST['userEmail'])) {$userEmail = $_POST['userEmail'];}
    if (isset($_POST['userMessage'])) {$userMessage = $_POST['userMessage'];}
    if (isset($_POST['service'])) {$service = $_POST['service'];}
    if (isset($_POST['formName'])) {$formName = $_POST['formName'];}
}

	// Реальный email-адрес, на который будет приходить письмо
	$to = 'galo4kin.d@gmail.com';
	// Любой email-адрес, с которого приходит письмо (можно фейк)
	$sendfrom   = 'zakaz@cleanera.ru';
	// Формируем заголовок письма
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	// Формируем тему письм
	$subject = $formName;
	// Формируем текст письма
	$message = 	$formName . '<br>
				<b>Имя пославшего:</b>' . $userName . '<br>
				<b>Телефон:</b>' . $userPhone . '<br>';
		if (isset($_POST['service'])) {
			$message .= '<b>Услуга</b>' . $service . '<br>';
		}		
	    if (isset($_POST['userEmail'])) {
	        $message .= '<b>E-mail: </b>' . $userEmail . '<br/>';
	    }
	    if (isset($_POST['userMessage'])) {
	        $message .= '<b>Сообщение: </b>' . $userMessage . '<br/>';
	    }
	// Пробуем отправить письмо
	$send = mail($to, $subject, $message, $headers);
    if ($send == 'true') { 
    	// В случае успешной отправки
    	echo '<div class="success">
				<h4>Спасибо за Вашу заявку!</h4>
				<p>В ближайшее время наш менеджер Вам перезвонит.</p>
    		 </div>';
    } else {
    	// Если возникла ошибка при отправке
        echo '<div class="fail">
                <h4>Ошибка.</h4>
                <p><b>Сообщение не отправлено!</b></p>
             </div>';
    }

} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}