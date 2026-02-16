<?php
require 'db.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Check database connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format"]);
        exit;
    }

    // Save to database
    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        // Send email using PHPMailer
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com'; 
            $mail->SMTPAuth   = true;
            $mail->Username   = 'bhavyashahbvs@gmail.com'; // Use an App Password instead of a real password
            $mail->Password   = 'drxa yrdf cmkq yrwn'; // Use environment variable
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('bhavyashahbvs@gmail.com', 'KodeLess Website Builder');
            $mail->addAddress("$email"); 

            $mail->isHTML(true);
            $mail->Subject = "New Contact Form Submission";
            $mail->Body    = "<strong>Name:</strong> $name <br>
                              <strong>Email:</strong> $email <br>
                              <strong>Message:</strong> $message";

            $mail->send();
            echo json_encode(["status" => "success", "message" => "Message sent successfully and saved to database!"]);
        } catch (Exception $e) {
            echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to save message."]);
    }

    $stmt->close();
}

$conn->close();
?>
