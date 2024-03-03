function updateElapsedTime() {
    const startDate = new Date('2024-03-01T00:00:00');
    const endDate = new Date('2024-04-01T00:00:00');
    const now = new Date();

    // Calculate elapsed time
    const elapsed = now - startDate;
    const total = endDate - startDate;
    const elapsedSeconds = Math.floor(elapsed / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const days = Math.floor(elapsedHours / 24);

    // Calculate percentage
    const percentage = ((elapsed / total) * 100).toFixed(2);

    // Update the DOM
    document.getElementById('timeElapsed').textContent = `${days} days, ${elapsedHours % 24} hours, ${elapsedMinutes % 60} minutes, and ${elapsedSeconds % 60} seconds`;
    document.getElementById('percentToApril').textContent = `${percentage}% of the way to April 1st, 2024.`;
}

// Update every second
setInterval(updateElapsedTime, 1000);
