// Function to toggle the hamburger menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Function to toggle popup visibility
function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

// Function to send the report or unban request to the Discord webhook
function sendToDiscord(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your request has been submitted!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your request. Please try again.');
    });
}

// Submit Report
function submitReport() {
    const playerName = document.getElementById('reportPlayer').value;
    const reason = document.getElementById('reportReason').value;
    
    if (playerName && reason) {
        const reportData = {
            username: playerName,
            content: `Report for Player: ${playerName}\nReason: ${reason}`,
        };
        sendToDiscord("https://discord.com/api/webhooks/1352628391337263175/ts5K-b9ww1mqfVxN3UlFY0LLeKubiLvtzYj4DkbLq2ZmRBpGNhLUbKrtg3sq5tM0WVVT", reportData);
        togglePopup('reportPopup');
    } else {
        alert("Please fill in all fields.");
    }
}

// Submit Unban Request
function submitUnbanRequest() {
    const playerName = document.getElementById('unbanPlayer').value;
    const unbanReason = document.getElementById('unbanReason').value;
    
    if (playerName && unbanReason) {
        const unbanData = {
            username: playerName,
            content: `Unban Request for Player: ${playerName}\nReason: ${unbanReason}`,
        };
        sendToDiscord("https://discord.com/api/webhooks/1352628391337263175/ts5K-b9ww1mqfVxN3UlFY0LLeKubiLvtzYj4DkbLq2ZmRBpGNhLUbKrtg3sq5tM0WVVT", unbanData);
        togglePopup('unbanPopup');
    } else {
        alert("Please fill in all fields.");
    }
}
