let totalMilliseconds = 0; // Initialize total milliseconds
let interval; // Variable to hold the interval ID

// Function to format time in hh:mm:ss:ms
function formatTime(milliseconds) {
    const hours = String(Math.floor(milliseconds / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((milliseconds % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, '0');
    const ms = String(milliseconds % 1000).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}:${ms}`;
}

// Function to update the counter display
function updateCounter() {
    document.getElementById('counter').innerText = formatTime(totalMilliseconds);
}

// Function to start the counter
function startCounter() {
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(() => {
        totalMilliseconds += 100; // Increment by 100ms
        updateCounter();
    }, 100); // Update every 100ms
}

// Function to stop the counter
function stopCounter() {
    clearInterval(interval); // Stop the interval
}

// Function to reset the counter
function resetCounter() {
    stopCounter(); // Stop the counter if it's running
    totalMilliseconds = 0; // Reset milliseconds
    updateCounter(); // Update display
}

// Event listeners for buttons
document.getElementById('startButton').addEventListener('click', startCounter);
document.getElementById('stopButton').addEventListener('click', stopCounter);
document.getElementById('resetButton').addEventListener('click', resetCounter);