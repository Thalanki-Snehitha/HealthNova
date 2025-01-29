// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#4caf50" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 5 },
        move: { speed: 3 },
    },
});

// Confetti Animation on Load
document.addEventListener("DOMContentLoaded", () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
    });
});

// Chart.js Example - Water Intake
const waterCtx = document.getElementById("waterChart").getContext("2d");
new Chart(waterCtx, {
    type: "doughnut",
    data: {
        labels: ["Consumed", "Remaining"],
        datasets: [
            {
                data: [750, 1250],
                backgroundColor: ["#4caf50", "#e0e0e0"],
            },
        ],
    },
    options: { responsive: true },
});

// Chart.js Example - Steps
const stepsCtx = document.getElementById("stepsChart").getContext("2d");
new Chart(stepsCtx, {
    type: "bar",
    data: {
        labels: ["Morning", "Afternoon", "Evening"],
        datasets: [
            {
                label: "Steps",
                data: [2000, 1500, 1500],
                backgroundColor: "#4caf50",
            },
        ],
    },
    options: { responsive: true },
});

// Chart.js Example - Sleep
const sleepCtx = document.getElementById("sleepChart").getContext("2d");
new Chart(sleepCtx, {
    type: "pie",
    data: {
        labels: ["Deep Sleep", "Light Sleep", "Awake"],
        datasets: [
            {
                data: [5, 2, 1],
                backgroundColor: ["#4caf50", "#81c784", "#e0e0e0"],
            },
        ],
    },
    options: { responsive: true },
});
