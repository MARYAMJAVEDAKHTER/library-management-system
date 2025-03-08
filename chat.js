function toggleChatbot() {
    let chatbotBox = document.getElementById("chatbot-box");
    chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
}

function sendMessage(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chatbot-input");
        let message = input.value.trim();
        if (message) {
            let chatbox = document.getElementById("chatbot-messages");
            chatbox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
            input.value = "";
            chatbotResponse(message);
        }
    }
}

function chatbotResponse(message) {
    let chatbox = document.getElementById("chatbot-messages");
    let response = "What I can do for you?.......";
    if (message.toLowerCase().includes("attendance")) {
        response = "You can check your attendance in the Student Portal.";
    }
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
}
