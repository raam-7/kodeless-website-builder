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

if (!empty($data['data'])) {
    foreach ($data['data'] as $item) {
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
    echo "Content saved successfully!";
} else {
    echo "No data received!";
}

// Close connection
$conn->close();
?>
