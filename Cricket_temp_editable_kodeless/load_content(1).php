<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "", "cricket_shop"); // Ensure correct database

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Fetch saved content
$content_query = "SELECT section, content FROM saved_content";
$content_result = $conn->query($content_query);

$content_data = [];
while ($row = $content_result->fetch_assoc()) {
    $content_data[] = $row;
}

// Fetch removed sections
$removed_query = "SELECT section_id FROM removed_sections";
$removed_result = $conn->query($removed_query);

$removed_sections = [];
while ($row = $removed_result->fetch_assoc()) {
    $removed_sections[] = $row['section_id'];
}

// Return JSON response
echo json_encode(["content" => $content_data, "removed" => $removed_sections]);

$conn->close();
?>