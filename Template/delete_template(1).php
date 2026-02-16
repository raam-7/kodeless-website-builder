<?php
session_start();
include "db.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "User not logged in"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['template_id'])) {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
    exit;
}

$template_id = $data['template_id'];
$user_id = $_SESSION['user_id'];

// Ensure the template belongs to the logged-in user
$query = "DELETE FROM templates WHERE id = ? AND user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ii", $template_id, $user_id);
if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Template deleted"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to delete template"]);
}

$stmt->close();
$conn->close();
?>
