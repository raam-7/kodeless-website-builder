<?php
session_start();
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "", "cricket_shop"); // Ensure correct database

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Get JSON data from frontend
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["section"])) {
    $section = $data["section"];

    // Insert into removed_sections if not exists
    $stmt = $conn->prepare("INSERT IGNORE INTO removed_sections (section_id) VALUES (?)");
    $stmt->bind_param("s", $section);

    if ($stmt->execute()) {
        echo json_encode(["success" => "Section removed successfully"]);
    } else {
        echo json_encode(["error" => "Failed to remove section"]);
    }

    $stmt->close();
}

$conn->close();
?>
