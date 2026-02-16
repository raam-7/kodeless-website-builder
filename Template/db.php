<?php
$servername = "localhost";
$username = "root"; // Change if using a live server
$password = "";
$database = "kode";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
