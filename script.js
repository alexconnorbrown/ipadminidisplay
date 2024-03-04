document.addEventListener('DOMContentLoaded', function() {
    updateElapsedTime();
    setInterval(updateElapsedTime, 1000);
    updatePrice();
});


function updateElapsedTime() {
    const startDate = new Date('2024-03-01T00:00:00');
    const endDate = new Date('2024-04-01T00:00:00');
    const now = new Date();
    const elapsed = now - startDate;
    const total = endDate - startDate;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
    const percentage = ((elapsed / total) * 100).toFixed(2);
    document.getElementById('timeElapsed').textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    document.getElementById('percentToApril').textContent = `${percentage}% of the way to April 1st, 2024.`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressBar').textContent = `${percentage}%`;
}

function updatePrice() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("btc_price").textContent = `${data.bpi.USD.rate_float.toFixed(2)} USD`;
        })
        .catch(error => console.error('Error fetching Bitcoin price:', error));
    setTimeout(updatePrice, 60000); // Update price every minute
}
