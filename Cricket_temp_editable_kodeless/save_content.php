<?php
// Database connection
$host = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$database = "cricket_shop";

$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['content'])) {
    // Save or update content
    foreach ($data['content'] as $item) {
        $section = $conn->real_escape_string($item['section']);
        $content = $conn->real_escape_string($item['content']);

        // Check if section exists
        $checkQuery = "SELECT section FROM saved_content WHERE section = '$section'";
        $result = $conn->query($checkQuery);

        if ($result->num_rows > 0) {
            // Update existing content
            $updateQuery = "UPDATE saved_content SET content = '$content' WHERE section = '$section'";
            $conn->query($updateQuery);
        } else {
            // Insert new content
            $insertQuery = "INSERT INTO saved_content (section, content) VALUES ('$section', '$content')";
            $conn->query($insertQuery);
        }
    }
}

if (!empty($data['removed'])) {
    // Clear the removed_sections table before saving new data
    $conn->query("TRUNCATE TABLE removed_sections");

    // Save removed sections
    foreach ($data['removed'] as $sectionId) {
        $sectionId = $conn->real_escape_string($sectionId);
        $insertQuery = "INSERT INTO removed_sections (section_id) VALUES ('$sectionId')";
        $conn->query($insertQuery);
    }
}

echo "Content and removed sections saved successfully!";

// Close connection
$conn->close();
?>