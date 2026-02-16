<?php
session_start();
include "db.php"; // Ensure database connection

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_SESSION['user_id'])) {
        echo json_encode(["status" => "error", "message" => "User not logged in"]);
        exit;
    }

    $user_id = $_SESSION['user_id'];
    $template_id = $_POST['template_id'] ?? null;
    $template_name = $_POST['template_name'];
    $template_html = $_POST['template_html'];
    $template_css = $_POST['template_css'];

    if ($template_id) {
        // Update existing template
        $stmt = $conn->prepare("UPDATE templates SET template_name = ?, template_html = ?, template_css = ? WHERE id = ? AND user_id = ?");
        $stmt->bind_param("sssii", $template_name, $template_html, $template_css, $template_id, $user_id);
    } else {
        // Insert new template
        $stmt = $conn->prepare("INSERT INTO templates (user_id, template_name, template_html, template_css) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("isss", $user_id, $template_name, $template_html, $template_css);
    }

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Template saved successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error saving template"]);
    }

    $stmt->close();
    $conn->close();
}
?>
