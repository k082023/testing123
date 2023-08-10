// JavaScript for loading JSON data and creating cards

// Function to create a card
function createCard(data) {
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('card');

    // Create card content (you can modify this based on your JSON structure)
    card.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <!-- Add more content here based on your JSON structure -->
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
}

// Fetch and load JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            createCard(item);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
