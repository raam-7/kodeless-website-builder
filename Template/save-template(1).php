<?php
session_start();
include "db.php"; // Your database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_SESSION['user_id'])) {
        echo json_encode(["status" => "error", "message" => "User not logged in"]);
        exit;
    }

    $user_id = $_SESSION['user_id'];
    $template_name = $_POST['template_name'];
    $template_html = $_POST['template_html'];
    $template_css = $_POST['template_css'];

    $stmt = $conn->prepare("INSERT INTO templates (user_id, template_name, template_html, template_css) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("isss", $user_id, $template_name, $template_html, $template_css);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Template saved successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error saving template"]);
    }

    $stmt->close();
    $conn->close();
}
?>
