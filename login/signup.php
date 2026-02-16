<?php
session_start();
require 'db.php'; // Include your database connection file
require 'vendor/autoload.php'; // Load PHPMailer via Composer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Password validation
    if (strlen($password) < 6) {
        echo "Password must be greater than 6 characters.";
        exit;
    }

    // Check if the password contains at least one letter and one symbol
    if (!preg_match('/[a-zA-Z]/', $password)) {
        echo "Password must contain at least one letter.";
        exit;
    }

    if (!preg_match('/[\W_]/', $password)) {
        echo "Password must contain at least one symbol.";
        exit;
    }

    // Ensure passwords match
    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit;
    }

    // Hash the password
    $password_hashed = password_hash($password, PASSWORD_BCRYPT);

    $otp = rand(100000, 999999); // Generate 6-digit OTP

    // Check if email already exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        echo "Email already registered!";
        exit;
    }

    // Insert user data into the database
    $stmt = $conn->prepare("INSERT INTO users (full_name, email, password, otp) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $full_name, $email, $password_hashed, $otp);

    if ($stmt->execute()) {
        $_SESSION['email'] = $email;

        // Send OTP via Email
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'bhavyashahbvs@gmail.com'; // Replace with your Gmail address
            $mail->Password = 'drxa yrdf cmkq yrwn';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('bhavyashahbvs@gmail.com', 'Kodeless Website builder');
            $mail->addAddress($email);
            $mail->Subject = "Your OTP Code";
            $mail->Body = "Your OTP code is: $otp";

            $mail->send();
            header("Location: verify_otp.php"); // Redirect to OTP verification page
            exit();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>
