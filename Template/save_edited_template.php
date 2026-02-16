<?php
session_start();
include "db.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "User not logged in"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['template_id']) || !isset($data['template_html']) || !isset($data['template_css'])) {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
    exit;
}

$template_id = $data['template_id'];
$template_html = $data['template_html'];
$template_css = $data['template_css'];
$user_id = $_SESSION['user_id'];

// Update template in the database
$query = "UPDATE templates SET template_html = ?, template_css = ? WHERE id = ? AND user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ssii", $template_html, $template_css, $template_id, $user_id);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Template updated successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to update template"]);
}

$stmt->close();
$conn->close();
?>
