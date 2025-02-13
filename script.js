// Example of real-time stats simulation
const stats = document.getElementById('stats');

setInterval(() => {
    const randomReach = Math.floor(Math.random() * 2000 + 1000);
    const randomEngagement = (Math.random() * 10).toFixed(2);
    const randomClicks = Math.floor(Math.random() * 500);

    stats.innerHTML = `
        <p>Account Reach: ${randomReach}</p>
        <p>Engagement Rate: ${randomEngagement}%</p>
        <p>Clicks: ${randomClicks}</p>
    `;
}, 3000);
