<?php
// Start session to retrieve user information
session_start();

// Include your database connection file
require 'db.php';

// Check if user is logged in (you can check for session or authentication token)
if (!isset($_SESSION['user_id'])) {
    // If user is not logged in, redirect to login page
    header("Location: ../login");
    exit();
}

// Get user information from the database
$user_id = $_SESSION['user_id']; // assuming user_id is stored in the session after login

// Fetch user details from the database using mysqli
$sql = "SELECT full_name, email FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

// Check if user was found
if ($result->num_rows == 0) {
    echo "User not found!";
    exit();
}

// Fetch the user data
$user = $result->fetch_assoc();

// Store user info in variables for easy use
$user_name = $user['full_name'];
$user_email = $user['email'];

// Close the statement and connection
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kodeless Website Builder</title>
    <link rel="stylesheet" href="home.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f9b876d4ef.js" crossorigin="anonymous"></script>
</head>
<body>
        
<header>
    <nav class="navbar">
        <div class="logo">
            <img src="../images/Kodeless_Logo (1).svg" alt="Kodeless Logo">
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="aboutus.html">About us</a></li>
            <li><a href="contact.html">Contact us</a></li>
            <li id="profile-menu">
                <a href="#" id="profile-link">
                    <i class="fas fa-user-circle"></i> Profile
                </a>
                <div class="dropdown" id="profile-dropdown">
                    <div class="profile-info">
                        <p><strong>Name:</strong> <span id="user-name"><?php echo htmlspecialchars($user_name); ?></span></p>
                        <p><strong>Email:</strong> <span id="user-email"><?php echo htmlspecialchars($user_email); ?></span></p>
                    </div>
                    <hr>
                    <ul>
                        <li><a href="settings.php">Settings</a></li>
                        <li><a href="logout.php">Logout</a></li>
                    </ul>
                    <hr>
                    <!-- <div class="theme-selection">
                        <label for="theme">Choose Theme:</label>
                        <select id="theme-dropdown" class="theme-btn">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div> -->
                </div>
            </li>
        </ul>
    </nav>
</header>

    
    <section class="hero">
        <div class="bubble-container">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </div>
        
        <div class="hero-content">
            <h1>KODELESS WEBSITE BUILDER</h1>
            <p>Time to get organised</p>
            <p>Build your website effortlessly with Kodeless. No coding required!</p>
            <div class="buttons">
                <a href="start.html" class="btn primary">Get Started</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="../images/image (2).png" alt="Illustration">
        </div>
     
    </section>

    
    <div class="faq">
        <button id="open-chatbot-btn">💬</button>
    
    <!-- Chatbot container -->
    <div id="chatbot-container">
      <div id="chatbot-header">
        <div class="header-content">
          <img src="../images/av.jfif" alt="User Avatar" class="avatar">
          <div class="chat-info">
            <h4>Chat with us!</h4>
            <p><span class="status-dot"></span> We reply immediately.</p>
          </div>
          <!-- <button class="close-btn">×</button> -->
        </div>
      </div>
      <div id="chatbot-body">
        <p class="prompt">Tell us what you want to know</p>
        <div class="faq-options">
          <button class="faq-btn" data-answer="Yes, our platform allows you to build a website from scratch. You can start by choosing components from the sidebar without the need for any coding.">1. Can I build a website from scratch?</button>
          <button class="faq-btn" data-answer="Our prices are low because we source directly from manufacturers.">2. What is the benefit of using a template instead of starting from scratch?</button>
          <button class="faq-btn" data-answer="No, you don't need any coding skills! Our platform is designed to be user-friendly with drag-and-drop tools, choose components from the sidebar and making it easy to create a website without any technical knowledge.">3. Do I need any coding skills to build my website?</button>
          <button class="faq-btn" data-answer="Shipping costs depend on the location and package size.">How much is shipping?</button>
          
        </div>
      </div>
    </div>
     </div>
   
     <script src="../Home/script.js"></script>

    <footer class="footer">
        <div class="footer-container">
            <div class="footer-newsletter">
                <h3>Sign up & get 10% Off</h3>
                <form action="#" method="POST">
                    <input type="email" placeholder="Enter your email" required>
                    <button type="submit">Sign up</button>
                </form>
                <p class="footer-note">*New customers only. Offer lasts 30 days. See Terms.</p>
            </div>
    
            <div class="footer-links">
                <div class="footer-column">
                    <h4>My Account</h4>
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Kodeless</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
        
    
        <!-- Social Media Icons -->
        <div class="footer-social">
            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="mailto:your-email@example.com"><i class="fas fa-envelope"></i></a>
        </div>
    
        <div class="footer-bottom">
            <p>Powered by <span class="brand">Kodeless Website Builder</span></p>
            <p>© 2025 Kodeless. All Rights Reserved.</p>
        </div>
    </footer>
    
    <!-- FontAwesome for Icons -->
    
</body>
</html>
