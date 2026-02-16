<?php
session_start();
include "db.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "User not logged in"]);
    exit;
}

$user_id = $_SESSION['user_id'];
$query = "SELECT id, template_name, template_html, template_css, created_at FROM templates WHERE user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$templates = [];
while ($row = $result->fetch_assoc()) {
    $templates[] = $row;
}

echo json_encode(["status" => "success", "templates" => $templates]);

$stmt->close();
$conn->close();
?>
