<?php
session_start();
require 'db.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php'; // Load PHPMailer

if (!isset($_SESSION['email'])) {
    echo "<script>alert('Session expired. Please try again.'); window.location.href='index.html';</script>";
    exit;
}

$email = $_SESSION['email'];

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['verify'])) {
    $entered_otp = $_POST['otp'];
    
    // Fetch OTP from database
    $stmt = $conn->prepare("SELECT otp FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    
    if ($user && $entered_otp == $user['otp']) {
        // Update user as verified and clear OTP
        $stmt = $conn->prepare("UPDATE users SET verified = 1, otp = NULL WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();

        // Send Welcome Email
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username = 'bhavyashahbvs@gmail.com'; // Replace with your Gmail address
            $mail->Password = 'drxa yrdf cmkq yrwn';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('bhavyashahbvs@gmail.com', 'Kodeless Website Builder');
            $mail->addAddress($email);

            $mail->isHTML(true);
            $mail->Subject = 'Welcome to Kodeless Website Builder';
            $mail->Body    = "<p>Dear User,</p>
                              <p>Congratulations! Your account has been successfully verified.</p>
                              <p>Welcome to <strong>Kodeless Website Builder</strong>. Start building amazing websites without coding!</p>
                              <p>Best Regards,<br>Kodeless Website Builder Team</p>";

            $mail->send();
        } catch (Exception $e) {
            // Log error if needed
        }

        echo "<script>window.location.href='index.html';</script>";
        exit;
    } else {
        echo "<script>alert('Invalid OTP. Please try again.'); window.history.back();</script>";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['resend'])) {
    $new_otp = rand(100000, 999999);
    
    // Update OTP in database
    $stmt = $conn->prepare("UPDATE users SET otp = ? WHERE email = ?");
    $stmt->bind_param("is", $new_otp, $email);
    $stmt->execute();
    
    // Send new OTP via email
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username = 'bhavyashahbvs@gmail.com'; // Replace with your Gmail address
        $mail->Password = 'drxa yrdf cmkq yrwn';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('bhavyashahbvs@gmail.com', 'Kodeless Website Builder');
        $mail->addAddress($email);

        $mail->isHTML(true);
        $mail->Subject = 'Your OTP Code';
        $mail->Body    = "<p>Your new OTP code is: <strong>$new_otp</strong></p>";

        $mail->send();
        echo "<script>alert('A new OTP has been sent to your email.');</script>";
    } catch (Exception $e) {
        echo "<script>alert('Error sending OTP: {$mail->ErrorInfo}');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify OTP</title>
    <style>
        * { font-family: 'Poppins', sans-serif; }
        body { display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #7b6cf6, #60a9ff); }
        .container { background: #fff; padding: 40px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); width: 400px; }
        .container h2 { margin-bottom: 10px; }
        .container input, .container button { width: 100%; padding: 12px; margin: 10px 0; border-radius: 5px; font-size: 16px; }
        .container button { background: #7b6cf6; color: #fff; border: none; cursor: pointer; transition: 0.3s; }
        .container button:hover { background: #6054d6; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Verify OTP</h2>
        <p>Enter the OTP sent to your email.</p>
        <form method="POST">
            <input type="text" name="otp" placeholder="Enter OTP" required>
            <button type="submit" name="verify">Verify</button>
            <button type="submit" name="resend" style="background: #ff7b6c;">Resend OTP</button>
        </form>
    </div>
</body>
</html>
