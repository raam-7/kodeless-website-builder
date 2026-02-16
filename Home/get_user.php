<?php
session_start();
header('Content-Type: application/json');
require'db.php';

if (isset($_SESSION['user'])) {
    echo json_encode([
        "logged_in" => true,
        "name" => $_SESSION['user']['name'],
        "email" => $_SESSION['user']['email']
    ]);
} else {
    echo json_encode(["logged_in" => false]);
}
?>
