<?php
session_start();
include "db.php";

if (!isset($_SESSION['user_id'])) {
    echo "User not logged in";
    exit;
}

if (!isset($_GET['id'])) {
    echo "No template selected";
    exit;
}

$template_id = $_GET['id'];
$user_id = $_SESSION['user_id'];

// Fetch the template data
$query = "SELECT template_name, template_html, template_css FROM templates WHERE id = ? AND user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ii", $template_id, $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo "Template not found";
    exit;
}

$template = $result->fetch_assoc();
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Template</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="flex">
        <!-- Sidebar -->
        <aside class="sidebar">
            <h3>Edit Components</h3>
            <button onclick="addComponent('navbar')">Add Navbar</button>
            <button onclick="addComponent('hero')">Add Hero Section</button>
            <button onclick="addComponent('testimonial')">Add Testimonial</button>
            <button onclick="addComponent('contact')">Add Contact Form</button>
            <button class="save-btn" onclick="saveTemplate(<?php echo $template_id; ?>)">Save Changes</button>

            <h2 class="section-title">Navbars</h2>
            <div class="sidebar-item" draggable="true" data-component="blog1" ondragstart="drag(event)" onclick="previewComponent('blog1')">
                <img src="images/blog1.png" alt="Blog Layout 1">
            </div>
            <div class="sidebar-item" draggable="true" data-component="blog2" ondragstart="drag(event)" onclick="previewComponent('blog2')">
                <img src="images/blog2.png" alt="Blog Layout 2">
            </div>
            
            <!-- Add the remaining sidebar items here -->
        </aside>

        <!-- Editor Container -->
        <!-- <div class="editor-container">
            <h2>Editing: <?php echo htmlspecialchars($template['template_name']); ?></h2>
            <div id="templateEditor">
                <style id="templateStyles"><?php echo $template['template_css']; ?></style>
                <div id="templateContent"><?php echo $template['template_html']; ?></div>
            </div>
        </div> -->
    </div>

    <!-- Added hover preview and main preview container -->
    <div id="hover-preview" class="hover-preview"></div>

    <!-- Main Content -->
    <main class="main-content">
        <h2 class="main-title">Preview</h2>
        <div id="preview-container" class="preview-box" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="editor-container">
            <h2>Editing: <?php echo htmlspecialchars($template['template_name']); ?></h2>
            <div id="templateEditor">
                <style id="templateStyles"><?php echo $template['template_css']; ?></style>
                <div id="templateContent"><?php echo $template['template_html']; ?></div>
            </div>
        </div>
        </div>
    </main>

    <script>
        function addComponent(type) {
            let templateContent = document.getElementById('templateContent');
            let newComponent = '';

            if (type === 'navbar') {
                newComponent = `<nav class="navbar"><a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a></nav>`;
            } else if (type === 'hero') {
                newComponent = `<section class="hero"><h1>Welcome</h1><p>Your text here.</p></section>`;
            } else if (type === 'testimonial') {
                newComponent = `<section class="testimonial"><p>"This is a testimonial."</p><h4>- User</h4></section>`;
            } else if (type === 'contact') {
                newComponent = `<section class="contact"><h2>Contact Us</h2><form><input type="text" placeholder="Name"><input type="email" placeholder="Email"><button type="submit">Send</button></form></section>`;
            }

            templateContent.innerHTML += newComponent;
        }

        function saveTemplate(templateId) {
            const updatedHtml = document.getElementById('templateContent').innerHTML;
            const updatedCss = document.getElementById('templateStyles').innerHTML;

            fetch('save_edited_template.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    template_id: templateId,
                    template_html: updatedHtml,
                    template_css: updatedCss
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert("Template saved successfully!");
                    window.location.href = "view_templates.html";
                } else {
                    alert("Error saving template: " + data.message);
                }
            })
            .catch(error => console.error("Error:", error));
        }

        function allowDrop(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            let component = event.dataTransfer.getData("component");
            previewComponent(component);
        }

        function previewComponent(component) {
            let previewContainer = document.getElementById("preview-container");
            let newComponent = '';

            if (component === 'blog1') {
                newComponent = `<div class="blog-preview"><h3>Blog Layout 1</h3><p>Sample content...</p></div>`;
            } else if (component === 'blog2') {
                newComponent = `<div class="blog-preview"><h3>Blog Layout 2</h3><p>Sample content...</p></div>`;
            }

            previewContainer.innerHTML += newComponent;
        }
        
    </script>
</body>
</html>
