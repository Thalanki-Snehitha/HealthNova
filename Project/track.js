document.getElementById("sync-device").addEventListener("click", () => {
    alert("Device Synced Successfully!");
    document.getElementById("heart-rate").textContent = "75 bpm";
    document.getElementById("steps").textContent = "10,242";
    document.getElementById("calories").textContent = "230 kcal";
    document.getElementById("oxygen-level").textContent = "97%";
    document.getElementById("stress-level").textContent = "15%";
});

document.getElementById("refresh-data").addEventListener("click", () => {
    alert("Refreshing data...");
    // Add functionality for real-time refresh here
});
