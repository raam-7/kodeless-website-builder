<?php
session_start();
require 'db.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php'; // Adjust the path as needed

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $new_name = trim($_POST['new_name']);
    $new_email = trim($_POST['new_email']);
    $new_password = trim($_POST['new_password']);
    $changes = [];

    // Update name if changed
    if (!empty($new_name) && $new_name !== $_SESSION['user_name']) {
        $stmt = $conn->prepare("UPDATE users SET full_name = ? WHERE id = ?");
        $stmt->bind_param("si", $new_name, $user_id);
        $stmt->execute();
        $_SESSION['user_name'] = $new_name;
        $changes[] = "Name";
    }

    // Update email if changed
    if (!empty($new_email) && $new_email !== $_SESSION['user_email']) {
        $stmt = $conn->prepare("UPDATE users SET email = ? WHERE id = ?");
        $stmt->bind_param("si", $new_email, $user_id);
        $stmt->execute();
        $_SESSION['user_email'] = $new_email;
        $changes[] = "Email";
    }

    // Update password if provided
    if (!empty($new_password)) {
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $stmt->bind_param("si", $hashed_password, $user_id);
        $stmt->execute();
        $changes[] = "Password";
    }

    // Send email notification if name or email was changed
    if (!empty($changes)) {
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'bhavyashahbvs@gmail.com'; // Replace with your Gmail address
            $mail->Password = 'drxa yrdf cmkq yrwn'; // Replace with your SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Recipients
            $mail->setFrom('bhavyashahbvs@gmail.com', 'Kodeless Website Builder');
            $mail->addAddress($new_email); // Send to the updated email address

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Profile Update Notification';
            $mail->Body = '<p>Dear ' . htmlspecialchars($new_name) . ',</p>';
            $mail->Body .= '<p>Your profile has been updated successfully. The following changes were made:</p>';
            $mail->Body .= '<ul>';
            foreach ($changes as $change) {
                $mail->Body .= '<li>' . $change . '</li>';
            }
            $mail->Body .= '</ul>';
            $mail->Body .= '<p>If you did not make these changes, please contact our support team immediately.</p>';
            $mail->Body .= '<p>Best regards,<br>Kodeless Website Builder Team</p>';

            $mail->send();
        } catch (Exception $e) {
            // Handle errors (optional)
        }
    }

    header("Location: home.php");
    exit();
}

// Fetch current user information
$stmt = $conn->prepare("SELECT full_name, email FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$stmt->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings - Kodeless Website Builder</title>
    <link rel="stylesheet" href="set.css">
</head>
<body>
    <main>
        <h2>Account Settings</h2>
        <form action="settings.php" method="POST">
            <label for="new_name">New Name:</label>
            <input type="text" id="new_name" name="new_name" value="<?php echo htmlspecialchars($user['full_name']); ?>">

            <label for="new_email">New Email:</label>
            <input type="email" id="new_email" name="new_email" value="<?php echo htmlspecialchars($user['email']); ?>">

            <label for="new_password">New Password:</label>
            <input type="password" id="new_password" name="new_password">

            <button type="submit">Save Changes</button>
        </form>
    </main>
</body>
</html>
