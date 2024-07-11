document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-btn');
    const display = document.getElementById('random-number');

    button.addEventListener('click', async () => {
        try {
            const response = await fetch('/random');
            const data = await response.json();
            display.textContent = 'Random Number: ' + data.number;
        } catch (error) {
            console.error('Error fetching random number:', error);
        }
    });
});
