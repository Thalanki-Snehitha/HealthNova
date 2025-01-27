// Handle login functionality with confetti
function handleLogin(event) {
    event.preventDefault();  // Prevent form submission

    // Simulating login success (you should replace this with actual authentication logic)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (email === "test@healthnova.com" && password === "password123") {
        alert("Login Successful");
        triggerConfetti();  // Trigger confetti animation on success
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert("Invalid credentials");
    }
}

// Confetti effect for successful login
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
    });
}
