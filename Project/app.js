// Confetti effect for successful interactions
function triggerConfetti() {
  confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 }
  });
}

// Demo button click effect
function startDemo() {
  alert('Starting your Health Sync demo!');
  triggerConfetti(); // Trigger confetti on action
}

// Ensure that the confetti trigger works correctly after the page is loaded
window.onload = function() {
  // Initialize if needed (this is just an example)
  console.log('Welcome to HealthNova!');
};
