function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = "";

    // Simple validation
    if (username == "" || password == "") {
        errorMessage.textContent = "Both fields are required!";
        return;
    }

    // Dummy credentials (replace with real authentication logic)
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard or homepage after successful login
        window.location.href = "index.html"; // Replace with your target page
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}