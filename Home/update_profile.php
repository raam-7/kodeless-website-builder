<?php
session_start();
require 'db.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$user_id = $_SESSION['user_id'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $updates = [];
    $params = [];

    if (!empty($_POST['new_name'])) {
        $updates[] = "full_name = ?";
        $params[] = trim($_POST['new_name']);
    }

    if (!empty($_POST['new_email'])) {
        $updates[] = "email = ?";
        $params[] = trim($_POST['new_email']);
    }

    if (!empty($_POST['new_password'])) {
        $hashed_password = password_hash(trim($_POST['new_password']), PASSWORD_DEFAULT);
        $updates[] = "password = ?";
        $params[] = $hashed_password;
    }

    if (!empty($updates)) {
        $params[] = $user_id;
        $sql = "UPDATE users SET " . implode(", ", $updates) . " WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param(str_repeat("s", count($params) - 1) . "i", ...$params);
        $stmt->execute();
        $stmt->close();

        // Optionally, update session variables if name or email changed
        if (isset($_POST['new_name'])) {
            $_SESSION['user_name'] = $_POST['new_name'];
        }
        if (isset($_POST['new_email'])) {
            $_SESSION['user_email'] = $_POST['new_email'];
        }

        header("Location: home.php");
        exit();
    } else {
        echo "No changes were made.";
    }
}
?>
