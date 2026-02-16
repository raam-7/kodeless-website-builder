<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userMessage = $_POST['message'] ?? '';

    $API_KEY = "AIzaSyDT7x7sCxuKNnD16xcJzkYbSphDfJrVrLw";
    $endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$API_KEY";

    $postData = [
        "contents" => [[
            "parts" => [[ "text" => $userMessage ]]
        ]]
    ];

    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    if (isset($data['candidates'][0]['content']['parts'][0]['text'])) {
        $reply = $data['candidates'][0]['content']['parts'][0]['text'];

        // Convert markdown code blocks to PrismJS format
        $formatted = preg_replace_callback('/```(\w+)?\n(.*?)```/s', function ($matches) {
            $lang = htmlspecialchars($matches[1] ?? 'plaintext', ENT_QUOTES | ENT_HTML5);
            $code = htmlspecialchars($matches[2], ENT_QUOTES | ENT_HTML5);
            return "<pre><code class=\"language-$lang\">$code</code></pre>";
        }, $reply);

        // Convert remaining line breaks to <br>, but preserve <pre><code> content
        $formatted = preg_replace_callback('/<(?!pre|\/pre|code|\/code).*?>|[^<]+/s', function ($part) {
            if (preg_match('/^<pre><code.*?>.*?<\/code><\/pre>$/s', $part[0])) {
                return $part[0]; // don't touch code blocks
            }
            return nl2br($part[0]);
        }, $formatted);

        echo $formatted;
    } else {
        echo "Sorry, I couldn't get a valid response.";
    }
    $formatted = preg_replace_callback('/```(\w+)?\n(.*?)```/s', function ($matches) {
        $lang = htmlspecialchars($matches[1] ?? 'plaintext', ENT_QUOTES | ENT_HTML5);
        $code = htmlspecialchars($matches[2], ENT_QUOTES | ENT_HTML5);
        return "
        <div class=\"code-container\" style=\"position: relative\">
            <button class=\"copy-btn\" style=\"position: absolute; top: 8px; right: 8px; z-index: 1\">Copy</button>
            <pre><code class=\"language-$lang\">$code</code></pre>
        </div>";
    }, $reply);
    
}
?>
