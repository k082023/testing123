// Function to fetch JSON data from the server
async function fetchJsonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return [];
    }
}

// Function to create a card element
function createCardElement(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Create card content
    card.innerHTML = `
        <img src="${data.image}" alt="${data.title}">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <!-- Add more content here based on your JSON structure -->
    `;

    return card;
}

// Function to render cards
function renderCards(data) {
    const cardContainer = document.getElementById('cardContainer');
    if (!cardContainer) {
        console.error('Card container not found.');
        return;
    }

    // Clear existing content
    cardContainer.innerHTML = '';

    // Create and append card elements
    data.forEach(item => {
        const cardElement = createCardElement(item);
        cardContainer.appendChild(cardElement);
    });
}

// Load and render cards from the JSON data file
const jsonDataUrl = 'data.json';

fetchJsonData(jsonDataUrl)
    .then(data => {
        renderCards(data);
    });
