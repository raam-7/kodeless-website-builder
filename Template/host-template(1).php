<?php
require 'db.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (!isset($_GET['template_name']) || empty(trim($_GET['template_name']))) {
        die(json_encode(["status" => "error", "message" => "Template name is required"]));
    }

    $template_id = trim($_GET['template_name']);

    // Fetch template data from the database
    $stmt = $conn->prepare("SELECT template_name, template_html, template_css FROM templates WHERE id = ?");
    $stmt->bind_param("s", $template_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        die(json_encode(["status" => "error", "message" => "Template not found"]));
    }

    $template = $result->fetch_assoc();
    $template_html = $template['template_html'];
    $template_css = "<style>\n" . $template['template_css'] . "\n</style>";
    $template_name=$template['template_name'];
    $stmt->close();

    // Create a directory in the root folder
    $folder_name = "../" . preg_replace('/[^A-Za-z0-9_-]/', '_', $template_name);
    $full_path = __DIR__ . "/" . $folder_name;

    if (!file_exists($full_path)) {
        mkdir($full_path, 0777, true);
    }

    // Generate the index.html file
    $index_file = $full_path . "/index.html";
    $html_content = "<!DOCTYPE html>\n<html lang='en'>\n<head>\n<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<title>$template_name</title>\n$template_css\n</head>\n<body>\n$template_html\n</body>\n</html>";

    file_put_contents($index_file, $html_content);

    echo json_encode(["status" => "success", "message" => "Template hosted successfully!", "url" => $folder_name . "/index.html"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
?>
