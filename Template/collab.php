<?php
require 'db.php'; // Ensure database connection

if (!isset($_GET['template_id'])) {
    die("Template ID is required");
}

$template_id = intval($_GET['template_id']); // Sanitize input

// Fetch template details
$sql = "SELECT template_name, template_html, template_css FROM templates WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $template_id);
$stmt->execute();
$result = $stmt->get_result();
$template = $result->fetch_assoc();

if (!$template) {
    die("Template not found");
}

$collab_link = "http://localhost/kodeless-new/template/collab.php?template_id=" . $template_id;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collaborate on Template</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .collab-link {
            display: block;
            margin: 10px 0;
            padding: 10px;
            background: #f3f3f3;
            border-radius: 5px;
        }
        #output {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            background: white;
        }
        .editable {
            outline: 2px dashed #007bff;
            padding: 2px;
            min-width: 50px;
            display: inline-block;
        }
        button {
            margin: 5px;
            padding: 8px 12px;
            border: none;
            background: #007bff;
            color: white;
            cursor: pointer;
            border-radius: 4px;
        }
        button:hover {
            background: #0056b3;
        }
        .cancel {
            background: #dc3545;
        }
    </style>
</head>
<body>
    <h2>Collaborate on: <?php echo htmlspecialchars($template['template_name']); ?></h2>
    <p class="collab-link">
        Share this link for collaboration: 
        <a href="<?php echo $collab_link; ?>" target="_blank"><?php echo $collab_link; ?></a>
    </p>

    <button onclick="enableEditing()">Edit</button>
    <button onclick="saveCollab(<?php echo $template_id; ?>)" style="display:none;">Save</button>
    <button class="cancel" onclick="disableEditing()" style="display:none;">Cancel</button>

    <h3>Live Preview</h3>
    <div id="output"></div>

    <script>
        let isEditing = false;

        function enableEditing() {
            isEditing = true;
            document.querySelector('button[onclick="enableEditing()"]').style.display = 'none';
            document.querySelector('button[onclick="saveCollab(<?php echo $template_id; ?>)"]').style.display = 'inline-block';
            document.querySelector('button[onclick="disableEditing()"]').style.display = 'inline-block';

            document.querySelectorAll('#output *').forEach(element => {
                if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
                    element.contentEditable = true;
                    element.classList.add('editable');
                }
            });
        }

        function disableEditing() {
            isEditing = false;
            document.querySelector('button[onclick="enableEditing()"]').style.display = 'inline-block';
            document.querySelector('button[onclick="saveCollab(<?php echo $template_id; ?>)"]').style.display = 'none';
            document.querySelector('button[onclick="disableEditing()"]').style.display = 'none';

            document.querySelectorAll('#output *').forEach(element => {
                element.contentEditable = false;
                element.classList.remove('editable');
            });
        }

        function renderPreview() {
            const htmlContent = `<?php echo addslashes($template['template_html']); ?>`;
            const cssContent = `<?php echo addslashes($template['template_css']); ?>`;

            document.getElementById('output').innerHTML = htmlContent;

            let styleTag = document.getElementById('dynamicStyles');
            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = 'dynamicStyles';
                document.head.appendChild(styleTag);
            }
            styleTag.innerHTML = cssContent;
        }

        function saveCollab(templateId) {
            let editedHtml = document.getElementById('output').innerHTML;

            fetch('save_collab.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ template_id: templateId, template_html: editedHtml })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                disableEditing();
            })
            .catch(error => console.error('Error saving:', error));
        }

        document.addEventListener('DOMContentLoaded', renderPreview);
    </script>
</body>
</html>
