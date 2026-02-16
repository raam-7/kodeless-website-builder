document.addEventListener("DOMContentLoaded", () => {
    const openChatbotButton = document.getElementById("open-chatbot-btn");
    const chatbotContainer = document.getElementById("chatbot-container");
    const faqButtons = document.querySelectorAll(".faq-btn");
    const chatbotBody = document.getElementById("chatbot-body");

    // Initially hide the chatbot container
    chatbotContainer.style.display = "none";

    // Toggle chatbot visibility when the open button is clicked
    openChatbotButton.addEventListener("click", () => {
        // Toggle the display property of the chatbot container
        if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
            chatbotContainer.style.display = "flex";
        } else {
            chatbotContainer.style.display = "none";
        }
    });

    // Function to simulate a typing animation
    function showTypingAnimation() {
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("bot-message", "typing");
        typingDiv.innerText = "Typing...";
        chatbotBody.appendChild(typingDiv);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        return typingDiv;
    }

    // Function to display messages in chatbot
    function appendMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
        messageDiv.innerText = text;
        chatbotBody.appendChild(messageDiv);

        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    // FAQ button interactions
    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Show the user's message
            appendMessage(button.innerText, "user");

            // Check if the chatbot is already open
            if (chatbotContainer.style.display === "flex") {
                // If the chatbot is open, check if there's an existing bot message
                const existingBotMessage = chatbotBody.querySelector(".bot-message");
                if (existingBotMessage) {
                    // Remove the previous bot message (if any)
                    existingBotMessage.remove();
                }
            } else {
                // If the chatbot is closed, open it
                chatbotContainer.style.display = "flex";
            }

            // Show typing animation
            const typingDiv = showTypingAnimation();

            // Simulate the bot's reply after a delay
            const answer = button.getAttribute("data-answer");
            setTimeout(() => {
                typingDiv.remove();
                appendMessage(answer, "bot");
            }, 1000);
        });
    });
});
// Toggle the visibility of the dropdown when the profile link is clicked
document.getElementById('profile-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default link behavior (if any)
    
    // Toggle dropdown visibility
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicked outside of the profile menu
window.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profile-menu');
    const dropdown = document.getElementById('profile-dropdown');
    
    if (!profileMenu.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
// Get theme dropdown and profile dropdown
const themeDropdown = document.getElementById('theme-dropdown');
const profileDropdown = document.getElementById('profile-dropdown');

// Set the default theme to Light
profileDropdown.classList.add('light');

// Add event listener to change the theme
themeDropdown.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;

    // Remove all theme classes
    profileDropdown.classList.remove('light', 'dark', 'green', 'blue');

    // Add the selected theme class
    profileDropdown.classList.add(selectedTheme);
});
