<?php
require 'db.php'; 

$data = json_decode(file_get_contents("php://input"), true);
$template_id = intval($data['template_id']);
$template_html = $data['template_html'];

$sql = "UPDATE templates SET template_html = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $template_html, $template_id);

if ($stmt->execute()) {
    echo json_encode(["message" => "Template updated successfully!"]);
} else {
    echo json_encode(["message" => "Failed to update template"]);
}
?>
