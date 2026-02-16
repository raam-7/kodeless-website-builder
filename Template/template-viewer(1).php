<?php
session_start();
include "db.php";

if (!isset($_SESSION['user_id'])) {
    die("User not logged in");
}

if (!isset($_GET['id'])) {
    die("Invalid request");
}

$template_id = intval($_GET['id']);
$user_id = $_SESSION['user_id'];

$query = "SELECT template_name, template_html, template_css FROM templates WHERE id = ? AND user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ii", $template_id, $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    $template_name = $row['template_name'];
    $template_html = $row['template_html'];
    $template_css = $row['template_css'];
} else {
    die("Template not found!");
}

$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($template_name); ?></title>
    <style><?php echo $template_css; ?></style>
</head>
<body>
    <?php echo $template_html; ?>
</body>
</html>
